const initialState = {
    List: [],
    SingleProduct: ""

}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS_LOADED":
            return {
                ...state,
                List: action.payload
            }
        case "GET_CURRENT_PRODUCT":
            return {
                ...state,
                SingleProduct: action.payload
            }
        default:
            return state;
    }
}
export default shopReducer;
