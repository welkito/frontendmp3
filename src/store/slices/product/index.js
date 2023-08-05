import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import {  addCategory, addProducts, deleteCategory, deleteProduct, getCategory, getProducts, updateCategory, updateProduct} from "./slices"

const INITIAL_STATE = {
    productData : [],
    currentPage : 1,
    totalPage : 1,
    isLoading : false,
    category : [],
    secondCategory : [],
} 

const productSlice = createSlice({
    name : "product",
    initialState : INITIAL_STATE,
    extraReducers : builder => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.productData= action.payload?.result
            state.totalPage = action.payload?.totalPage
            state.currentPage = action.payload?.currentPage
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(getCategory.pending, (state, action) => {
            state.isCategoryLoading = true
        })
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.isCategoryLoading = false
            state.category = action.payload?.data?.category
            state.secondCategory = action.payload?.secondData
        })
        builder.addCase(getCategory.rejected,(state, action) => {
            state.isCategoryLoading = false
        })
        builder.addCase(addProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.productData= action.payload?.result
            state.totalPage = action.payload?.totalPage
            state.currentPage = action.payload?.currentPage
        })
        builder.addCase(addProducts.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(addCategory.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(addCategory.pending, (state, action) => {
            state.isCategoryLoading = true
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.isCategoryLoading = false
            state.category = action.payload?.data?.category
            state.secondCategory = action.payload?.secondData
        })
        builder.addCase(updateProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.productData= action.payload?.result
            state.totalPage = action.payload?.totalPage
            state.currentPage = action.payload?.currentPage
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updateCategory.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updateCategory.pending, (state, action) => {
            state.isCategoryLoading = true
        })
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.isCategoryLoading = false
            state.category = action.payload?.data?.category
            state.secondCategory = action.payload?.secondData
        })
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.productData= action.payload?.result
            state.totalPage = action.payload?.totalPage
            state.currentPage = action.payload?.currentPage
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(deleteCategory.pending, (state, action) => {
            state.isCategoryLoading = true
        })
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.isCategoryLoading = false
            state.category = action.payload?.data?.category
            state.secondCategory = action.payload?.secondData
        })
    }
})

export default productSlice.reducer