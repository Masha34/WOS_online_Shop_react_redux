import React, { Fragment} from "react";
import { Redirect } from "react-router-dom";
import "./editProduct.css";
import { saveData } from "../../Services/api-service";
import { connect } from "react-redux";
import { editOneProduct } from "../../Actions/shopActions";

class EditProduct extends React.Component {

    state = {
            "name": this.props.SearchCurrentProduct.name,
            "isRedirect": false
    }
    getName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEditProduct = (_id) => {
        const { List, editOneProduct, SearchCurrentProduct } = this.props;
        if (SearchCurrentProduct !== null) {
            const newList = List.map((item) => item._id === SearchCurrentProduct._id ? {
                "name": this.state.name,
            } : item);
            editOneProduct(newList);
            saveData(newList).then(() =>
                this.setState({
                    isRedirect: true
                })
            )
        }
    }

    editProductList = (event) =>{
        event.preventDefault();
        const {_id, name} =  this.props;
        const item = { _id, name};
        this.onEditProduct(item);
    }

    
    
    render(){   

        const { name, isRedirect } = this.state;

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
    const { List, SearchCurrentProduct } = shopReducer;
    return { List, SearchCurrentProduct }
}
const mapDispatchToProps = {
    editOneProduct,
    saveData
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);