import React from 'react'
import styles from "./Vision.module.css"



const Vision = () => {
    return (
        <>
            <div className={styles.outervs}>

                <div className={styles.content}>
                    <h1 className={`${styles.q} ${styles.centeredTitle}`}>
                        Symptom Investigation & Diagnosis Survey with 100 Doctors
                    </h1>
                    <br />
                    <div className={styles.ww2}>
                        <font ><i> In recent times, the healthcare system has been strained by long queues, patient dissatisfaction, and physician overload due to a shortage of healthcare providers. In our efforts to comprehend the issue, we engaged in discussions with 100 doctors affiliated with prestigious institutions like AIIMS. Our objective was to better comprehend the problem and explore innovative solutions. The summarized results are presented below. </i></font>
                    </div>
                    <br />
                    <br />
                    <p className={styles.ans}>
                        <b>How many years of experience do you possess in the field of medicine?</b>
                    </p>

                    <div className={styles.vsimg}>
                        <img className={styles.vsimg} src=".\img\SQ_0.png" alt="" />
                    </div>
                    <p className={styles.ans}>
                        <b>When a patient visits you, how much time you invest in initial investigation / symptom investigation?</b>
                    </p>

                    <div className={styles.vsimg}>
                        <img className={styles.vsimg} src=".\img\SQ_6.png" alt="" />
                    </div>
                    <p className={styles.ans}>
                        <b>Do you think a junior doctor can save your time if they could have performed initial symptom investigation? </b>
                    </p>

                    <div className={styles.vsimg}>
                        <img className={styles.vsimg} src=".\img\SQ_3.png" alt="" />
                    </div>
                    <h1 className={`${styles.q} ${styles.centeredTitle}`}>
                        <b> A new framework for Symptom Investigation and Diagnosis </b>
                    </h1>
                    <div className={styles.vsimg}>
                        <img className={styles.vsimg} src=".\img\SQ_5.png" alt="" />
                    </div>
                    <p className={styles.ans}>
                        <b> How much time, the assistant can save for each patient (on an average)?</b>
                    </p>

                    <div className={styles.vsimg}>
                        <img className={styles.vsimg} src=".\img\SQ_Time.png" alt="" />
                    </div>
                    <br />
                    <div className={styles.ww}>
                        <font ><i> Motivated by the scenarios, we build a conversational medical assistant that aids doctors in conducting thorough symptom investigations and making accurate diagnoses. The assistant serves as the initial point of contact for patients; it conducts an initial assessment and compiles a concise report for the physician. This efficient process saves doctors a significant amount of time that can be better utilized elsewhere.</i></font>
                    </div>
                    <h1 className={`${styles.q} ${styles.centeredTitle}`}>
                        Research and Development
                    </h1>
                    <div className="justifiedText">
                    <ul className={styles.ul}>
                        <li className={styles.li}><b> Patent:  </b> System and Method for Automated Disease Diagnosis: Abhisek Tiwari, Sriparna Saha, Pushpak Bhattacharya, Minakshi Dhar - Indian Patent, 2023 </li>
                        <li className={styles.li}><b> Journal: </b>   A Knowledge Infused Context Driven Dialogue Agent for Disease Diagnosis using Hierarchical Reinforcement Learning : Abhisek Tiwari, Sriparna Saha, and Pushpak Bhattacharyya - Knowledge Based Systems (KBS), 2021</li>
                        <li className={styles.li}><b> Journal: </b>  Towards Symptom Assessment guided Symptom Investigation and Disease Diagnosis Assistant: Abhisek Tiwari, Rishabh, Sriparna Saha, Pushpak Bhattacharyya, Sarbajeet Tiwari, and Minakshi Dhar - IEEE Transactions on Artificial Intelligence, 2023</li>
                        <li className={styles.li}><b> Conference:   </b> Dr. Can See: Towards a Multi-modal Disease Diagnosis Virtual Assistant: Abhisek Tiwari, Manisimha Manthena, Sriparna Saha, Pushpak Bhattacharyya, Minakshi Dhar, and Sarbajeet Tiwari - 31st ACM International Conference on Information and Knowledge Management (CIKM), 2022</li>
                        <li className={styles.li}><b> Conference:  </b> Experience and Evidence are the eyes of an excellent summarizer! Towards Knowledge Infused Multi-modal Clinical Conversation Summarization: Abhisek Tiwari, Anisha Saha, Sriparna Saha, Pushpak Bhattacharyya, and Minakshi Dhar - 32nd ACM International Conference on Information and Knowledge Management (CIKM) 2023</li>
                    </ul>
                    </div>
                </div>

            </div>

        </>
    )

}
export default Vision

