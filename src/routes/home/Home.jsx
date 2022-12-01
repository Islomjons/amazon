import React from "react"
import HeroBanner from "../../components/heroBanner/HeroBanner"
import ProductCards from "../../components/productCards/ProductCards"
import ProductGift from "../../components/productGift/ProductGift"
import Sellers from "../../components/sellers/Sellers"
import ShopCards from "../../components/shopCards/ShopCards"
import SignIn from "../../components/signin/SignIn"

let Home = () => {
    return (
        <>
            <HeroBanner/>
            <ProductCards/>
            <ProductGift/>
            <Sellers/>
            <ShopCards/>
            <SignIn/>
        </>
    )
}
export default Home  