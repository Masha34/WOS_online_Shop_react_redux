import React, {Fragment} from "react";
import { searchProduct } from "../../Actions/shopActions";
import { connect } from "react-redux";
import { Form, Button, FormControl} from 'react-bootstrap';


const Search = ({ searchProduct }) => {
    
    const onSearch = (event) => {
        searchProduct(event.target.value)
    }

    return(
        <Fragment>
            <Form inline>
                <FormControl onChange={onSearch} type="text" placeholder="Search" className="mr-sm-2" />
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <Button variant="outline-light">Search</Button>
                {/* <Button onClick={onSearch} variant="outline-light">Search</Button> */}
            </Form>
        </Fragment>
    )
}

const mapDispatchToProps = {
    searchProduct
}
export default connect(null, mapDispatchToProps)(Search);