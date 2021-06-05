import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Content.css";
import ContentItem from "./ContentItem/ContentItem";
import { getAllProducts } from "../../Services/api-service";
import { getAllProd } from "../../Actions/shopActions";

// const Content extends Component {
    const Content = ({List, SearchCurrentProduct, getAllProd}) => {        
        // getAllProducts().then(data => {
        //     console.log("allProduct", data.products)
        // }); 
        // console.log("props", props)
        useEffect(() => {
            // const  { getAllProd } = 
            getAllProducts().then(data => { 
                getAllProd(data.products);
            })
        }, [])
        // })
// console.log("uuu", List.length)
        const item = List.map(products => {           
             return(
                 <ContentItem  key={products._id}  {...products} />
                //  <ContentItem Id={products._Id} key={products.Id} name={products.name} price={products.price} descriptions={products.descriptions} images={products.images} category={products.category} seller={products.seller} stock={products.stock} salePrice={products.salePrice} numOfReviews={products.numOfReviews} numOfPurchase={products.numOfPurchase}  />
             )
             })

        return(
            <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 product_area">
                            <button>
                                <Link to="/add-product" className="add-btn" aria-current="page">Add new Product</Link>
                            </button>
                        <div className="product_block">
                                {item.length > 0 ? item: <h2>List is empty</h2>} 
                                    {/* якщо розкоментувати то не працює Search */}

                                {/* {SearchCurrentProduct.length === 0 ? List.map(products => {
                                    return (
                                        <ContentItem key={products._id}  {...products} />
                                    )
                                }) 
                                : SearchCurrentProduct.map(products => {
                                    return (
                                        <ContentItem key={products._id}  {...products} />
                                    )
                                }) }  */}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        )
     }
    
const mapStateToProps = ({ shopReducer }) => {
    const {List, SearchCurrentProduct} = shopReducer;
    return {List, SearchCurrentProduct}
}
const mapDispatchToProps = {
    getAllProducts,
    getAllProd
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);



