export default function SideBar(){
    return(
        <div className=" fixed right-0 h-screen w-64 shadow-lg flex flex-col justify-between ">
            
                <div className=" flex justify-between items-center h-16 shadow-md p-2 bg-blue-300 rounded-t-lg">
                    <div>
                        <h1>
                            پنل مدیریت
                        </h1>
                    </div>
                    <div>
                        <h1>
                            darkmode
                        </h1>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 flex-1 p-4 bg-blue-200 rounded-b-lg ">
                    <ul>
                        <li  className=" hover:bg-blue-500 p-2 rounded ">
                            <p>کاربران</p>
                        </li>
                        <li  className=" hover:bg-blue-500 p-2 rounded ">
                            <p>پست ها</p>
                        </li>
                        <li  className=" hover:bg-blue-500 p-2 rounded ">
                            <p>کامنت ها</p>
                        </li>
                        <li  className=" hover:bg-blue-500 p-2 rounded ">
                            <p>تسک ها</p>
                        </li>
                        <li className=" hover:bg-blue-500 p-2 rounded ">
                            <p>گالری</p>
                        </li>
                    </ul>
                </div>
            
        </div>
    );
}