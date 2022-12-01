import { useState } from "react"
import c from "./Login.module.css"
import { auth, provider } from "../../firebase/config"
import { useHistory } from "react-router-dom"

let LogIn = () => {
    const [loginPossibleError, setLoginPossibleError] = useState("")
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = (evt) => {
        evt.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                if (response) {
                    history.push("/")
                }
            })
            .catch(err => {
                setLoginPossibleError(err.message)
            })
    }

    const loginWithGoogle = (evt) => {
        auth.signInWithPopup(provider)
            .then(response => {
                if (response) {
                    history.push("/google")
                }
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className={c.login}>
            {
                loginPossibleError && <p style={{color: "red", marginBottom: "20px"}}>{loginPossibleError}</p>
            }
            <h1 className={c.loginheading}>Log In</h1>
            <form className={c.login__form} onSubmit={loginUser}>
                <input className={c.login__email} required type="email" placeholder="email" onChange={evt => {setEmail(evt.target.value)}}/>
                <input className={c.login__password} required maxLength={8} type="password" placeholder="password" onChange={evt => {setPassword(evt.target.value)}}/>
                <button className={c.login__btn} type="submit">Log In</button>
            </form>
            <button onClick={loginWithGoogle}>Sign up With Google</button>
        </div>
    )
}

export default LogIn