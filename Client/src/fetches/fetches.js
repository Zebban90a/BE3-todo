import axios from "axios"

axios.defaults.withCredentials = true


const url = axios.create({
    baseURL: "http://localhost:4000/",
})



export const loginFetch = (payload) => url.post("/users/login", payload)
export const createList = (payload, headers) => url.post("/api/todo", payload, headers)
export const createTodo = (listId, payload) => url.post(`/api/todo/${listId}`, payload)
export const getAllLists = () => url.get("/")
export const updateTodo = (id, payload) => url.patch(`/api/todo/single/${id}`, payload)

