import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

/** we create a function that received a url as argument and return a promise */


function fectchData(urlApi) {
    return fetch(urlApi);
    
};

// fectchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .catch(error => console.log(error));

fectchData(`${API}/products`)
.then(response => response.json())
.then (products => {
    console.log(products);
    return fectchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product =>{
    console.log(product.title);
    return fectchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})
.catch(error => console.log(error))
.finally(() => console.log("finally"));