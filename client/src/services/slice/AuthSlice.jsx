import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const AuthSlice = createSlice({
    name: "authslice",
    initialState: {
        login_data: [],
        error: "",
        message: ""
    },
    reducers: {
        doLogOut(state, { payload }) {
            toast.success("You Have Successfully Logged Out!", {
                autoClose: 3500,
            })
        }
    }
})


export const { doLogOut } = AuthSlice.actions
export default AuthSlice.reducer