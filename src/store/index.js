import { configureStore } from "@reduxjs/toolkit"

// @import all reducer from slices
import authReducer from "./slices/auth"
import reportReducer from "./slices/report"
import productReducer from "./slices/product"
// @create store
const store = configureStore({
    reducer : {
        report : reportReducer,
        auth : authReducer,
        product : productReducer
    },
})

// @export store
export default store