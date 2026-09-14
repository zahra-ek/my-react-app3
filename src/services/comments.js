import axios from "axios";

export const GetComments=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
}