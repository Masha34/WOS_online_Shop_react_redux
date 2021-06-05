import React, { Fragment} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./addNewProduct.css";
import { v4 as uuidv4 } from 'uuid';
import { saveData } from "../../Services/api-service";
import { addNewShopProduct  } from "../../Actions/shopActions";

class AddNewProduct extends React.Component {

    state = {
            "name": "",
            "price": "",
            "descriptions": "",
            "images": "",
            "category": "",
            "seller": "",
            "stock": "",
            // "salePrice": "",
            // "numOfReviews": "",
            // "numOfPurchase": "",
            "isRedirect": false

    }
    getProductName = (event) => {
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    getProductPrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    getProductDescription = (event) => {
        this.setState({
            descriptions: event.target.value
        })
    }
    getProductImage = (event) => {
        this.setState({
            images: event.target.value
        })
    }
    getProductCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    getProductSeller = (event) => {
        this.setState({
            seller: event.target.value
        })
    }
    getProductStock = (event) => {
        this.setState({
            stock: event.target.value
        })
    }

    addProduct = (event) =>{
        event.preventDefault();
        const { name, price, descriptions, images, category, seller, stock } = this.state;
        const _id = uuidv4();
        const newItem = { _id, name, price, descriptions, images, category, seller, stock };
        const { List, addNewShopProduct } = this.props;
        addNewShopProduct(newItem);
        List.push(newItem);
        saveData(List).then(() => {
            this.setState({
                isRedirect: true
            })
        })
    }

    
    render(){   

        const { isRedirect } = this.state;
        if (isRedirect) {     
            return (
                <Redirect to="/" />
            )
        }

        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="container bootstrap snippets bootdey">
                            <div className="row ng-scope">
                                <div className="col-md-12">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="h4 text-center">Add New Product</div>
                                            <div className="row pv-lg">
                                                <div className="col-lg-12">
                                                    <form onSubmit={this.addProduct} className="form-horizontal ng-pristine ng-valid">
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product name</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductName} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Product name" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product price</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductPrice} className="form-control" id="inputContact1"
                                                                    type="number" placeholder="Product price" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product description</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductDescription} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Product description" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product image</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductImage} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Product image" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product category</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductCategory} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Product category" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product seller</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductSeller} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Product seller" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product stock</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getProductStock} className="form-control" id="inputContact1"
                                                                    type="number" placeholder="Product stock" name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10 add_button">
                                                                <button className="btn btn-info" type="submit">Add New Product</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            )
    }
    
}
const mapStateToProps = ({shopReducer}) => {
    const { List } = shopReducer;
    return { List }
}
const mapDispatchToProps = {
    addNewShopProduct,
    saveData
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewProduct);