import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { LOGIN } from "../api/Api";
import axios from "axios";

// SignUp 
export const signupReq = createAsyncThunk("/signup", async ({ formData, toast, navigate }, { rejectWithValue }) => {
    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_BASE_URL}/user/signup`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    }
    try {
        const res = await axios(config)
        toast.success(`${res?.data?.message}.\nPlease Login To Continue`, {
            autoClose: 4000,
        })
        navigate('/login')
        return res?.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})


// LogIn
export const loginReq = createAsyncThunk("/signin", async ({ loginData, toast, navigate }, { rejectWithValue }) => {
    try {
        const res = await LOGIN(loginData)
        toast.success(res?.data?.message, {
            autoClose: 3500,
        })
        navigate('/')
        return res?.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})


const AuthSlice = createSlice({
    name: "authslice",
    initialState: {
        signup_data: [],
        login_data: [],
        error: "",
        message: "",
        loading: false
    },
    reducers: {
        doLogOut(state) {
            state.login_data = []
            window.localStorage.removeItem("user")
            window.localStorage.removeItem("token")
            toast.success("You Have Successfully Logged Out!", {
                autoClose: 3500,
            })
        }
    },
    extraReducers: (builder) => {
        // States For signupReq
        builder.addCase(signupReq.pending, (state) => {
            state.message = "Loading..."
            state.loading = true
        })
        builder.addCase(signupReq.fulfilled, (state, { payload }) => {
            state.message = "Success"
            state.loading = false
            state.signup_data = payload
        })
        builder.addCase(signupReq.rejected, (state, { payload }) => {
            state.message = "Failed"
            state.loading = false
            state.error = payload
            toast.error(payload?.message, {
                autoClose: 3500,
            })
        })

        // States For loginReq
        builder.addCase(loginReq.pending, (state) => {
            state.message = "Loading..."
            state.loading = true
        })
        builder.addCase(loginReq.fulfilled, (state, { payload }) => {
            state.message = "Success"
            state.loading = false
            state.login_data = payload
            window.localStorage.setItem("user", JSON.stringify(payload?.user))
            window.localStorage.setItem("token", JSON.stringify(payload?.token))
        })
        builder.addCase(loginReq.rejected, (state, { payload }) => {
            state.message = "Failed"
            state.loading = false
            state.error = payload
            toast.error(payload?.message, {
                autoClose: 3500,
            })
        })
    }
})


export const { doLogOut } = AuthSlice.actions
export default AuthSlice.reducer