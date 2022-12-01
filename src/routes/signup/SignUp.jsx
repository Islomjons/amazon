import { useState } from "react"
import c from "./SignUp.module.css"
import { auth } from "../../firebase/config"
import { useHistory } from "react-router-dom"

const SignUp = () => {
    const [possibleError, setPossibleError] = useState("")
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    const createUser = (evt) => {
        evt.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                if (response) {
                    history.push("/login")
                }
            })
            .catch(err => {
                setPossibleError(err.message);
            })
    }    

    return (
       <div className={c.sign__up}>
           {
               possibleError && <p style={{color: "red", marginBottom: "20px"}}>{possibleError}</p>
           }
           <h1 className={c.signupheading}>Sign Up</h1>
            <form className={c.signupForm} onSubmit={createUser}>
                <input className={c.signup__email} required type="email" onChange={evt => {setEmail(evt.target.value)}} placeholder="email"/>
                <input className={c.signup__password} required maxLength={8} type="password" onChange={evt => {setPassword(evt.target.value)}} placeholder="password"/>
                <button type="submit" className={c.signup__btn}>Sign up</button>
            </form>
       </div>
    )
}

export default SignUp