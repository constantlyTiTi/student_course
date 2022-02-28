import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../redux/auth-redux'
import  courseReducer  from '../redux/course-redux'

export default configureStore({
    reducer:{
        user:userReducer,
        course:courseReducer
    }
})