const URL = "http://localhost:4000/api/v1/products";
// const URL = "http://localhost:4000/api/v1/products/List.json";

export async function getAllProducts() {
    const allProducts = await fetch(URL)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
    return allProducts;
}

export async function getDeleteProduct(Id) {
    const allProducts = await fetch(`http://localhost:4000/api/v1/products-delete/${Id}`, {
        method: 'DELETE'
    })
        .then((response) => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
    return allProducts;
}


// Add new product
export const addNewOneProduct = (product) => {
      console.log("product ", product)
    // const response = fetch(`http://localhost:4000/api/v1/add-product/${product}`, {
    const response = fetch("http://localhost:4000/api/v1/add-product/new", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product), // дані можуть бути 'строкой' або {объектом}!
    }).then(response => {
        console.log("inside fetch", response)
      return response;
      // console.log("saveDate responce =>", response);
    }).catch(err => {
        console.log("catch", err);
      return err;
    });
    return response
  }
