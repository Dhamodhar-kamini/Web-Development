let data = {
    name: "Radhe Radhe Krishna",
    email: "krishna123@gmail.com",
    status: "Active"
}


let options = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json",
        Authorization: "Bearer 909a20f8a814f1ac7044e8d23ea7b939c0bf0aa5ea1157dbc6e354e5ca85c755"
    },
    body: JSON.stringify(data)
};

fetch("https://fakestoreapi.com/products", options)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);

    let headingEl = document.getElementById("heading");
    headingEl.textContent = jsonData;
    console.log(headingEl);

});