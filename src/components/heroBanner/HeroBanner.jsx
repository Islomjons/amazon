import { useState, useEffect, useRef } from "react"
import c from "./HeroBanner.module.css"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import img from "../../dummy-data-components.json"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"

let HeroBanner = () => {
    let carouselWrapperEl = useRef()
    let [currentImg, setCurrentImg] = useState(0)

    let swipeRight = () => {
        if (currentImg < img.length - 1) {
            setCurrentImg(currentImg => currentImg + 1)
        }
        else (
            setCurrentImg(0)
        )
    }

    let swipeLeft = () => {
        if (currentImg > 0) {
            setCurrentImg(currentImg => currentImg - 1)
        }
        else (
            currentImg(img.length - 1)
        )
    }

    useEffect(() => {
        carouselWrapperEl.current.scrollLeft = currentImg * carouselWrapperEl.current.offsetWidth
    },[currentImg])

    return (
       <div className={c.carousel}>
            <button className={c.carousel__btn} data-btn-type="left" onClick={swipeLeft}>
                <BsChevronLeft/>
            </button>
            <div className={c.carousel__wrapper} ref={carouselWrapperEl}>
            {
                img.map(carouselitem => 
                        <div key={uuidv4()}>
                           <Link to="/">
                             <img className={c.carousel__img} src={carouselitem} alt="" />
                           </Link>
                        </div>
                    )
            }
            </div>
        <div className={c.dots__wrapper}>
            {
                img.map((dot, index) => 
                    <div style={currentImg === index ? {background: "dodgerblue", transform: "scale(1.3)"}: null} key={index} onClick={() => {
                        setCurrentImg(index)
                    }} className={c.dot}></div>
                )
            }
        </div>
           <button className={c.carousel__btn} data-btn-type="right" onClick={swipeRight}>
               <BsChevronRight/>
           </button>
       </div>
    )
}

export default HeroBanner