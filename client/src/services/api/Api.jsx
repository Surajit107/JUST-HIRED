import axios from 'axios'

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

// SignUp API
export const SIGNUP = (signupData) => API.post("", signupData)

// LogIn API
export const LOGIN = (loginData) => API.post("", loginData)