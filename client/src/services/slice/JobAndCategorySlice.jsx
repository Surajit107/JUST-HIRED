import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETCATEGORY } from '../api/Api'

export const getCategory = createAsyncThunk("/admin/alljobcategory", async (payload, { rejectWithValue }) => {
    try {
        const res = await GETCATEGORY()
        return res?.data;
    } catch (err) {
        // console.log(rejectWithValue(err));
        return rejectWithValue(err)
    }
})

const JobAndCategorySlice = createSlice({
    name: "jobAndCategorySlice",
    initialState: {
        loading: false,
        message: "",
        category_data: [],
        category_error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // states for getCategory
        builder.addCase(getCategory.pending, (state) => {
            state.loading = true
            state.message = "Loading..."
        })
        builder.addCase(getCategory.fulfilled, (state, { payload }) => {
            state.loading = false
            state.message = "Success"
            state.category_data = payload?.data
        })
        builder.addCase(getCategory.rejected, (state, { payload }) => {
            state.loading = false
            state.message = "Failed"
            state.category_error = payload?.message
        })
    }
})

export default JobAndCategorySlice.reducer