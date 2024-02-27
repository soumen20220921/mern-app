import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from "./Form.module.css"
import { db } from './Firebase';
import { auth } from "./Firebase"
import { v4 } from 'uuid';

import { collection, doc, setDoc } from "firebase/firestore"
function DatasetBookingForm() {
    // const navigate = useNavigate();
    const [ErrorMsg, setErrorMsg] = useState("")
    const [Email, setEmail] = useState("")
    // const [clr, setClr] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        Profession: '',
        phoneNumber: '',
        PurposeofDataset: '',
        ProfileLink: "",
        Usage: "",
        EthicalandSharingPolicy: false,
        Dataset: "",
        Tr: ""
    });


    // const color = () => {
    //     if (clr) {
    //         setClr(false)
    //     }
    //     else {
    //         setClr(true)
    //     }
    // }


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
        if (!formData.name || !formData.PurposeofDataset || !formData.Profession || !formData.phoneNumber || !formData.Dataset || !formData.Usage) {
            setErrorMsg("Please fill all fields.")
            return;
        }

        setErrorMsg("")
        event.preventDefault();
        console.log(formData); // You can handle form submission here



        console.log("hi")

        console.log(formData)
        try {
            const collectionRef = collection(db, "DatasetBookingForm"); // Specify the collection name
            const docRef = doc(collectionRef, `${Email} ${v4()}`); // Create a document reference with the custom ID
            const data = formData;
            setDoc(docRef, data)
                .then(() => {
                    console.log("Custom document created successfully");
                    alert("Your appointment has been booked you will get your meeting link sortly.")
                })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setFormData(
            {
                name: '',

                Profession: '',
                phoneNumber: '',
                PurposeofDataset: '',
                ProfileLink: "",
                Usage: "",
                EthicalandSharingPolicy: false,
                Dataset: "",
                Tr: "",
            }
        )
    };

    return (
        <div className={styles.outerdiv}>
            <h1 className={styles.h1}>Dataset Access Request</h1>
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
                {/* <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="select">select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div> */}
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
                    <label htmlFor="phoneNumber">Phone no:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="PurposeofDataset">Purpose:</label>
                    <input
                        type="text"
                        id="PurposeofDataset"
                        name="PurposeofDataset"
                        value={formData.PurposeofDataset}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="Usage">Usage :</label>
                    <select
                        id="Usage"
                        name="Usage"
                        value={formData.Usage}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Usage">select</option>
                        <option value="Research">Research</option>
                        <option value="Development">Development</option>
                        <option value="Industry">Industry</option>
                        <option value="Other">Other</option>
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
                    <label htmlFor="ProfileLink">Profile Link (LinkedIn):</label>
                    <input
                        type="text"
                        id="ProfileLink"
                        name="ProfileLink"
                        value={formData.ProfileLink}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                {/* <div>
                    <label htmlFor="mentor">Select Mentor</label>
                    <select
                        id="mentor"
                        name="mentor"
                        value={formData.mentor}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Mentor">Mentors</option>
                        <option value="Abhisek Tiwari">Abhisek Tiwari</option>
                        <option value="Sriparna Saha">Sriparna Saha</option>
                        <option value="Mukul Kumar">Mukul Kumar</option>
                        <option value="Anisha Saha">Anisha Saha</option>
                        <option value="Chandan Kumar">Chandan Kumar</option>
                        <option value="Indrajit Pal">Indrajit Pal</option>
                        <option value="Aryan Sahoo">Aryan Sahoo</option>
                        <option value="Satyam Sahoo">Satyam Sahoo</option>
                        <option value="Varad Paswar">Varad Paswar</option>
                        <option value="Muhammed Sinan">Muhammed Sinan</option>
                        <option value="Sourya Dipta Das">Sourya Dipta Das</option>
                        <option value="Dr. Minakshi Dhar, MBBS, MD">Dr. Minakshi Dhar, MBBS, MD</option>
                        <option value="Dr. Pankaj Kumar">Dr. Pankaj Kumar</option>
                        <option value="Dr Chandni Prakash">Dr Chandni Prakash</option>
                        <option value="Shivangi Singh">Shivangi Singh</option>

                    </select>
                </div> */}
                {/* <div>
                    <label htmlFor="DayOfAppointment">Date Of Appointment:</label>
                    <select
                        id="DayOfAppointment"
                        name="DayOfAppointment"
                        value={formData.Appointment}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Sunday">Date Of Appointment</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                </div> */}
                <div>
                    <label htmlFor="Slot">Dataset :</label>
                    <select
                        id="Dataset"
                        name="Dataset"
                        value={formData.Dataset}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Dataset">Dataset</option>
                        <option value="D1: ESMDD ">D1: ESMDD </option>
                        <option value="D2: QueSemSpan">D2: QueSemSpan</option>
                        <option value="D3:  RD  ">D3:  RD  </option>
                        <option value="D4: PlanConsent ">D4: PlanConsent </option>

                    </select>
                </div>
                {/* <div className={styles.chek}>

                    <input
                        type="checkbox"
                        id="EthicalandSharingPolicy"
                        name="EthicalandSharingPolicy"
                        checked={formData.EthicalandSharingPolicy}
                        onChange={handleChange}
                        className={styles.inputchek}
                    />

                </div> */}

                <div className={styles.checkoutbtn1} ><b>{ErrorMsg}<br /></b></div>

                <div className={styles.checkoutbtn}> <button className={styles.button} onClick={handleSubmit} >Submit</button></div>
            </div>
        </div>
    );
}

export default DatasetBookingForm;
