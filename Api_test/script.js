

// fetch("https://fakestoreapi.com/products")
// .then((res)=>{
//     return res.json();
// }).then((comdata) => {
//     let data1 = "";
//     comdata.map((values)=>{
//         data1 += `
//         <div id="card">
//             <h2 class="title">${values.title}</h2>
//             <img src="${values.image}" alt="">
//             <p> ${values.category} </p>
//             <p>${values.description}</p>
//             <p class="Pricing">$ ${values.price} </p>
            
//         </div>`
//     })
//     document.getElementById("cards").innerHTML = data1;
// })

fetch("https://fakestoreapi.com/products")
.then((response) => {
    return response.json()
}).then((successdata) => {
    // console.log(successdata);
    let data1 = "";
    successdata.map((values) => {
        data1 += `
            <div id="card">
            <h2 class="title">${values.title}</h2>
            <img src="${values.image}" alt="">
            <p class="Category"> ${values.category} </p>
            <p class="Description">${values.description}</p>
            <p class="Pricing">$ ${values.price}</p>
            <p class="Rating">Rating - ${values.rating.rate}</p>
        </div>
        `
    })
    document.getElementById("cards").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})
