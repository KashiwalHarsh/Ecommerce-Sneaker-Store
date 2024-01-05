import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import {publicRequest, userRequest} from "../requestMethods"
import { 
    getProductFailure, 
    getProductStart, 
    getProductSuccess,

    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,

    addProductStart,
    addProductSuccess,
    addProductFailure,
} from "./productRedux";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}
export const Logout = async (dispatch)=>{
    dispatch(logout())
}

export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());
    try{
        const res = await userRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async (id,dispatch)=>{
    dispatch(deleteProductStart());
    try{
        //risky!!
        // const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFailure())
    }
}

export const addProducts = async (product,dispatch)=>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure())
    }
}