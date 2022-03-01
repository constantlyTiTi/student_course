import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createCourseAPI, deleteCourseAPI, updateCourseApi, getCourseApi, getCoursesApi, addStudentToCourseApi } from './api'

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
    async (course_code, thunkAPI) => {
        const response = await deleteCourseAPI(course_code).catch(error => {
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
    async (course_code, thunkAPI) => {
        const response = await getCourseApi(course_code).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

export const getCourses = createAsyncThunk(
    'getCourses',
    async (course_code, thunkAPI) => {
        const response = await getCoursesApi()

        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }
        return response.data
    }

)

export const addStudentToCourse = createAsyncThunk(
    'getCourses',
    async (course_code,student_number, thunkAPI) => {
        const response = await addStudentToCourseApi(course_code, student_number).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)



const initialState =  {
	course: {},
    courses: [],
    loading: true,
    errors: []
}

const courseSlice = createSlice({
	name: "course",
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
			state.courses = [action.payload.data.data]
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
			state.courses = [action.payload.data.data]
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
			state.courses = [action.payload.data.data]
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
			state.course = action.payload.data.data
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getCourse.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getCourse.rejected, (state, action) => {
			
			state.course = {course_name:"course_name",course_code:"course_code",section:[12,34,56]}
			state.errors = action.payload.data.errors
			state.loading = false
		}),
        builder.addCase(getCourses.fulfilled, (state, action) => {
			state.courses = action.payload.data
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