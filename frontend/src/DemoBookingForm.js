import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from "./Form.module.css"
import { db } from './Firebase';
import { auth } from "./Firebase"
import { collection, doc, setDoc } from "firebase/firestore"
import { v4 } from 'uuid';

function DemoBookingForm() {
    // const navigate = useNavigate();
    const [ErrorMsg, setErrorMsg] = useState("")
    const [Email, setEmail] = useState("")
    // const [clr, setClr] = useState(false)


    // const color = () => {
    //     if (clr) {
    //         setClr(false)
    //     }
    //     else {
    //         setClr(true)
    //     }
    // }


    const [formData, setFormData] = useState({
        name: '',
        Profession: "",
        Organization: "",
        ProfileLink: "",
        Purpose: "",
        Address: "",
        date: "",
        Time: "",
        mode: "",
        Tr: "",

    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });

    };



    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // setUsername(user.displayName);
                setEmail(user.email);
                // setUid(user.uid);
                // console.log(uid)

                // fetchPost();
            }

        });
        // console.log(Email)
    })


    const handleSubmit = async (event) => {
        if (!formData.name || !formData.Profession || !formData.Organization || !formData.ProfileLink || !formData.Purpose || !formData.Address || !formData.date || !formData.Tr) {
            setErrorMsg("Enter all fields.")
            return 0;
        }

        setErrorMsg("")
        event.preventDefault();
        console.log(formData); // You can handle form submission here


        console.log("hi")

        console.log(formData)
        try {
            const collectionRef = collection(db, "DemoBookingForm"); // Specify the collection name
            const docRef = doc(collectionRef, `${Email} ${v4()}`); // Create a document reference with the custom ID
            const data = formData;
            setDoc(docRef, data)
                .then(() => {
                    console.log("Custom document created successfully");
                })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setFormData(
            {
                name: '',
                Profession: "",
                Organization: "",
                ProfileLink: "",
                Purpose: "",
                Address: "",
                date: "",
                Time: "",
                mode: "",
                Tr: "",
            }

        )
        alert("Your request is submited successfully.")
    };

    return (
        <div className={styles.outerdiv}>
            <h1 className={styles.h1}>Demo Booking Form</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="Profession">Profession:</label>
                    <input
                        type="text"
                        id="Profession"
                        name="Profession"
                        value={formData.Profession}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="Organization">Organization:</label>
                    <input
                        type="text"
                        id="Organization"
                        name="Organization"
                        value={formData.Organization}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="ProfileLink">Profile Link:</label>
                    <input
                        type="text"
                        id="ProfileLink"
                        name="ProfileLink"
                        value={formData.ProfileLink}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="Purpose">Purpose:</label>
                    <input
                        type="text"
                        id="Purpose"
                        name="Purpose"
                        value={formData.Purpose}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                {/* <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div> */}
                <div>
                    <label htmlFor="Address">Address (Complete):</label>
                    <textarea
                        id="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="Slot">Mode :</label>
                    <select
                        id="mode"
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="S1">mode</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>

                    </select>
                </div>
                {/* <div>
                    <label htmlFor="prescription">Prescription / Report (if any):</label>
                    <input
                        type="file"
                        id="prescription"
                        name="prescription"
                        onChange={handleChange}
                    />
                </div> */}
                <div>
                    <label htmlFor="startDate">Date : </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>




                <div>
                    <label htmlFor="medicalDepartment">Time :</label>
                    <input
                        type="text"
                        id="Time"
                        name="Time"
                        value={formData.Time}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>



                <div className={styles.checkoutbtn1} ><b>{ErrorMsg}<br /></b></div>
                <div className={styles.checkoutbtn}> <button className={styles.button} onClick={handleSubmit} >Submit</button></div>
            </div>
        </div>
    );
}

export default DemoBookingForm;
