import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0cd70b1d-43cd-4ee2-bc8b-48941a6507c9"
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