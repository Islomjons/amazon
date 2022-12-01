import c from "./SignIn.module.css"
import { Link } from "react-router-dom"

let SignIn = () => {
    return (
        <div className={c.sign__in}>
            <hr />
           <div className={c.sign__inWrapper}>
               <div>
                    <p className={c.see__text}>See personalized recommendations</p>
                   <div className={c.btn__wrapper}>
                         <Link className={c.sign__inBtn}>Sign In</Link>
                   </div>

                   <div className={c.link__wrapper}>
                       <p className={c.sign__inCustom}>New custom?</p>
                       <Link className={c.start__link}>Start here</Link>
                   </div>
                </div>
           </div>
            <hr />
        </div>
    )
}

export default SignIn