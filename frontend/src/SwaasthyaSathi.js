import React from 'react'
import styles from "./SwaasthyaSathi.module.css"
import { NavLink } from 'react-router-dom'


const SwaasthyaSathi = () => {
    return (
        <div className={styles.outerss}>
            <div className={styles.space}>
            </div>
            <div className={styles.headingss}>
                <div className={styles.h1}>Swasthyasathi: The AI based Clinical Assistant</div>
            </div>
            { <div className={styles.about}>
                <p>The assistant aids doctors in conducting symptom investigations and diagnosing diseases. It is accessible for clinicians and healthcare professionals only. If you or your healthcare team are interested in testing and implementing the assistant, please contact us.</p>
            </div> }
            <NavLink to="/DemoBookingForm"><button className={styles.demoBookbtn}>Demo Booking</button></NavLink>
            <br />
            <br />
            <img className={styles.cabimg} src=".\img\CAB.svg" alt="" />
            <div className={styles.space}>
            </div>
        </div>
    )
}

export default SwaasthyaSathi
