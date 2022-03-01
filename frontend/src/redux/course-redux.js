import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	createCourseAPI, deleteCourseAPI, updateCourseApi,
	getCourseApi, getCoursesApi, addStudentToCourseApi, getStudentCoursesApi, getCourseByCodeApi,addCourseToStudentApi
} from './api'

export const createCourse = createAsyncThunk(
	'createCourse',
	async (courseState, thunkAPI) => {
		const response = await createCourseAPI(courseState)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
	}

)

export const updateCourse = createAsyncThunk(
	'updateCourse',
	async (courseState, thunkAPI) => {
		const response = await updateCourseApi(courseState)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
	}

)

export const deleteCourse = createAsyncThunk(
	'deleteCourse',
	async ({ course_id, student_id, token }, thunkAPI) => {
		const response = await deleteCourseAPI(course_id, student_id, token)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
	}

)

export const getCourse = createAsyncThunk(
	'getCourse',
	async (course_id, thunkAPI) => {
		const response = await getCourseApi(course_id)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
	}

)

export const getCoursesByCode = createAsyncThunk(
	'getCoursesByCode',
	async (course_code, thunkAPI) => {
		const response = await getCourseByCodeApi(course_code)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
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

export const getStudentCourses = createAsyncThunk(
	'getStudentCourses',
	async ({ student_id, token }, thunkAPI) => {
		const response = await getStudentCoursesApi(student_id, token)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}
		return response.data
	}

)


export const addStudentToCourse = createAsyncThunk(
	'addStudentToCourse',
	async ({course_id, student_id}, thunkAPI) => {
		const response = await addStudentToCourseApi(course_id, student_id)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
	}

)

export const addCourseToStudent = createAsyncThunk(
	'addCourseToStudent',
	async ({course_id, student_id}, thunkAPI) => {
		const response = await addCourseToStudentApi(course_id, student_id)

		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response);
		}

		return response.data
	}

)

const initialState = {
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
			state.courses = [action.payload.data]
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
			state.courses = [action.payload.data]
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
			state.courses = [action.payload.data]
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
			state.course = action.payload.data
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getCourse.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getCoursesByCode.rejected, (state, action) => {
			state.errors = action.payload.data.errors
			state.loading = false
		}),
		builder.addCase(getCoursesByCode.fulfilled, (state, action) => {
			state.courses = action.payload.data
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getCoursesByCode.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getCourse.rejected, (state, action) => {
			state.errors = action.payload.data.errors
			state.loading = false
		}),
		builder.addCase(getCourses.fulfilled, (state, action) => {
			state.courses = action.payload.data.reduce((p, c) => {
				const code = p.find(e => e.course_code === c.course_code);
				if (!!code) {
					code.section.push(c.section)
				} else {
					c.section = [c.section]
					p.push(c) 
				}
				// if (p.some(e=>e.course_code===c.course_code)) {
				// 	c.section = [c.section]
				// 	p.push(c)
				// }

				// group["course_name"] = c.course_name
				// group["semester"] = c.semester
				// group["section"] = group["section"] ?? []
				// group["section"].push(c.section)
				return p
			}, [])
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getCourses.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getCourses.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.errors
			state.loading = false
		}),
		builder.addCase(getStudentCourses.fulfilled, (state, action) => {
			console.log(action.payload.data)
			state.courses = action.payload.data
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(getStudentCourses.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(getStudentCourses.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		})
	)
})


export const { setCourseInfo } = courseSlice.actions
export const courseReducer = courseSlice.reducer