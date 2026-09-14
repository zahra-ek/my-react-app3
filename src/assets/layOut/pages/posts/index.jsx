import { useEffect, useState } from "react";
import { GetPosts } from "../../../../services/posts";

export default function PostsPage  (){
    const [posts,setPosts]=useState([]);

    const handleGetPosts=async () =>{
        try{
            const data = await GetPosts();
            setPosts(data || []);
        } catch(error)  {
            console.error(error);    
    }}

    useEffect(()=>{
        handleGetPosts();
    },[])

     useEffect(()=>{
        console.log(posts);
        ;
    },[posts])

    return(
        <div className=" space-y-4">
            <div className=" flex justify-between items-center">
                <h1 className=" text-2xl font-bold">posts</h1>
                <button className=" bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <span>add posts</span>
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
                        {posts.map((post)=>(
                            <tr key={post.userId} className=" border-b">
                            <th className=" px-4 py-2">{post.title}</th>
                            <th className=" px-4 py-2">{post.body}</th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}