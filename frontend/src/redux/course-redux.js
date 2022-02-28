import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createCourseAPI, deleteCourseAPI, updateCourseApi } from './api'

export const createCourse = createAsyncThunk(
    'createCourse',
    async (courseState, thunkAPI) => {
        const response = await createCourseAPI(courseState).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

export const createCourse = createAsyncThunk(
    'updateCourse',
    async (courseState, thunkAPI) => {
        const response = await updateCourseApi(courseState).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

export const deleteCourse = createAsyncThunk(
    'deleteCourse',
    async (course_id, thunkAPI) => {
        const response = await deleteCourseAPI(course_id).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

export const getCourse = createAsyncThunk(
    'getCourse',
    async (course_id, thunkAPI) => {
        const response = await createCourseAPI(course_id).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)