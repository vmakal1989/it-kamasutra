import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f9c94998-e566-4bae-94e9-a2df89c184f7"
    }
});

export const usersAPI = {
    getUsers(page, pageSize){
        return (
            instance.get(`users?page=${page}&count=${pageSize}`))
            .then(response => response.data)
    },
    unFollow(id){
        return (
            instance.delete(`follow/${id}`))
                .then(response => response.data)
    },
    follow(id, toggleIsDisabled){
        return(
            instance.post(`follow/${id}`)
        ).then(response => response.data)
    }
};

export const authAPI = {
    authME() {
        return (
            instance.get(`auth/me`)
        ).then(response => response.data)
    }
};

export const userProfileAPI = {
    getUserProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
        ).then(data => data.data)
    },
    getUserStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        ).then(data => data.data)
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status})
        ).then(data=> data.data)
    }
};

export const loginAPI =  {
    getLoginData(loginData) {
        return (
            instance.post('/auth/login', loginData)
        ).then(response => response.data)
    }
};