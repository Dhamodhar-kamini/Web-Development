

fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
})
.then((completeData)=>{
    //console.log(completeData[1].title);
    let objectData = "";
    completeData.map((values)=>{
        objectData += `<div class="card"> <h2 class="title">${values.title}</h2>
                <img src=${values.image} alt="">
                <p class="description">${values.description}</p>
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p> </div>`
    });
    document.getElementById("cards").innerHTML = objectData;

}).catch((error)=>{
    console.log(error);
})
 