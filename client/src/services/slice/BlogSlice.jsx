import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCHBLOGS } from "../api/Api";

export const fetchBlogs = createAsyncThunk("/allpost", async (payload, { rejectWithValue }) => {
    try {
        const res = await FETCHBLOGS()
        // console.log(res?.data);
        return res?.data?.data;
    } catch (err) {
        // console.log(rejectWithValue(err));
        return rejectWithValue(err)
    }
})


const BlogSlice = createSlice({
    name: "blogSlice",
    initialState: {
        loading: false,
        message: "",
        blog_data: [],
        blog_error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // states for getCategory
        builder.addCase(fetchBlogs.pending, (state) => {
            state.loading = true
            state.message = "Loading..."
        })
        builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
            state.loading = false
            state.message = "Success"
            state.blog_data = payload
            window.localStorage.setItem("blog_data", JSON.stringify(payload))
            // console.log("blog slice=>", state.blog_data);
        })
        builder.addCase(fetchBlogs.rejected, (state, { payload }) => {
            state.loading = false
            state.message = "Failed"
            state.blog_error = payload?.message
        })
    }
})

export default BlogSlice.reducer