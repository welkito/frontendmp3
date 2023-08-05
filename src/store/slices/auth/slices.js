import { createAsyncThunk } from "@reduxjs/toolkit"
// import { registerValidationSchema } from "./validation"
// import { encrypt } from "./encryption"
// import api from "../../utils/api.instance"
import Axios from "axios";
import Toast from "react-hot-toast"
// import 'react-toastify/dist/ReactToastify.css';

// @import schema validation
import { loginValidationSchema} from "./validation";

// @create async thunk

//done
export const login = createAsyncThunk(
    "userauth/login",
    async (payload, { rejectWithValue }) => {
        try {

            await loginValidationSchema.validate(payload)
            
            //conditional according type data
            // const data = {
            //     username : (payload.type === "username" ? payload.field : "" ),
            //     email : (payload.type === "email" ? payload.field : "" ),
            //     phone : (payload.type === "telephone" ? payload.field : "" ),
            //     password : payload.password
            // }
            
            //ubah
            // console.log( payload)
            const PARAMETER = "/auth/login"
            console.log(process.env.REACT_APP_API_URL)
            const response = await Axios.post(process.env.REACT_APP_API_URL+ PARAMETER , payload)
            if(!response.data){
                return rejectWithValue({message : "Account not verify"})
            }
            Toast.success("Welcome!")
            // @save token to local storage
            localStorage.setItem("token", response?.headers?.authorization.split(" ")[1])
            // console.log("berhasil!")
            //toaster:
            //welcome!

            return response.data?.user
        } catch (error) {
            console.error(error)
            Toast.error("Login : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
)

//done
export const keepLogin = createAsyncThunk(
    "auth/keepLogin",
    async (payload, { rejectWithValue }) => {
        try {
            // get token from local storage

            const token = localStorage.getItem("token")
            console.log(`token: ${token}`)
            // console.log("#token dalam keeplogin : "+token)
            // @if token empty
            if (!token) {
                return rejectWithValue({ message : "token not found." })
            }
            // @get data user
            const PARAMETER = "/auth"
            const response = await Axios.get(process.env.REACT_APP_API_URL+PARAMETER,{headers :{"Authorization" : `Bearer ${token}`}})
            // console.log("#data dalam keeplogin : "+response)
            console.log("BERHAsil")
            return response.data?.userResult
        } catch (error) {
            Toast.error("KeepLogin : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
)

//done
export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            // @delete token from local storage
            localStorage.removeItem("token")
            // localStorage.clear()
            Toast.success("Good Bye! See you soon!")
            return {}
        } catch (error) {
            Toast.error("Error : something went wrong.")
            return rejectWithValue(error.response.data)
        }
    }
) 
