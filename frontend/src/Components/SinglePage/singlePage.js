import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import "./singlePage.css";

// Service 
import { getDeleteProduct } from "../../Services/api-service";


const SinglePage = ({ SingleProduct }) => {

    if (SingleProduct === "") {
        return <Redirect to="/" />
    }

    const { _id, category, descriptions, name, numOfPurchase, images, numOfReviews, price, seller, stock } = SingleProduct;
    const onDelete = () => {
        getDeleteProduct(_id)
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row single_product_page">
                    <div className="col-5 single_product_block">
                        <img className="" src={images[0].url} alt="" />
                        <p className="">Descriptions: {descriptions} </p>
                    </div>
                    <div className="col-7 single_product_block">
                        <h2>{name}</h2>
                        <p className="">Category: {category} </p>
                        <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> {numOfReviews} Reviews</p>
                        <p className="">Purchased {numOfPurchase} people</p>
                        <h3>UAH {price}</h3>
                        <p className="">Seller: {seller} </p>
                        <p className="stock">In stock: {stock} pieces <i className="fas fa-cart-plus"></i></p>
                        <div>
                            <Link to="/edit-product" className="table">
                                <span className="fa-stack">
                                    <i className="fas fa-edit"></i>
                                </span>
                            </Link>
                            <Link to="/" onClick={onDelete} className="table danger">
                                <span className="fa-stack">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ shopReducer }) => {
    console.log("mapstatetoprops", shopReducer)
    const { SingleProduct } = shopReducer;
    return { SingleProduct }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);