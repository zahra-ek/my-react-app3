import { NavLink } from "react-router-dom"

const SideBarItem =({to,children})=>{
    return(
        <li className="list-none">
            <NavLink 
            to={to}
             className={({isActive})=>
             `block hover:bg-blue-100 dark:hover:bg-gray-700 p-1 rounded w-full h-full ${
                 isActive ? "bg-blue-100 dark:bg-gray-700" :""}`}>
                {children}
                </NavLink>
        </li>
    )
}

export default SideBarItem;