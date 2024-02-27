import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import styles from "./Form.module.css"
import { db } from './Firebase';
import { auth } from "./Firebase"
import { collection, doc, setDoc } from "firebase/firestore"
// import { v4 } from 'uuid';


function AppointmentForm({ amount, checkoutHandler }) {
    // const navigate = useNavigate();
    const [ErrorMsg, setErrorMsg] = useState("")
    const [Email, setEmail] = useState("")
    const [clr, setClr] = useState(false)


    const color = () => {
        if (clr) {
            setClr(false)
        }
        else {
            setClr(true)
        }
    }
    const [formData, setFormData] = useState({
        name: '',
        gender: 'Male',
        location: '',
        phoneNumber: '',
        age: '',
        medicalCondition: '',
        Doctor: "",
        startDate: '',
        medicalDepartment: '',
        hasLaptopAndInternet: false,
        DayOfAppointment: 'Sunday',
        Slot: "",
        Tr: ""

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

        if (!formData.name || !formData.gender || !formData.location || !formData.phoneNumber || !formData.startDate || !formData.Doctor || !formData.DayOfAppointment) {
            setErrorMsg("Enter all fields.")
            return 0;
        }

        setErrorMsg("")
        event.preventDefault();
        console.log(formData); // You can handle form submission here


        console.log("hi")

        console.log(formData)
        try {

            const collectionRef = collection(db, "appointments"); // Specify the collection name
            const docRef = doc(collectionRef, `${Email}`); // Create a document reference with the custom ID
            const data = formData;
            setDoc(docRef, data)
                .then(async () => {
                    console.log("Custom document created successfully");
                    await checkoutHandler(amount)
                    // alert("Your appointment has been booked you will get your meeting link sortly.")
                })
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        setFormData(
            {
                name: '',
                gender: 'Male',
                location: '',
                phoneNumber: '',
                age: '',
                medicalCondition: '',
                Doctor: '',
                startDate: '',
                medicalDepartment: '',
                hasLaptopAndInternet: false,
                Tr: "",
            }
        )
    };

    return (
        <div className={styles.outerdiv}>
            <h1 className={styles.h1}>Online Doctor Consultation Form</h1>
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
                    <label htmlFor="medicalCondition">Issue/Medical Condition:</label>
                    <textarea
                        id="medicalCondition"
                        name="medicalCondition"
                        value={formData.medicalCondition}
                        onChange={handleChange}
                        className={styles.input}
                    />
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
                    <label htmlFor="startDate">When was it started?</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="medicalDepartment">Concerned Medical Dept:</label>
                    <input
                        type="text"
                        id="medicalDepartment"
                        name="medicalDepartment"
                        value={formData.medicalDepartment}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                <div>
                    <label htmlFor="Doctor">Doctor list :</label>
                    <select
                        id="Doctor"
                        name="Doctor"
                        value={formData.Doctor}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Dr. Minakshi Dhar, MBBS, MD, PGD">Doctors</option>
                        <option value="Dr. Minakshi Dhar, MBBS, MD, PGD">Dr. Minakshi Dhar, MBBS, MD, PGD</option>
                        <option value="Dr. Pankaj Kumar, MBBS, MD">Dr. Pankaj Kumar, MBBS, MD</option>
                        <option value="Dr. Diwakar Singh, MBBS, MD">Dr. Diwakar Singh, MBBS, MD</option>
                        <option value="Dr. Mehfooz Alam, MBBS, DNB">Dr. Mehfooz Alam, MBBS, DNB</option>
                        <option value="Dr. Chandni Prakash, MBBS, MD">Dr. Pankaj Kumar, MBBS, MD</option>
                        <option value="Dr. Tanmoy sarkar, BHMS, MD">Dr. Tanmoy sarkar, BHMS, MD</option>
                        <option value="Dr. Shobha Kant Pandey, MBBS">Dr. Shobha Kant Pandey, MBBS</option>
                        <option value="Dr. Monalisa Murmu, BHMS">Dr. Monalisa Murmu, BHMS</option>
                        <option value="Dr Dewesh Kumar, BHMS, MD(Hom)">Dr Dewesh Kumar, BHMS, MD(Hom)</option>
                        <option value="Dr. Mrinmoy, MBBS">Dr. Mrinmoy, MBBS</option>
                        <option value="Dr. Krithartha, MBBS">Dr. Krithartha, MBBS</option>
                        <option value="Dr Dewesh Kumar, BHMS, MD(Hom)">Dr Dewesh Kumar, BHMS, MD(Hom)</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="DayOfAppointment">Day Of Appointment:</label>
                    <select
                        id="DayOfAppointment"
                        name="DayOfAppointment"
                        value={formData.Appointment}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="Sunday">Day Of Appointment</option>
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
                        <option value="slto">Slot</option>
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
                        <b><s>450 INR</s> 60% off </b>
                        <b> 180 INR only</b>

                    </b>
                </label>

                {/* <div className={styles.payment}>
                    <button className={styles.paymentbtn} onClick={color} >Pay With QR</button>
                    <a href="https://buy.stripe.com/5kA17H1H546S384eUX" target='blank'><button className={styles.paymentbtn}>Pay With Card</button></a>
                </div> */}

                {/* <img className={styles.qrimg} style={{ display: clr ? "block" : "none" }} src=".\img\Doc_new_180.jpeg" alt="" /> */}

                {/* <div className={styles.trid} >
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
                
                <div className={styles.checkoutbtn}> <button className={styles.button} onClick={handleSubmit} >Submit</button></div> */}
                <div className={styles.checkoutbtn1} ><b>{ErrorMsg}<br /></b></div>
                <button className={styles.button} style={{ marginLeft: "120px" }} onClick={handleSubmit}>Book Now</button>
            </div>
        </div>
    );
}

export default AppointmentForm;
