const Product = require("../models/product");

const catchErrors = require("../middleware/catchErrors");
const APIExtends = require("../helpers/api");

exports.getProducts = catchErrors(async(req, res, next) => {
    // const products = await Product.find();
    const resPerPage = 16;
    const productsCount = await Product.countDocuments();

    const apiFeatures = new APIExtends(Product.find(), req.query)
        .search()
        .filter()

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;

    apiFeatures.pagination(resPerPage)
    products = await apiFeatures.query;


    res.status(200).json({
        success: true,
        // message: "getProducts",
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })
})

// exports.getSingleProduct = catchErrors(async(req,res, next) => {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json({
//         success: true,
//         // message: "getSingleProduct",
//         product
//     })
// })

exports.getSingleProduct = catchErrors(async (req, res, next) => {
    const product = await Product.findById({ _id: req.params.id });
    res.status(200).json({
        success: true,
        message: "getSingleProduct",
        product
    })
})

exports.addProduct = catchErrors(async(req, res, next) => {
    // console.log("req",req.body)
    console.log("req", req.body)
    
    const products = await Product.create(req.body)   
    res.status(200).json({
        success: true,
        message: "addProduct",
        products
        // data: req.body
    })
})

// exports.addProduct = catchErrors(async(req, res, next) => {
//     const products = await Product.insertMany(
//         {
//             "name": "",
//             "price": "",
//             "descriptions": "",
//             "images": [
//                 {
//                     "product_id": "products/g2030405",
//                     "url": ""
//                 }
//             ],
//             "category": "",
//             "seller": "",
//             "stock": "",
//         }
//     )   
//     res.status(200).json({
//         success: true,
//         message: "addProduct",
//         products
//     })
// })
// exports.addProduct = catchErrors(async(req, res, next) => {
//     const products = await Product.insertOne()    //  !!!!!!!!!!!!!!!!
//     res.status(200).json({
//         success: true,
//         message: "addProduct",
//         products
//     })
// })

exports.deleteProduct = catchErrors(async(req, res, next) => {
    const idDeleteProduct = req.params.id;
    const products = await Product.deleteOne({_id: req.params.id});
    res.status(200).json({
        success: true,
        // message: "deleteProduct",
        idDeleteProduct
    })
})

exports.editProduct = catchErrors(async(req, res, next) => {
    const productEdit = await Product.findById({_id: req.params.id});
    res.status(200).json({
        success: true,
        // message: "editProduct",
        productEdit
    })
})

exports.get404Page = catchErrors((req, res, next) => {
    res.status(404).json({
        success: true,
        message: "Page-404"
    })   

})

exports.getHomePage = catchErrors((req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getHomePage"
    })
})