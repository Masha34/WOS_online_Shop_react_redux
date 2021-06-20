import React, { Fragment} from "react";
import { Redirect } from "react-router-dom";
import "./editProduct.css";
import { editProduct } from "../../Services/api-service";
import { connect } from "react-redux";
import { editOneProduct } from "../../Actions/shopActions";



class EditProduct extends React.Component {

    state = {
            "name": this.props.SingleProduct.name,
            "price": this.props.SingleProduct.price,
            "descriptions": this.props.SingleProduct.descriptions,
            "images": this.props.SingleProduct.images,
            "category": this.props.SingleProduct.category,
            "seller": this.props.SingleProduct.seller,
            "stock": this.props.SingleProduct.stock,
            "isRedirect": false
    }

    getName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    getPrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    getDescriptions = (event) => {
        this.setState({
            descriptions: event.target.value
        })
    }
    getImage = (event) => {
        this.setState({
            images: event.target.value
        })
    }
    getCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    getSeller = (event) => {
        this.setState({
            seller: event.target.value
        })
    }
    getStock = (event) => {
        this.setState({
            stock: event.target.value
        })
    }

    // onEditProduct = (_id) => {
    //     const { List, editOneProduct, SearchCurrentProduct } = this.props;
    //     if (SearchCurrentProduct !== null) {
    //         const newList = List.map((item) => item._id === SearchCurrentProduct._id ? {
    //             "name": this.state.name,
    //         } : item);
    //         editOneProduct(newList);
    //         saveData(newList).then(() =>
    //             this.setState({
    //                 isRedirect: true
    //             })
    //         )
    //     }
    // }

    // editProductList = (event) =>{
    //     event.preventDefault();
    //     const {_id, name} =  this.props;
    //     const item = { _id, name};
    //     this.onEditProduct(item);
    // }

    
    
    render(){   

        const { name, price, descriptions, category, seller, stock, isRedirect } = this.state;

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
                                            <div className="h4 text-center">Edit Product</div>
                                            <div className="row pv-lg">
                                                   <div className="col-lg-10">
                                                    <form onSubmit={this.onEditProduct} className="form-horizontal ng-pristine ng-valid">
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product name</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getName} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={name} name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product price</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getPrice} className="form-control" id="inputContact1"
                                                                    type="number" placeholder={price} name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product descriptions</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getDescriptions} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={descriptions} name='' />
                                                            </div>
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product image</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getImage} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={images} name='' />
                                                            </div>
                                                        </div> */}
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product category</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getCategory} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={category} name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product seller</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getSeller} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={seller} name='' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">Product stock</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getStock} className="form-control" id="inputContact1"
                                                                    type="number" placeholder={stock} name='' />
                                                            </div>
                                                        </div>
                                                       
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10 edit_btn">
                                                                <button onClick = {this.editProductList} className="btn btn-info" type="submit">Save changes</button>
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
    const { List, SingleProduct } = shopReducer;
    return { List, SingleProduct }
}
const mapDispatchToProps = {
    editOneProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);