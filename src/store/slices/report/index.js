import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import {postReport} from "./slices"

const INITIAL_STATE = {
    bestProducts : [],
    summary : [],
    details : [],
    productSoldGraph : [],
    aggregateSalesGraph : [],
    graphColumn : [],
    isLoading : false,
    dateFrom : "2023-07-10",
    dateTo: "2023-07-17",
}

const ReportSlice = createSlice({
    name : "report",
    initialState : INITIAL_STATE,
    extraReducers : builder => {
        builder.addCase(postReport.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(postReport.fulfilled, (state, action) => {
            state.bestProducts = action.payload?.bestProducts
            state.summary = action.payload?.summary
            state.details = action.payload?.details
            state.productSoldGraph = action.payload?.productSoldGraph
            state.aggregateSalesGraph = action.payload?.aggregateSalesGraph
            state.graphColumn = action.payload?.graphColumn
            state.isLoading = false
            state.dateFrom = action.payload?.dateFrom
            state.dateTo= action.payload?.dateTo
        })
        builder.addCase(postReport.rejected, (state, action) => {
            state.isLoading = false
        })
       

    }
})

export default ReportSlice.reducer