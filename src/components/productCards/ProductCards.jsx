import c from "./ProductCards.module.css"
import data from "../../dummy-data.json"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

let ProductCards = ({linkURL}) => {
    return (
        <div className={c.productcards__wrapper}>
            <ul className={c.productcards__list}>
                {
                    data.map(({img__url, title, link, linkURL}) => 
                        <li key={uuidv4()} className={c.productcards__item}>
                            <h2 className={c.productcards__title}>{title}</h2>
                            <div className={c.wrapper}> 
                                {
                                    typeof img__url === "string" ? 
                                   <Link>
                                         <img className={c.productcards_img} src={img__url} alt="" /> 
                                   </Link>
                                    :
                                    
                                        img__url.map(category => (
                                            <div key={uuidv4()} className={c.productcards__categoryWrappers}>
                                                  <img className={c.products__wrapperImg} src={category.images} alt="" />
                                                  <p className={c.productcards__categoryText}>{category.subtitle}</p>
                                            </div>
                                        ))
                                }
                            </div>
                            <Link to={`/explorenow`}>{link}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ProductCards