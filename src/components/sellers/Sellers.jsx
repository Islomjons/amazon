import c from "./Sellers.module.css"
import sellersJson from "../../dummiy-data-sellers.json"
import { Link } from "react-router-dom"
import {useState, useEffect, useRef} from "react"
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { v4 as uuidv4 } from 'uuid';

let Sellers = () => {

    let elSellersWrapper = useRef()
    let [sellersImg, setSellersImg] = useState(0)

    let scrollLefts = () => {
        if (sellersImg < 0) {
            setSellersImg(sellersJson.length - 1)
        }else{
            setSellersImg(0)
        }
    }

    let scrollRights = () => {
        if (sellersImg < sellersJson.length - 1) {
            setSellersImg(sellersImg + 1)
        }else{
            setSellersImg(0)
        }       
    }

    useEffect(() => {
        elSellersWrapper.current.scrollLeft = sellersImg * 100
    }, [sellersImg])

    console.log(sellersImg);
    return (
        <div className={c.selles}>
            <button className={c.sellersBtn} data-btn-type="left" onClick={scrollLefts}>
                <GrFormPrevious/>
            </button>
            <div className={c.sellersWrapper} ref={elSellersWrapper}>
                {
                    sellersJson.map(newJson => 
                        <div key={uuidv4()} className={c.imgesWrapper}>
                            <Link>
                               <img className={c.imagess} src={newJson.sellersImg} alt="" />
                            </Link>
                        </div>
                    )
                }
            </div>
            <button className={c.sellersBtn} data-btn-type="right" onClick={scrollRights}>
                <GrFormNext/>
            </button>
        </div>
    )
} 

export default Sellers