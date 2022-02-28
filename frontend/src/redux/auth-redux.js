import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI, signUpAPI, createCourseAPI, deleteCourseAPI, updateCourseApi } from './api'

export const login = createAsyncThunk(
    'login',
    async (userState, thunkAPI) => {
        const response = await loginAPI(userState).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

export const register = createAsyncThunk(
    'register',
    async (userState, thunkAPI) => {
        const response = await signUpAPI(userState).catch(error => {
            return error.response;
        })


        if (response.status !== 200) {
            return thunkAPI.rejectWithValue(response);
        }

        return response
    }

)

const initialState =  {
    user: {},
    token: "",
    loading: false,
    errors: []
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.user = action.payload
		}
	},
	extraReducers: (builder) => (
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(register.fulfilled, (state, action) => {
			// Add user to the state array
			state.user = action.payload.data.user
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(register.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		}),
		builder.addCase(register.pending, (state) => {
			// Add user to the state array
			state.loading = true
		}),
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.data.user
			state.token = action.payload.data.token
			state.loading = false
			state.errors = initialState.errors
		}),
		builder.addCase(login.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(login.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		})
	)
})


export const { setUserInfo } = userSlice.actions
export const userReducer = userSlice.reducer