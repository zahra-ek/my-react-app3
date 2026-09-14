
import { useEffect, useState } from "react";
import { GetComments } from "../../../../services/comments";

export default function CommentsPage   (){
    const [comments,setComments]=useState([]);

    const handleGetPosts=async () =>{
        try{
            const data = await  GetComments();
            setComments(data || []);
        } catch(error)  {
            console.error(error);    
    }}

    useEffect(()=>{
        handleGetPosts();
    },[])

     useEffect(()=>{
        console.log(comments);
        ;
    },[comments])

    return(
        <div className=" space-y-4">
            <div className=" flex justify-between items-center">
                <h1 className=" text-2xl font-bold">comments</h1>
                <button className=" bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <span>add posts</span>
                </button>
            </div>

          
          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <table className=" table-auto w-full text-center">
                <thead className=" bg-blue-400 dark:bg-blue-900">
                        <tr>
                            
                            <th className=" px-4 py-2">name </th>
                            <th className=" px-4 py-2"> email</th>
                           
                           
                        </tr>
                    </thead>

                    <tbody className=" bg-gray-200 dark:bg-gray-800">
                        {comments.map((comment)=>(
                            <tr key={comment.Id} className=" border-b">
                            <th className=" px-4 py-2">{comment.name}</th>
                            <th className=" px-4 py-2">{comment.email}</th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}