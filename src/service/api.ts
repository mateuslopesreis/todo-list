import axios from "axios";
import { TypeTask } from "../types";

const api = axios.create(({
    baseURL: 'http//localhost:3000',
    timeout:3000,
}));


export async function get(){
    const tasks = await api.get('tasks')
    return tasks.data
}

export async function getById(id:number){
    const tasks = await api.get(`tasks/${id}`)
    return tasks.data
}

export async function save(task:TypeTask){
    const response = await api.post(`tasks`,{
        ...task
    })
    return response.data
}

export async function update(task:TypeTask){
    const response = await api.put(`tasks/${task.id}`,{
        ...task
    })
    return response.data
}

export async function exclude(id:number){
    const tasks = await api.delete(`tasks/${id}`)
    return tasks.data
}
