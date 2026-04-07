import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlics"
const store=configureStore({
    reducer:{
         auth:authSlice
    }
})

export default store;