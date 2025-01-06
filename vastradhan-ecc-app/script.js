let cartIcon = document.querySelector('.cart-icon');
let body = document.querySelector('body');
let close = document.querySelector('.close');
let productListHtml = document.querySelector(".listProduct");
let listCartHtml = document.querySelector('.list-cart');
let iconCartSpan = document.querySelector('.icon-cart span')




const brandingVideo = document.getElementById('branding-video');
const brandingContainer = document.getElementById('branding-video-container');
const websiteContent = document.getElementById('website-content');

// Add event listener for video end
brandingVideo.addEventListener('ended', () => {
    brandingContainer.style.display = 'none'; // Hide branding video
    websiteContent.style.display = 'block';  // Show website content
});






let listProducts = [];
let Carts = [];

cartIcon.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

close.addEventListener('click', () => {
    body.classList.toggle('showCart')
})  


const addDataToHtml = () => {
    productListHtml.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img class="saree-img"
                    src="${product.image}"
                    alt="">
                <h1>${product.name}</h1>
                <div id="price">$ ${product.Price}</div>
                <button id="addCart" class="addCart">
                    Add to Cart
                </button>
            `;
            productListHtml.appendChild(newProduct);
        })
    }
}


productListHtml.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = Carts.findIndex((value) => value.product_id == product_id);
    if(Carts.length <= 0){
        Carts = [{
            product_id : product_id,
            quantity : 1
        }]
    }
    else if (positionThisProductInCart < 0){
        Carts.push({
            product_id : product_id,
            quantity: 1 
        });
    }
    else{
        Carts[positionThisProductInCart].quantity = Carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHtml();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(Carts));
}

const addCartToHtml = () => {
    listCartHtml.innerHTML = '';
    let totalQuantity = 0;
    if(Carts.length > 0){
       Carts.forEach(cart => {
        totalQuantity = totalQuantity + cart.quantity
        let newCart = document.createElement('div');
        newCart.classList.add('item');
        newCart.dataset.id = cart.product_id;
        let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
        let info = listProducts[positionProduct]; 
        newCart.innerHTML = `
            <div class="image">
                        <img src="${info.image}" class="image" alt="">
                    </div>
                    <div class="name">
                        ${info.name}
                    </div>
                    <div class="totalPrice">
                        $${info.Price * cart.quantity}
                    </div>
                    <div class="quantity">
                        <span class="minus"><</span>
                        <span>${cart.quantity}</span>
                        <span class="plus">></span>
                    </div>
        `;
        listCartHtml.appendChild(newCart);
       })
    }
    iconCartSpan.innerHTML = totalQuantity;

}

listCartHtml.addEventListener('click', (event) => {
    let positionClick =   event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart =  Carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        switch (type){
            case 'plus':
                Carts[positionItemInCart].quantity = Carts[positionItemInCart].quantity + 1;
                break;
            default:
                let valueChange = Carts[positionItemInCart].quantity - 1;
                if(valueChange > 0){
                    Carts[positionItemInCart].quantity = valueChange;
                }
                else{
                    Carts.splice(positionItemInCart, 1);
                }
                break;    
        }
    }
    addCartToMemory();
    addCartToHtml();
}

const intiApp = () => {
    //get data from json
    fetch('Products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data
        addDataToHtml()

        // get cart from memory
        if(localStorage.getItem('cart')){
            Carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHtml();
        }
        
    })
}
intiApp()


//splash screen video

