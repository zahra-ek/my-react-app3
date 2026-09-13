import { FiMoon,FiSun } from "react-icons/fi";
import { useDarkMode } from "../layOut/hooks/useDarkMode";


const Darkmode = () => {
    const {setDark,setLight}=useDarkMode();
        return (
        <div>
            <span className="cursor-pointer transform dark:rotate-90 transition-all">
                <FiMoon className=" dark:hidden size-app_24" onClick={setDark}/>
                <FiSun className=" hidden dark:inline size-app_24" onClick={setLight}/>
            </span>
        </div>
    );
};

export default Darkmode;