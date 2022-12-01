import c from"./Pdp.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BsFillStarFill, BsStarHalf } from "react-icons/bs"
import { v4 as uuidv4 } from 'uuid';

const Pdp = () => {
    const [activeImgOver, setActiveImgOver] = useState(0);
    const { id } = useParams()
    const [singleProductData, setSingleProductData] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8000/v2/allproducts/${id}`)
            .then(response => response.json())
            .then(data => setSingleProductData(data))
    }, [])
    return (
        <div className={c.pdp}>
            <div className={c.pdp__container}>
                {
                    singleProductData !== null && singleProductData ? 
                    <>
                    <div className={c.producsImgWrapper}>
                        {
                            singleProductData.image.map((productsImage, index) => 
                               <div key={productsImage.id}>
                                    <img style={index === activeImgOver ? {boxShadow: "0px 0px 5px 2px orange"} : null} onMouseOver={() => {setActiveImgOver(index)}} className={c.productsImage__url} key={productsImage.id} src={productsImage.url} alt="" />
                               </div>
                            )
                        }
                    </div>
                   <div key={uuidv4()} className={c.singleProductsWrapper}>
                      <img className={c.singleProductImg} src={singleProductData.image[activeImgOver].url} alt="" /> 
                      <div>
                        {
                                singleProductData.ratings % 1 === 0 ? 
                                new Array(singleProductData.ratings).fill("#").map(star => 
                                        <BsFillStarFill key={uuidv4()}/>
                                    )
                                    :
                                    <>
                                    {
                                        new Array(Math.floor(singleProductData.ratings)).fill("#").map(star => 
                                            <BsFillStarFill key={uuidv4()}/>
                                            )
                                        }
                                        <BsStarHalf/>
                                    </>
                            }
                      </div>
                   </div>
                   </>
                  : 
                  <></>
                  
                }
            </div>
            <div className={c.pdp__right}>
               <div>
                   <h2 className={c.decs__title}>{singleProductData?.description}</h2>
                   <h3 className={c.title}>Currently unavailable.</h3>
                   <p className={c.price__text}>{singleProductData?.price}</p>
               </div>
            </div>
        </div>
    )
}

export default Pdp