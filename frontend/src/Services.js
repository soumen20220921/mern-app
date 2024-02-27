import React from 'react'
import styles from "./Services.module.css"
import { NavLink } from 'react-router-dom'
const data2 = [
    {
        name: "AI-aided Online Doctor Consultation",
        img: "./img/online Dr. consultant.webp",
        btn1: "Details",
        btn2: "Access",
        service: "/onlinedr",
        Access: "/appointmentform"
    },
    {
        name: "Clinical Datasets",
        img: "./img/dataset.png",
        btn1: "Explore",
        btn2: "Access",
        service: "/dataset",
        Access: "/DatasetBookingForm"
    },
    {
        name: "Clinical Frameworks",
        img: "./img/clinik2.jpg",
        btn1: "Explore",
        btn2: "Access",
        service: "/framework",
        Access: "/FrameworkBookingForm"
    },
    {
        name: "Mentorship",
        img: "./img/mentorship.jpg",
        btn1: "Explore",
        btn2: "Access",
        service: "/mentorship",
        Access: "/mentorshipform"
    },
    {
        name: "Nutraceutical products",
        img: "./img/product2.png",
        btn1: "Explore",
        btn2: "Access",
        service: "/products",
        Access: "/products"
    },
]
const Services = () => {
    return (
        <>
            <div className={styles.outer}>
                {data2.map((elm) => (

                    <div className={`${styles.servox1} ${styles.servox}`}>
                        <div className={styles.snamediv}>
                            <h1 className={styles.sname}>{elm.name}</h1>
                        </div>
                        <div className={styles.simgdiv}>
                            <img className={styles.simg} src={elm.img} alt="" />
                        </div>

                        <div className={styles.sbtndiv}>

                            <NavLink className={styles.navkink} to={elm.service}><p><button className={styles.sbtn}><h2 className={styles.btnn}>{elm.btn1}</h2></button></p> </NavLink>

                            <NavLink className={styles.navkink} to={elm.Access}><p><button className={styles.sbtn}><h2 className={styles.btnn}>{elm.btn2}</h2></button></p> </NavLink>

                        </div>

                    </div>)
                )}
                {/* <div className={`${styles.servox2} ${styles.servox}`}></div>
                <div className={`${styles.servox3} ${styles.servox}`}></div>
                <div className={`${styles.servox4} ${styles.servox}`}></div> */}
            </div>

        </>
    )
}

export default Services
