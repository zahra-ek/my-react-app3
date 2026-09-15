import axios from "axios";

export const GetTodos=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
}