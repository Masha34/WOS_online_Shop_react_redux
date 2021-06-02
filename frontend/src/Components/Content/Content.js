import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import "./Content.css";
import ContentItem from "./ContentItem/ContentItem";
// import { saveData } from "../../../Services/api-service";
import { getAllProducts } from "../../Services/api-service";
import { getAllProd } from "../../Actions/shopActions";

// const Content extends Component {
    const Content = ({List, getAllProd}) => {        
        // getAllProducts().then(data => {
        //     console.log("allProduct", data.products)
        // }); 

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
                 <ContentItem  key={products.Id}  {...products} />
                //  <ContentItem Id={products._Id} key={products.Id} name={products.name} price={products.price} descriptions={products.descriptions} images={products.images} category={products.category} seller={products.seller} stock={products.stock} salePrice={products.salePrice} numOfReviews={products.numOfReviews} numOfPurchase={products.numOfPurchase}  />
             )
             })
//  console.log("props", props)
        return(
            <Fragment>
            <div className="container">
                    <div className="row">
                        <div className="col-12 product_area">
                                <div className="product_block">
                                        {item.length > 0 ? item: <h2>list is empty</h2>} 
                                </div>
                        </div>
                    </div>
            </div>
        </Fragment>
        )
     }
    
const mapStateToProps = ({ shopReducer }) => {
    const {List} = shopReducer;
    return {List}
}
const mapDispatchToProps = {
    getAllProducts,
    getAllProd
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);



