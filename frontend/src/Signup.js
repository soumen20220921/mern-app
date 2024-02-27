
import styles from "./Signup.module.css"
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"
import { auth } from "./Firebase"
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from './Firebase';


const Signup = () => {

    const [customerId, setCustomerId] = useState("")
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        lname: "",
        dob: "",
        email: "",
        mobile: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleSubmition = (e) => {
        if (!values.name || !values.lname || !values.dob || !values.email || !values.email || !values.password) {
            setErrorMsg("Enter all fields.")
            return;
        }

        setErrorMsg("")
        // console.log(values);
        setBtnDisabled(true)
        // var uidd = "";
        createUserWithEmailAndPassword(auth, values.email, values.password).then(
            async (res) => {
                setBtnDisabled(false)
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                })
                console.log(user)
                // uidd = user.uid;
                // console.log(user.uid)
                // setCustomerId(user.uid);
                setCustomerId(values.email);
                console.log(customerId)
                await sendEmailVerification(auth.currentUser);
                alert("Verify link in your Email");

                // addTodo(user.uid);
                console.log(values.email)
                await addTodo(values.email);

                navigate("/login");
                // navigate("/login");
            })

            .catch(err => setErrorMsg(err.message))
        setBtnDisabled(false)
        // addTodo(e, uidd)
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         console.log(user.uid)
        //         console.log(customerId)
        //     }
        // });

    }

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setCustomerId(user.uid);
    //         }
    //     });
    // })

    const addTodo = async (uid) => {
        // e.preventDefault();
        console.log("hi")

        console.log(uid)
        try {
            const collectionRef = collection(db, "users"); // Specify the collection name
            const docRef = doc(collectionRef, uid); // Create a document reference with the custom ID
            const data = values;
            setDoc(docRef, data)
                .then(() => {
                    console.log("Custom document created successfully");
                })
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }




    return (
        <div className={styles.suouter}>
            <div className={styles.maindiv}>
                <div className={`${styles.left} ${styles.box}`}>
                    <img className={styles.img} src=".\img\sign-up.png" alt="" />
                </div>
                <div className={`${styles.right} ${styles.box}`}>
                    <h1 className={styles.h1}  >Name*</h1>
                    <input className={styles.input2} type="text" placeholder='Enter first name'
                        onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))
                        } />
                    <h1 className={styles.h1}>Last Name*</h1>
                    <input className={styles.input2} type="text" placeholder='Enter last name'
                        onChange={(event) => setValues((prev) => ({ ...prev, lname: event.target.value }))
                        } />
                    <h1 className={styles.h1}>Date of Birth*</h1>
                    <input className={styles.input2} type="date" placeholder='Enter DOB'
                        onChange={(event) => setValues((prev) => ({ ...prev, dob: event.target.value }))
                        } />
                    <h1 className={styles.h1}>Email*</h1>
                    <input className={styles.input2} type="email" placeholder="Enter Email" onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    } />
                    <h1 className={styles.h1}>Mobile No*</h1>
                    <input className={styles.input2} type="mobile number" placeholder='Enter Mobile'
                        onChange={(event) => setValues((prev) => ({ ...prev, mobile: event.target.value }))
                        } />
                    <h1 className={styles.h1}>Password*</h1>
                    <input className={styles.input2} type="password" placeholder='Enter password'
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, password: event.target.value }))
                        } />
                    {/* <h1 className={styles.h1}>Confirm Password*</h1>
                    <input className={styles.input2} type="password" /><br /> */}
                    <br />
                    <b className={styles.err}>{errorMsg}</b>
                    <div className={styles.loginbtn}>
                        <button className={styles.btn} onClick={(e) => {
                            handleSubmition(e);
                            // addTodo(e);
                        }} disabled={btnDisabled}> <p className={styles.p}>Sign Up</p></button>

                        <p className={styles.p2}>Already user <NavLink to="/login">Login</NavLink></p>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Signup
