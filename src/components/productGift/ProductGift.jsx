import { useState, useEffect, useRef } from "react"
import c from "./ProductGift.module.css"
import Gifts from "../../dummiy-data-gift.json"
import { Link } from "react-router-dom"
    import { GrFormNext, GrFormPrevious } from "react-icons/gr"


let ProductGift = () => {

    let productsWrapper = useRef()
    let [giftsImg, setGiftsImg] = useState(0)

    let turnLeft = () => {
        if (giftsImg === 0) {
            setGiftsImg(giftsImg => giftsImg - 1)
        }else{
            setGiftsImg(0)
        }
    }

    let turnRight = () => {
        if (giftsImg === 0) {
            setGiftsImg(giftsImg => giftsImg + 1)
        }else{
            giftsImg(Gifts.length - 1)
        }
    }

    useEffect(() => {
        productsWrapper.current.scrollLeft = giftsImg * productsWrapper.current.offsetWidth
    },[giftsImg])

    return (
        <div className={c.product__gift}>
           <button className={c.btn__prev} data-btn-type="left" onClick={turnLeft}>
               <GrFormPrevious/>
           </button>
            <div className={c.product__giftWrapper} ref={productsWrapper}>
                {
                    Gifts.map((newdiv, index) => 
                        <div key={index} className={c.products__giftsInfo}>
                           <Link to="/login">
                              <img className={c.products__img} src={newdiv.gifts__img} alt="" />
                           </Link>
                        </div>
                   )
                }
            </div>
            <button className={c.btn__prev} data-btn-type="right" onClick={turnRight}>
                <GrFormNext/>
            </button>
        </div>
    )
}

export default ProductGift