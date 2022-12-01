import React from "react"
import { useState , useEffect} from "react"
import c from "./Explore.module.css"
import { Link } from "react-router-dom"
import productDummiy from "../../dummiy-data-products.json"

const Explore = () => {

    const [productData, setProductData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/v2/allproducts")
            .then(response => response.json())
            .then(data => setProductData(data))
    }, [])
    return (
        <div className={c.explore}>
           <div className={c.explore__left}>
                <h1 className={c.product__titleLeft}>Computers</h1>
                {
                    productDummiy.map((newProduct, index) => 
                        <div key={index} className={c.explore__leftWrapper}>
                            <Link className={c.products__leftLink}>{newProduct.title}</Link>
                        </div>        
                   )
                }
           </div>
           <div className={c.explore__right}>    
                {
                    productData.map(({_id, image, name, description, ratings, }) => 
                       <div key={_id} className={c.explore__item}>
                            <h2 className={c.product__titleRight}>{name}</h2>
                            <img className={c.product__img} src={image[0].url} alt="" />
                           <div className={c.product__wrapper}>
                                <p className={c.product__desc}>{description}</p>
                                <p className={c.product__rating}>{ratings}</p>
                           </div>
                           <Link className={c.product__link} to={`/explorenow/${_id}`}>Learn more</Link>
                       </div>
                    )
                }
                <Link className={c.product__bottomLink}>See all results</Link>
           </div>
        </div>
    )
}

export default Explore