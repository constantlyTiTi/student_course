import axios from "axios"
export const loginAPI = (userState)=>{
    return axios.post("/authen/login",userState,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}
export const signUpAPI = (userState)=>{
    return axios.post("",userState,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}
export const createCourseAPI= (course)=>{
    return axios.post("/course/post",course,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}
export const deleteCourseAPI= (course_id)=>{
    return axios.delete(`/course/${course_id}`,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}
export const updateCourseApi= (course)=>{
    return axios.put("/course/post",course,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}

export const getCourseApi = (course_id) => {
    return axios.get(`/course/${course_id}`,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}

export const getCoursesApi = () => {
    return axios.get("/course/courses/all",{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}

export const getStudentCoursesApi = (student_id, token) => {
    return axios.get(`/student/${student_id}/studentCourseList`,{
        headers:{
            "Content-Type": "Application/json",
            "Authentication":`Beare ${token}`
        }
    })
}

export const addStudentToCourseApi = (course_id, student_id) => {
    return axios.put(`/course/${course_id}/student_number/${student_id}`,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}