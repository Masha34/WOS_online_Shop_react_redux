export const getAllProd = (shop_products) => {
    return {
        type: "ALL_PRODUCTS_LOADED",
        payload: shop_products
    }
}

export const getCurrentProduct = (product) => {
    return {
        type: "GET_CURRENT_PRODUCT",
        payload: product
    }
}
