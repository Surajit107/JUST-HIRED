import axios from 'axios'

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

// SignUp API
export const SIGNUP = (signupData) => API.post("/user/signup", signupData)

// LogIn API
export const LOGIN = (loginData) => API.post("/user/signin", loginData)

// jobcategory API
export const GETCATEGORY = () => API.get("/admin/alljobcategory")

// blog API
export const FETCHBLOGS = () => API.get("/blogs/allpost")

// add comment API
export const ADDCOMMENT = (commentData) => API.post("/blogs/addcomment")