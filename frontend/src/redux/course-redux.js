import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createCourseAPI, deleteCourseAPI, updateCourseApi, getCourseApi, getCoursesApi } from './api'

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

export const updateCourse = createAsyncThunk(
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
        const response = await getCourseApi(course_id).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

export const getCourses = createAsyncThunk(
    'getCourse',
    async (course_id, thunkAPI) => {
        const response = await getCoursesApi().catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)



const initialState =  {
    courses:[],
    loading: false,
    errors: []
}

const courseSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCourseInfo: (state, action) => {
			state.course = action.payload
		}
	},
	extraReducers: (builder) => (
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(createCourse.fulfilled, (state, action) => {
			// Add user to the state array
			state.courses = [action.payload.data.course]
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(createCourse.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		}),
		builder.addCase(createCourse.pending, (state) => {
			// Add user to the state array
			state.loading = true
		}),
		builder.addCase(updateCourse.fulfilled, (state, action) => {
			state.courses = [action.payload.data.course]
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(updateCourse.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(updateCourse.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		}),
        builder.addCase(deleteCourse.fulfilled, (state, action) => {
			state.courses = [action.payload.data.course]
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(deleteCourse.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(deleteCourse.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		}),
        builder.addCase(getCourse.fulfilled, (state, action) => {
			state.courses = [action.payload.data.course]
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getCourse.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getCourse.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		}),
        builder.addCase(getCourses.fulfilled, (state, action) => {
			state.courses = action.payload.data.courses
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getCourses.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getCourses.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		})
	)
})


export const { setCourseInfo } = courseSlice.actions
export const courseReducer = courseSlice.reducer