import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../slice/AuthSlice'
import JobAndCategorySlice from '../slice/JobAndCategorySlice'
import BlogSlice from '../slice/BlogSlice'

export const Store = configureStore({
    reducer: {
        authslice: AuthSlice,
        jobAndCategorySlice: JobAndCategorySlice,
        blogSlice: BlogSlice,
    }
})