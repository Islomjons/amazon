import { useState } from "react"
import "./Sidebar.css"
import { FiX } from 'react-icons/fi'
import sidebarDummiy from "../../dummiy-data-sidebar.json"
import { Link } from "react-router-dom"
import { GrFormNext } from "react-icons/gr"

const Sidebar = ({isSidebarActive, setIsSidebarActive}) => {
    const [isSidebarEnter, setSidebarEnter] = useState(false)
    console.log(isSidebarEnter);
    return (
        <>
        <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
            <div className="sidebar__wrapper">
              <FiX className="sidebar__icon" onClick={() => {setIsSidebarActive(false)}}/>
              <h1 className="sidebar__title">Digital Content & Devices</h1>
            </div>
            {
                sidebarDummiy.map((newSidebar, index) => 
                    <div key={index}>
                        <div className="sidebar__wrapper">
                            <Link onClick={() => {setSidebarEnter(true)}} className="sidebarLink">
                                {newSidebar.lunkUrl}
                            <GrFormNext className="icons"/>
                            </Link>
                        </div>
                    </div>    
                )
            }
        </div>
        {/* <div>
            <h1>salom</h1>
        </div> */}
        </>
    )
}

export default Sidebar