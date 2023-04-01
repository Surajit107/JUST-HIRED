import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { LOGIN, SIGNUP } from "../api/Api";

// SignUp 
export const signupReq = createAsyncThunk("/signup", async ({ signupData, toast, navigate }, { rejectWithValue }) => {
    try {
        const res = await SIGNUP(signupData)
        // console.log(res?.data);
        toast.success(`${res?.data?.message}.\nPlease Login To Continue`, {
            autoClose: 4000,
        })
        navigate('/login')
        return res?.data
    } catch (err) {
        // console.log(rejectWithValue(err.response.data));
        return rejectWithValue(err.response.data)
    }
})


// LogIn
export const loginReq = createAsyncThunk("/signin", async ({ loginData, toast, navigate }, { rejectWithValue }) => {
    try {
        const res = await LOGIN(loginData)
        // console.log(res?.data);
        toast.success(res?.data?.message, {
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
            // console.log("login-payload=>", payload);
            window.localStorage.setItem("user", JSON.stringify(payload?.user))
            window.localStorage.setItem("token", JSON.stringify(payload?.token))
        })
        builder.addCase(loginReq.rejected, (state, { payload }) => {
            state.message = "Failed"
            state.loading = false
            state.error = payload
            // console.log(payload?.message);
            toast.error(payload?.message + " !!", {
                autoClose: 3500,
            })
        })
    }
})


export const { doLogOut } = AuthSlice.actions
export default AuthSlice.reducer