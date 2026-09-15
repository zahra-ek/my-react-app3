import { useEffect, useState } from "react";
import { GetAlbums } from "../../../../services/gallery";

export default function albumsPage  (){
    const [albums,setAlbums]=useState([]);

    const handleGetAlbums=async () =>{
        try{
            const data = await GetAlbums();
            setAlbums(data || []);
        } catch(error)  {
            console.error(error);    
    }}

    useEffect(()=>{
        handleGetAlbums();
    },[])

     useEffect(()=>{
        console.log(albums);
        ;
    },[albums])

    return(
        <div className=" space-y-4">
            <div className=" flex justify-between items-center">
                <h1 className=" text-2xl font-bold">albums</h1>
                <button className=" bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <span>add pictures</span>
                </button>
            </div>

          
          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <table className=" table-auto w-full text-center">
                <thead className=" bg-blue-400 dark:bg-blue-900">
                        <tr>
                            <th  className=" px-4 py-2">id</th>
                            <th className=" px-4 py-2">title</th>
                           
                           
                        </tr>
                    </thead>

                    <tbody className=" bg-gray-200 dark:bg-gray-800">
                        {albums.map((album)=>(
                            <tr key={album.id} className=" border-b">
                            <th className=" px-4 py-2">{album.id}</th>
                            <th className=" px-4 py-2">{album.title}</th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}