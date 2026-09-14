import { Routes,Route, Navigate } from "react-router";
import CommentsPage from "../pages/comments";
import GalleryPage from "../pages/galley";
import PostsPage from "../pages/posts";
import TasksPage from "../pages/tasks";
import UsersPage from "../pages/users";
import AddUserPage from "../pages/users/add-user";

const Content=()=>{
    return(
       <div className=" fixed top-0 left-0 h-screen w-full bg-gray-100 pr-64 pt-16 dark:bg-gray-700">
        <div className="p-4 h-full w-full">
            <Routes>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/users/add" element={<AddUserPage/>} />
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/comments" element={<CommentsPage/>}/>
                <Route path="/tasks" element={<TasksPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
        </div>
       </div>
    );
}

export default Content;