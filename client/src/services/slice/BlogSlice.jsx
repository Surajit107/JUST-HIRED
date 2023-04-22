import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDCOMMENT, FETCHBLOGS } from "../api/Api";

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
    try {
        const res = await ADDCOMMENT(commentData)
        // console.log("calling");
        // console.log(res?.data);
        return res?.data
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
        comment_data: null,
        comment_error: null
    },
    reducers: {
        clearCommentData(state) {
            state.comment_data = null
        }
    },
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
            // window.localStorage.removeItem("blog_data")
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
            state.comment_data = payload?.success
            // console.log("blog slice=>", payload?.success);
        })
        builder.addCase(addComment.rejected, (state, { payload }) => {
            state.loading = false
            state.message = "Failed"
            state.comment_error = payload?.message
            // console.log("blog slice=>", payload);
        })
    }
})

export const { clearCommentData } = BlogSlice.actions
export default BlogSlice.reducer