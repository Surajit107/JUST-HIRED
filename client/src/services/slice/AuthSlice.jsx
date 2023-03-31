import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { LOGIN, SIGNUP } from "../api/Api";

// SignUp 
export const signupReq = createAsyncThunk("/signup", async ({ signupData, toast, navigate }, { rejectWithValue }) => {
    try {
        const res = await SIGNUP(signupData)
        console.log(res?.data);
        toast.success("Registered Successfully.Please Login To Continue", {
            autoClose: 3500,
        })
        navigate('/login')
        return res?.data
    } catch (err) {
        // console.log(rejectWithValue(err.response.data));
        return rejectWithValue(err.response.data)
    }
})


// LogIn
export const loginReq = createAsyncThunk("/login", async ({ loginData, toast, navigate }, { rejectWithValue }) => {
    try {
        const res = await LOGIN(loginData)
        console.log(res?.data);
        toast.success("Login Successfully", {
            autoClose: 3500,
        })
        navigate('/')
        return res?.data
    } catch (err) {
        // console.log(rejectWithValue(err.response.data));
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
        })
        builder.addCase(loginReq.rejected, (state, { payload }) => {
            state.message = "Failed"
            state.loading = false
            state.error = payload
        })
    }
})


export const { doLogOut } = AuthSlice.actions
export default AuthSlice.reducer