import axios from "axios"

axios.defaults.withCredentials = true


const url = axios.create({
    
    baseURL: "https://be3-todo.herokuapp.com/",
})



export const loginFetch = (payload) => url.post("/users/login", payload)
export const createList = (payload, headers) => url.post("/api/todo", payload, headers)
export const createTodo = (listId, payload) => url.post(`/api/todo/${listId}`, payload)
export const getAllLists = (token) => url.get("/api/todo", {headers: { authToken: token }})
export const deleteList = (id) => url.delete(`/api/todo/${id}`)
export const deleteItems = (todoId) => url.delete(`/api/todo/single/${todoId}`)
export const updateTodo = (id, payload) => url.patch(`/api/todo/single/${id}`, payload)
export const getItems = (listId) => url.get(`/api/todo/${listId}`)
//NOTE ändra fetch på rad 15 till /api/todo och bytt fetchen AllListPage