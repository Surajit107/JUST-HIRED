import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../slice/AuthSlice'

export const Store = configureStore({
    reducer: {
        authslice: AuthSlice
    }
})