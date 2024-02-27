import React from 'react'
import styles from "./Herosection.module.css";
import { NavLink } from 'react-router-dom';
const Herosection = () => {
    return (
        <div>
            <main>
                <div className={`${styles.box1} ${styles.box}`}>
                    <div ><h1 className={styles.cname}>CLINICAL <span>AI</span> ASSISTANCE</h1></div>
                    <div className={styles.cdes}>In the past five years, dozens of surveys and reports indicate an unbalanced doctor-to-population ratio. With the motivation of assisting doctors, we built an autonomous junior healthcare assistant, which serves as the initial point of contact for patients. The assistant conducts an initial assessment and compiles a concise report for the physician.<br /> <br />
                        We have also noticed that patients encounter challenges when trying to access medical care, which can stem from issues such as infrastructure limitations or personal stigma. Hence, we are introducing AI-assisted online consultation services. Considering the products and services we provide, our platform have a substantial number of researchers and clinicians. Consequently, we have decided to extend our offerings to include clinical datasets, clinical AI frameworks, and mentorship opportunities.

                    </div>

                    <NavLink to="/Signup"><button className={styles.btn}>Sign Up</button></NavLink>

                </div>
                <div className={`${styles.box2} ${styles.box}`}>
                    <img src=".\img\hero2-removebg-preview.png" alt="img" />
                </div>

            </main>
        </div>
    )
}

export default Herosection
