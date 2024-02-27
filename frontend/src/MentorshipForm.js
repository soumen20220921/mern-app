import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from "./Form.module.css"
import { db } from './Firebase';
import { auth } from "./Firebase"
import { v4 } from 'uuid';


import { collection, doc, setDoc } from "firebase/firestore"
function MentorshipForm({ amount, checkoutHandler }) {
    // const navigate = useNavigate();
    const [ErrorMsg, setErrorMsg] = useState("")
    const [Email, setEmail] = useState("")
    const [clr, setClr] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        location: '',
        phoneNumber: '',
        age: '',
        ProfileLink: "",
        Educationlevel: "",
        mentor: "",
        hasLaptopAndInternet: false,
        DayOfAppointment: 'Sunday',
        Slot: "",
        Tr: ""

    });


    const color = () => {
        if (clr) {
            setClr(false)
        }
        else {
            setClr(true)
        }
    }


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
        if (!formData.name || !formData.gender || !formData.location || !formData.phoneNumber || !formData.Slot || !formData.Educationlevel || !formData.mentor || !formData.DayOfAppointment) {
            setErrorMsg("Enter all fields.")
            return;
        }

        setErrorMsg("")
        event.preventDefault();
        console.log(formData); // You can handle form submission here



        console.log("hi")

        console.log(formData)
        try {
            const collectionRef = collection(db, "MentorshipForm"); // Specify the collection name
            const docRef = doc(collectionRef, `${Email} ${v4()}`); // Create a document reference with the custom ID
            const data = formData;
            setDoc(docRef, data)
                .then(async () => {
                    console.log("Custom document created successfully");
                    // alert("Your appointment has been booked you will get your meeting link sortly.")
                    await checkoutHandler(amount)
                })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setFormData(
            {
                name: '',
                gender: '',
                location: '',
                phoneNumber: '',
                age: '',
                ProfileLink: "",
                Educationlevel: "",
                mentor: "",
                hasLaptopAndInternet: false,
                DayOfAppointment: 'Sunday',
                Slot: "",
                Tr: "",
            }
        )
    };

    return (
        <div className={styles.outerdiv}>
            <h1 className={styles.h1}>Mentorship Form</h1>
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
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
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
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="Educationlevel">Education level</label>
                    <select
                        id="Educationlevel"
                        name="Educationlevel"
                        value={formData.Educationlevel}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Educationlevel">Education level</option>
                        <option value="High School">High School</option>
                        <option value="UG">UG</option>
                        <option value="PG">PG</option>
                        <option value="PHD">PHD</option>
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

                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                    <label htmlFor="Slot">Slot :</label>
                    <select
                        id="Slot"
                        name="Slot"
                        value={formData.Slot}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="S1">Slot</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                        <option value="S4">S4</option>
                        <option value="S5">S5</option>
                    </select>
                </div>
                <div className={styles.chek}>

                    <input
                        type="checkbox"
                        id="hasLaptopAndInternet"
                        name="hasLaptopAndInternet"
                        checked={formData.hasLaptopAndInternet}
                        onChange={handleChange}
                        className={styles.inputchek}
                    />
                    <label htmlFor="hasLaptopAndInternet">
                        Do you have a laptop and internet?
                    </label>
                </div>
                <label htmlFor="hasLaptopAndInternet" className={styles.discount}>
                    <b>Consultation Fee <b />
                        <b><s>250 INR</s> 60% off </b>
                        <b>100 INR only </b>

                    </b>
                </label>
                {/* <div className={styles.payment}>
                    <button className={styles.paymentbtn} onClick={color} >Pay With QR</button>
                    <a href="https://buy.stripe.com/00gaIh1H56f0eQMeUY" target='
                    blank'> <button className={styles.paymentbtn} >Pay With Card</button></a>
                </div>

                <img style={{ display: clr ? "block" : "none" }} className={styles.img} src=".\img\Ment_new_100.jpeg" alt="" />

                <div className={styles.trid} >
                    <label htmlFor="name">Transaction ID: </label>
                    <input
                        type="number"
                        id="Tr"
                        name="Tr"
                        placeholder='Enter last 4 digit'
                        value={formData.Tr}
                        onChange={handleChange}
                        className={styles.inputtr}
                    />
                </div>
                <div className={styles.checkoutbtn1} ><b>{ErrorMsg}<br /></b></div>
                <div className={styles.checkoutbtn}> <button className={styles.button} onClick={handleSubmit} >Submit</button></div> */}
                <div className={styles.checkoutbtn1} ><b>{ErrorMsg}<br /></b></div>
                <button className={styles.button} style={{ marginLeft: "120px" }} onClick={handleSubmit}>Book Now</button>
            </div>
        </div>
    );
}

export default MentorshipForm;
