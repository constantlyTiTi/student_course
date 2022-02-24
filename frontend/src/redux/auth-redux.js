import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { loginAPI, signUpAPI, createCourseAPI, deleteCourseAPI, updateCourseApi } from './api'

export const login = createAsyncThunk(
    'login',
    async(userId, password, thunkAPI) => {
        const response = await loginAPI
    }
)