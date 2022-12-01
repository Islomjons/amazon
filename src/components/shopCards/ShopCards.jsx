import c from "./ShopCards.module.css"
import ShopCardsDummiy from "../../dummiy-data-shop.json"
import { Link } from "react-router-dom"

let ShopCards = () => {
    return (
       <div className={c.shopcards}>
           <div className={c.shopcardsWrapper}>
               {
                   ShopCardsDummiy.map((newLi, index) => 
                      <div key={index} className={c.shopcardsItem}>
                          <h2 className={c.shopcardstitle}>{newLi.ShopCardsTitle}</h2>

                          <div className={c.wrapper}>
                              {
                                   typeof newLi.ShopCardsImg === "string" ? 
                                    <Link>
                                         <img className={c.productcards_img} src={newLi.ShopCardsImg} alt="" />
                                    </Link> 
                                   :

                                 newLi.ShopCardsImg.map((category, index) => 
                                    <div key={index} className={c.categoryWrapper}>
                                      <Link>
                                          <img className={c.categoryImg} src={category.imagess} alt="" />
                                      </Link>
                                        <p className={c.categorySubtitle}>{category.subtitlee}</p>
                                    </div>
                                 )
                                }
                          </div>
                          <Link to={newLi.ShopCardsLinkUrl} className={c.shopcardslink}>{newLi.ShopCardsLink}</Link>
                      </div>
                   )
                }
           </div>
       </div>
    )
}

export default ShopCards