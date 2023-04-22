import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCHBLOGS } from "../api/Api";
import axios from "axios";

// fetch blog
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

// add cooment
export const addComment = createAsyncThunk("/addcomment", async (commentData, { rejectWithValue }) => {
    var config = {
        method: 'post',
        url: 'http://localhost:4402/api/blogs/addcomment',
        headers: {
            'Content-Type': 'application/json'
        },
        data: commentData
    }
    try {
        const res = await axios(config)
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
        blog_error: null,
        comment_data: [],
        comment_error: null
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


        // states for getCategory
        builder.addCase(addComment.pending, (state) => {
            state.loading = true
            state.message = "Loading..."
        })
        builder.addCase(addComment.fulfilled, (state, { payload }) => {
            state.loading = false
            state.message = "Success"
            state.comment_data = payload
            // console.log("blog slice=>", payload);
        })
        builder.addCase(addComment.rejected, (state, { payload }) => {
            state.loading = false
            state.message = "Failed"
            state.comment_error = payload?.message
            // console.log("blog slice=>", payload);
        })
    }
})

export default BlogSlice.reducer