
import SideBarItem from "./SideBarItem";
import Darkmode from "../../components/Darkmode";

export default function SideBar(){
    return(
        <div className=" fixed right-0 h-screen w-64 shadow-lg flex flex-col justify-between bg-blue-200">
            
                <div className=" flex justify-between items-center h-16 p-2 bg-blue-300 dark:bg-gray-800">
                    <div>
                        <h1>
                            پنل مدیریت
                        </h1>
                    </div>
                    <div>
                        <h1>
                            <Darkmode/>
                        </h1>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 flex-1 p-4 bg-blue-200 rounded-b-lg dark:bg-gray-800">
                    <ul className="flex flex-col gap-3">
                    <SideBarItem to="/users" >کاربران</SideBarItem>
                    <SideBarItem to="/posts" >پست ها</SideBarItem>
                    <SideBarItem to="/comments" >کامنت ها</SideBarItem>
                    <SideBarItem to="/tasks" >تسک ها</SideBarItem>
                    <SideBarItem to="/gallery" >گالری</SideBarItem>
                    </ul>
                </div>
            
        </div>
    );
}

