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
export const deleteCourseAPI= (courseId)=>{
    return axios.delete(`/course/${courseId}`,{
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

export const getCourseApi = (courseId) => {
    
}