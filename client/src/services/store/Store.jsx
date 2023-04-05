import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../slice/AuthSlice'
import JobAndCategorySlice from '../slice/JobAndCategorySlice'

export const Store = configureStore({
    reducer: {
        authslice: AuthSlice,
        jobAndCategorySlice: JobAndCategorySlice
    }
})