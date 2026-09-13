import { useEffect, useState } from "react";
import { getUser } from "../../../../services/users";
import { FaTrash, FaUserPlus } from "react-icons/fa";


export default function UsersPage  (){
    const [users,setUsers]=useState([]);
    
    const handleGetUsers= async ()=> {
        try{
            const data =await getUser();
            setUsers(data || []);
        } catch(error){
            console.log(error);
            
        }
        
    };
    useEffect(()=>{
        handleGetUsers();
    },[]);
    
        useEffect(()=>{
            console.log(users);
            ;
        },[users]);
        

    return(
        <div className=" space-y-4">
          <div className=" flex justify-between items-center">
            <h1 className=" text-2xl font-bold">مدیریت کاربران</h1>
            <button className=" bg-blue-400 text-white px-4 py-2 rounded-b-md flex items-center gap-2">
                <FaUserPlus/> 
                <span>افزودن کاربر</span>
            </button>
          </div>

          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <table className=" table-auto w-full text-center">
                <thead className=" bg-blue-400 dark:bg-blue-900">
                    <tr>
                        <th className=" px-4 py-2">#</th>
                        <th className=" px-4 py-2">نام</th>
                        <th className=" px-4 py-2">ایمیل</th>
                        <th className=" px-4 py-2">شماره تلفن</th>
                        <th className=" px-4 py-2">وبسایت</th>
                    </tr>
                </thead>
                <tbody className=" bg-gray-200 dark:bg-gray-800">
                    {users.map((user)=>(
                    <tr key={user.id} className=" border-b">
                        <td className=" px-4 py-2">{user.id}</td>
                        <td className=" px-4 py-2">{user.name}</td>
                        <td className=" px-4 py-2">{user.email}</td>
                        <td className=" px-4 py-2">{user.phone}</td>
                        <td className=" px-4 py-2">{user.website}</td>
                        <button className=" bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                            <faEdit/>
                        </button>
                        <button className=" bg-red-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
                            <FaTrash/>
                        </button>
                    </tr>

                    ))}
                  
                </tbody>
            </table>
          </div>
        </div>
    );
}