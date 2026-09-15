import { useEffect, useState } from "react";
import { GetTodos } from "../../../../services/task";
import { MdCancel, MdCheckCircle } from "react-icons/md";

export default function TodosPage  (){
    const [todos,setTodos]=useState([]);

    const handleGetTodos=async () =>{
        try{
            const data = await GetTodos();
            setTodos(data || []);
        } catch(error)  {
            console.error(error);    
    }}

    useEffect(()=>{
        handleGetTodos();
    },[])

     useEffect(()=>{
        console.log(todos);
        ;
    },[todos])

    return(
        <div className=" space-y-4">
            <div className=" flex justify-between items-center">
                <h1 className=" text-2xl font-bold">tasks</h1>
                <button className=" bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <span>add tasks</span>
                </button>
            </div>

          
          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <table className=" table-auto w-full text-center">
                <thead className=" bg-blue-400 dark:bg-blue-900">
                        <tr>
                            <th className=" px-4 py-2">id</th>
                            <th className=" px-4 py-2">title</th>
                             <th className=" px-4 py-2">completed</th>
                           
                           
                        </tr>
                    </thead>

                    <tbody className=" bg-gray-200 dark:bg-gray-800">
                        {todos.map((todo)=>(
                         <tr key={todo.id} className=" border-b">
                            
                            <th className=" px-4 py-2">{todo.id}</th>
                            <th className=" px-4 py-2">{todo.title}</th>
                            <span>
                               {todo.completed ? (
                                   <MdCheckCircle className=" text-green-500 text-2xl" />
                                ):(
                                    <MdCancel className=" text-red-400 text-2xl" />
                                )}
                            </span>

                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}