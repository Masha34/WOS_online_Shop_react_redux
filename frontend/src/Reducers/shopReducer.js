const initialState = {
    List: [],
    SingleProduct: "",
    SearchCurrentProduct: ""

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


        case "SEARCH_PRODUCT":  
            if (action.payload === 0) {
                return state;
            }
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            if (newList.length === 0) {
                return {
                    ...state,
                    SearchCurrentProduct: []
                }
            } else {
                return {
                    ...state,
                    SearchCurrentProduct: newList
                }
            }
            
        default:
            return state;
    }
}
export default shopReducer;
