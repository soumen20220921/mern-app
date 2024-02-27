import React, { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./Firebase"
import { useNavigate } from 'react-router-dom'
import styles from "./Login.module.css"
import { NavLink } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleSubmition = () => {
        if (!values.email || !values.password) {
            setErrorMsg("Enter all fields.")
            return;
        }
        setErrorMsg("")
        // console.log(values);
        setBtnDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.password).then(
            async (res) => {
                setBtnDisabled(false)
                const user = auth.currentUser;
                // console.log(user.emailVerified)

                if (user.emailVerified) {
                    navigate("/profile");
                }
                else {
                    setErrorMsg("Please verify your email with the link sent your email address")
                    signOut(auth).then(() => {
                        // console.log("LogOut Succesfully")
                    }).catch((error) => {
                        console.log(error)
                    });
                }
            })
            .catch(err => setErrorMsg(err.message))
        setBtnDisabled(false)
    }
    return (
        <div className={styles.suouter}>
            <div className={styles.maindiv}>
                <div className={`${styles.left} ${styles.box}`}>
                    <img className={styles.img} src=".\img\log in.jpg" alt="" />
                </div>

                <div className={`${styles.right} ${styles.box}`}>
                    <h1 className={styles.heading}>Log In</h1>
                    <h1 className={styles.h1}>Email or Mobile</h1>
                    <input className={styles.input2} type="email" placeholder='Enter Email'
                        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))
                        } />

                    <h1 className={styles.h1}>Password*</h1>
                    <input className={styles.input2} type="password" placeholder='Enter password'
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, password: event.target.value }))
                        } />
                    <br />
                    <b className={styles.err}>{errorMsg}</b>
                    <NavLink to="/ResetPassword"><b className={styles.fgpass}>Forgot Password ?</b></NavLink>
                    <div className={styles.loginbtn}>
                        <button className={styles.btn}> <p className={styles.p} disabled={btnDisabled} onClick={handleSubmition}>Log In</p></button>
                        <p className={styles.p2}>Not a user&nbsp; <NavLink to="/signup">Sign up</NavLink></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
