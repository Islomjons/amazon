import "./HeaderBottom.css"
import { GiHamburgerMenu } from "react-icons/gi"
import links from "../../dummy-links.json"
import { Link } from "react-router-dom"

let HeaderBottom = ({setIsSidebarActive}) => {
    return (
        <div className="main__header-bottom">
            <div className="main__header-bottom-wrapper">
                <button onClick={() => {setIsSidebarActive(true)}} className="header__bottom-btn">
                    <GiHamburgerMenu/>
                    All
                </button>
            </div>

            <ul className="header__bottom-list">
                    {
                        links.map((newLi, index) => {
                            return (
                                <li className="header__bottom-item" key={index}>
                                    <a href="/">{newLi.link}</a>
                                </li>
                            )
                        })
                    }
                </ul>

                <a className="linksss" href="/">Turn up the cheer, shop gifts now </a>
        </div>
    )
}

export default HeaderBottom