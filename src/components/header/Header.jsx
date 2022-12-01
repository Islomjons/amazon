import "./Header.css"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { AiOutlineSearch } from "react-icons/ai"
import { BiCaretDown } from "react-icons/bi"
import AmazonLogo from "../../assets/images/amazon-logooo.webp"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "i18next"

let Header = ({setIsNavbarActive}) => {
    const { t } = useTranslation()
    const [selectedOption, setSelectedOption] = useState("all")
    const [selectLanguage, setSelectLanguage] = useState("")
    const { i18n } = useTranslation()
    const changeWebSiteLanguage = (evt) => {
        i18n.changeLanguage(evt.target.value || "uz")
    }
    return (
        <header className="main__header">
            <div className="header__logo-wrapper">
                <a href="/" className="header__link">
                   <img className="header__img" src={AmazonLogo} alt="" />
                </a>
            </div>

          <div className="header__delivary-address">
                <HiOutlineLocationMarker/>
            <div className="header__delivary-wrapper">
                <p>{t("delivary__label")}</p>
                <b>{t("country")}</b>
            </div>
           </div>

            <div className="header__search-wrapper">
                <select className="search__select" style={selectedOption.length <= 7 ? {width: `${selectedOption.length * 14}px`} : {width: `${selectedOption.length * 10}px`}} onChange={(evt) => {setSelectedOption(evt.target.value)}}>
                    <option value="all">{t("select__all")}</option>
                    <option value="laptops">{t("select__laptop")}</option>
                    <option value="iphone">{t("select__iphone")}</option>
                    <option value="bikes">{t("select__bike")}</option>
                </select>
                <input className="search__input" type="text"/>
                <button className="header__btn">
                    <AiOutlineSearch/>
                </button>
            </div>
            <div className="header__selectusa__wrapper">
                <select className="modal__select" onChange={changeWebSiteLanguage}>
                    <option value="uz">UZ</option>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
            </div>
            <div className="header__account-list">
                <p>{t("sign__in")}</p>
                <div className="header__account-img-wrapper">
                <b>{t("listOf__account")}</b>
                    <BiCaretDown/>
                </div>
            </div>
            <div className="haeder__returns">
                <p>{t("return")}</p>
                <b>& {t("order")}</b>
            </div>
            <div className="header__cart">
                
                <p>{t("cart")}</p>
            </div>
        </header>
    )
}

export default Header