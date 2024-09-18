

fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
})
.then((objectData)=>{
   // console.log(objectData[1].title);
   let completeData = "";
   objectData.map((values)=> {
    completeData += `
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">${values.id}</th>
                <td>${values.title}</td>
                <td>$ ${values.price}</td>
                <td>${values.description}</td>
                <td>${values.category}</td>
                <td><img src=${values.image} /></td>
              </tr>
             
            </tbody>
          </table>

    `
   });
   document.getElementById("product-table").innerHTML = completeData;
});