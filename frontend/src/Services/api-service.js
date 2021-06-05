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
export const saveData = (product) => {
    //   console.log("saveData ", List)
    const response = fetch("http://localhost:4000/api/v1/products/List.json", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product), // дані можуть бути 'строкой' або {объектом}!
    }).then(response => {
      return response;
      // console.log("saveDate responce =>", response);
    }).catch(err => {
      return err;
    });
    return response
  }


//   export const updateDatabase = () => {
//     const data = fetch(URL)  
//     .then(responce => {
//       // console.log("update => ", responce)
//       return responce.json();
//     // }).catch(err => {
//     //   return err;
//     }).then(data => {
//       // console.log("update ", data);
//       if (data !== null) {
//                return data
//       } else {
//         return []
//       }   
//     })
//     // .catch(err => console.log(err))
//     .catch(err => {
//         return err
//     })
//     return data;
//   }