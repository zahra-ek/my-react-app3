import axios from "axios";

export const GetAlbums=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data;
}
