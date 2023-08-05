import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import Toast from "react-hot-toast"


export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (payload, { rejectWithValue }) => {
        try {
            // @generate parameter
            const { cat_id, word, page, sortLetter, sortPrice } = payload
            const PARAMETER = `?cat_id=${cat_id}&word=${word}&page=${page}&sortLetter=${sortLetter}&sortPrice=${sortPrice}`
            // console.log(process.env.REACT_APP_API_PRODUCT_URL)
            // @request to get articles
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL+ encodeURI(PARAMETER))
            console.log("data",data)
            // @return data
            return data
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not get products.")
            return rejectWithValue(error.response.data)
        }
    }
)

export const getCategory = createAsyncThunk(
    "product/getCategory",
    async (payload, { rejectWithValue }) => {
        try {
            const PARAMETER = "/category"
            // @request to get all category
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER)
            const secondData = [...data?.category]
            data?.category?.unshift({id:"",name: "All Category"})

            console.log("category",data)
            // @return data
            return {data,secondData}
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not get category details.")
            return rejectWithValue(error.response.data)
        }
    }
)
//add,delete,update
export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (payload, { rejectWithValue }) => {
        try {
            // @generate parameter
            const token = localStorage.getItem("token")
            await Axios.post(process.env.REACT_APP_API_PRODUCT_URL, payload, {headers :{"Authorization" : `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
            // @request to get articles
            const PARAMETER = `?cat_id=${""}&word=${""}&page=${1}&sortLetter=${"ASC"}&sortPrice=${"asc"}`
            // @request to get articles
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL+ encodeURI(PARAMETER))
            console.log("data",data)
            Toast.success("Product has been updated!")
            // @return data
            return data
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not add new product.")
            return rejectWithValue(error.response.data)
        }
    }
)

export const addCategory = createAsyncThunk(
    "product/addCategory",
    async (payload, { rejectWithValue }) => {
        try {
            const PARAMETER = "/category"
            const token = localStorage.getItem("token")
            await Axios.post(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER, payload, {headers :{"Authorization" : `Bearer ${token}`}})
            // @request to get all category
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER)
            const secondData = [...data?.category]
            data?.category?.unshift({id:"",name: "All Category"})

            console.log("category",data)
            Toast.success("Category has been added!")
            // @return data
            return {data,secondData}
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not add new category.")
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (payload, { rejectWithValue }) => {
        try {
            // @generate parameter
            const token = localStorage.getItem("token")
            await Axios.patch(process.env.REACT_APP_API_PRODUCT_URL, payload, {headers :{"Authorization" : `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
            // @request to get articles
            const PARAMETER = `?cat_id=${""}&word=${""}&page=${1}&sortLetter=${"ASC"}&sortPrice=${"asc"}`
            // @request to get articles
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL+ encodeURI(PARAMETER))
            console.log("data",data)
            Toast.success("Product has been updated!")
            // @return data
            return data
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not update product.")
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateCategory = createAsyncThunk(
    "product/updateCategory",
    async (payload, { rejectWithValue }) => {
        try {
            const PARAMETER = "/category"
            const token = localStorage.getItem("token")
            await Axios.patch(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER, payload,{headers :{"Authorization" : `Bearer ${token}`}})
            // @request to get all category
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER)
            const secondData = [...data?.category]
            data?.category?.unshift({id:"",name: "All Category"})
            Toast.success("Category has been updated!")
            console.log("category",data)
            // @return data
            return {data,secondData}
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not update category.")
            return rejectWithValue(error.response.data)
        }
    }
)


export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (payload, { rejectWithValue }) => {
        try {
            // @generate parameter
            const PARAMETER_DEL = `/${payload}`
            const token = localStorage.getItem("token")
            await Axios.delete(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER_DEL, {headers :{"Authorization" : `Bearer ${token}`}})
            // @request to get articles
            const PARAMETER = `?cat_id=${""}&word=${""}&page=${1}&sortLetter=${"ASC"}&sortPrice=${"asc"}`
            // @request to get articles
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL+ encodeURI(PARAMETER))
            Toast.success("RIP Product, you will be missed")
            console.log("data",data)
            // @return data
            return data
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not delete specific product.")
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteCategory = createAsyncThunk(
    "product/deleteCategory",
    async (payload, { rejectWithValue }) => {
        try {
            const PARAMETER = `/category/${payload}`
            const token = localStorage.getItem("token")
            await Axios.delete(process.env.REACT_APP_API_PRODUCT_URL + PARAMETER, {headers :{"Authorization" : `Bearer ${token}`}})
            // @request to get all category
            const {data} = await Axios.get(process.env.REACT_APP_API_PRODUCT_URL + "/category", {headers :{"Authorization" : `Bearer ${token}`}})
            const secondData = [...data?.category]
            console.log("berhasil delete")
            data?.category?.unshift({id:"",name: "All Category"})
            Toast.success("RIP category, you will be missed.")
            // @return data
            return {data,secondData}
        } catch (error) {
            console.error(error)
            Toast.error("Error : could not delete specific category.")
            return rejectWithValue(error.response.data)
        }
    }
)