import axios from "axios"
export const loginAPI = (userState)=>{
    return axios.post("/auth/login",userState,{
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
export const deleteCourseAPI= (course_code)=>{
    return axios.delete(`/course/${course_code}`,{
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

export const getCourseApi = (course_code) => {
    return axios.get(`/course/${course_code}`,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}

export const getCoursesApi = () => {
    return axios.get("/course/courses",{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}

export const addStudentToCourseApi = (course_code, student_number) => {
    return axios.put(`/course/${course_code}/student_number/${student_number}`,{
        headers:{
            "Content-Type": "Application/json"
        }
    })
}