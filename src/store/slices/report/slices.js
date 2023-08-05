import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
// import Toast from "react-hot-toast"
import { ReportValidationSchema } from "./validation";
import Toast from "react-hot-toast"



export const postReport = createAsyncThunk(
    "report/postReport",
    async (payload, { rejectWithValue }) => {
        try {
            console.log(payload)
            //validate / no validate
            await ReportValidationSchema.validate(payload)
            const token = localStorage.getItem("token")
            // @request to generate report
            // const { message,graphic,bestSeller,summary,data } = await Axios.post(process.env.REACT_APP_API_REPORT_URL,payload)
            const response = await Axios.post(process.env.REACT_APP_API_REPORT_URL,payload,{headers :{"Authorization" : `Bearer ${token}`}})
            console.log(response?.data)
            const{message,graphic,bestSeller,summary,data} =response?.data
            
            // @configure data 
            const graphColumn = graphic.map((item)=>item.date)
            const productSoldGraph = graphic.map((item)=>item.totalSales)
            const aggregateSalesGraph = graphic.map((item)=>item.totalRevenue) 
            const bestSellers = bestSeller.filter((item)=>item.name = [item.name,true])
            bestSellers[bestSellers.length - 1].name[1] = false
            //combine all response
            const result = {
                bestProducts :bestSellers,
                summary : summary,
                details : data,
                graphColumn : graphColumn,
                dateFrom : payload?.dateFrom,
                dateTo : payload?.dateTo,
                productSoldGraph : productSoldGraph,
                aggregateSalesGraph : aggregateSalesGraph
            }
            console.log(result)
            Toast.success("Report has been generated")
            // @return data
            return result
        } catch (error) {
            console.error(error)
            Toast.error("Error : Cannot get precise report :/")
            return rejectWithValue(error.response.data)
        }
    }
)

