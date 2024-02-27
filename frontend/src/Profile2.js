import React from 'react'
import styles from "./Profile.module.css"
import { NavLink } from 'react-router-dom'
import { auth } from "./Firebase"
import { signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from './Firebase';
import { storage } from "./Firebase";

// import values from './Login.js'
const Profile = () => {

    // console.log(values.email)
    const navigate = useNavigate();

    const [userName, setUsername] = useState("")
    const [userEmail, setEmail] = useState("")

    const [dob, setDob] = useState("")
    const [dob2, setAge] = useState("")
    var [phone, setPhone] = useState("")
    var [uemail, setUemail] = useState("")
    const [IMG, setIMG] = useState("./img/logo user.png")


    // Booking Details
    const [DrName, setDrName] = useState("")
    const [DOA, setDOA] = useState("")
    const [Slot, setSlot] = useState("")
    const [Ph, setPh] = useState("")


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsername(user.displayName);
                setEmail(user.email);
                // setUid(user.uid);
                // console.log(uid)

                fetchPost();
                fetchBookdata();
            }
            else setUsername("");
        });
    })

    const logout = () => {
        signOut(auth).then(() => {
            alert("Logout Succesfully")
            navigate("/");

        }).catch((error) => {
            console.log(error)
        });
    }

    // const fetchPost = async () => {
    //     console.log(uid)

    //     try {


    //         const docRef = doc(collection(db, "users"), uid);

    //         const docSnapshot = await getDoc(docRef);
    //         console.log(docSnapshot)
    //         if (docSnapshot.exists()) {
    //             const data = docSnapshot.data();
    //             setPhone(data.mobile);

    //             console.log(setPhone)
    //             // const newData = { ...docSnapshot.data(), todo: docSnapshot.todo };




    //         } else {
    //             console.log("Document not found");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching document: ", error);
    //     }
    // }
    // useEffect(() => {
    //     fetchPost();
    // }, []);


    const fetchPost = async () => {
        // console.log("hi")
        console.log(userEmail)
        try {
            // const documentId = customDocId;

            const docRef = doc(db, "users", userEmail);
            // console.log(userEmail)
            const docSnapshot = await getDoc(docRef);

            if (docSnapshot.exists()) {
                const data = docSnapshot.data();

                console.log("Fetched data:", data.email);

                setUemail(data.email)
                setDob(data.dob)
                setPhone(data.mobile)
                if (data.imageURL) {
                    setIMG(data.imageURL)
                }


                // Input date string in dd-mm-yyyy format
                // const dateString = "2002-9-21";
                const dateString = data.dob

                // Split the date string into day, month, and year
                const parts = dateString.split('-');
                const day = parseInt(parts[2], 10);
                const month = parseInt(parts[1], 10) - 1; // Months are zero-based (0 = January, 11 = December)
                const year = parseInt(parts[0], 10);

                // Create a Date object from the input date
                const birthDate = new Date(year, month, day);

                // Get the current date
                const currentDate = new Date();

                // Calculate the age
                var age = currentDate.getFullYear() - birthDate.getFullYear();

                // Check if the birthday has occurred this year
                if (
                    currentDate.getMonth() < birthDate.getMonth() ||
                    (currentDate.getMonth() === birthDate.getMonth() &&
                        currentDate.getDate() < birthDate.getDate())
                ) {
                    age--; // Decrease age by 1 if the birthday hasn't occurred yet this year
                }

                // Display the age
                setAge(age)
                console.log(`Age: ${age} years`);



            } else {
                console.log("Document not found");
            }
        } catch (error) {
            console.error("Error fetching document: ", error);
        }
    }




    const fetchBookdata = async () => {
        // console.log("hi")
        console.log(userEmail)
        try {
            // const documentId = customDocId;

            const docRef = doc(db, "appointments", userEmail);
            // console.log(userEmail)
            const docSnapshot = await getDoc(docRef);

            if (docSnapshot.exists()) {
                const data2 = docSnapshot.data();
                console.log(data2)
                setDrName(data2.Doctor)
                setDOA(data2.startDate)
                setSlot(data2.Slot)
                setPh(data2.phoneNumber)
            }
        } catch (error) {
            console.error("Error fetching document: ", error);
        }
    }
    // useEffect(() => {
    //     fetchPost();
    // }, []);

    const [imageUpload, setImgUpload] = useState(null);
    // const [Url, setUrl] = useState(null);

    const uploadImg = () => {
        if (imageUpload == null) return;
        storage.ref(`/img/${imageUpload.name}`).put(imageUpload).on("state_Changed", alert("success"), alert, () => {
            storage.ref("img").child(imageUpload.name).getDownloadURL().then((url) => {
                // setUrl(url);

                var newData = {
                    imageURL: url, // The new field and its value
                };

                // Specify the document reference with only the collection name
                const userDocRef = doc(db, 'users', uemail); // Replace 'uemail' with the actual document ID

                // Use setDoc to update the document
                setDoc(userDocRef, newData, { merge: true })
                    .then(() => {
                        console.log('Field added/updated successfully');
                        navigate("/profile")
                    })
                    .catch((error) => {
                        console.error('Error adding/updating field:', error);
                    });
            });
        });
    }


    return (
        <div className={styles.outerdiv}>
            <div className={styles.left}>
                <img className={styles.profileIMG} src={IMG} alt="img" />
                <div className={styles.btndiv}>
                    <input id="fileinput" type="file" className={styles.inp} onChange={(event) => { setImgUpload(event.target.files[0]) }} />
                    <label for="fileinput" className={styles.customfileupload}>Select</label>
                    <button id='upload' className={styles.inp} onClick={uploadImg}></button>
                    <label for="upload" className={styles.customfileuploadone}>Save </label>
                </div>
                {/* <button className={styles.uploadIMG}>Upload Img</button> */}
                <div className={styles.profileInformation}>
                    <h1 className={styles.h1}>{userName}</h1>
                    <h1 className={styles.h2}>{uemail}</h1>
                    <h1 className={styles.h2}>Ph: {phone}</h1>
                    <h1 className={styles.h2}>Dob: {dob}</h1>

                    <h1 className={styles.h2}>Age: {dob2}</h1>
                    <button className={styles.logoutbtn} onClick={logout}>Log Out</button>

                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.underright}>
                    <NavLink to="/SwaasthyaSathi" className={styles.demo}><div >
                        <h1 className={styles.nav}>Product Demo</h1>
                    </div></NavLink>
                    <NavLink to="/services" className={styles.service}>
                        <div>
                            <h1 className={styles.nav}>Services</h1>
                        </div>
                    </NavLink>
                </div>
                <div style={{ display: DrName ? "block" : "none" }} className={styles.booking}>
                    <p className={styles.bookingfont}>
                        Name : {DrName}<br />
                        DOA : {DOA}<br />
                        Slot : {Slot}<br />
                        Ph : {Ph} <br />
                    </p>
                    <p className={styles.booked}>Booked</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
