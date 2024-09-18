
let options = {
    method : "GET"
}

let Url = "https://fakestoreapi.com/products/21";
fetch(Url, options)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});

