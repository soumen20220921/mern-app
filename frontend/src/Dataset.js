import React from 'react'
import styles from "./Dataset.module.css"
import { NavLink } from 'react-router-dom'

const data = [

    {
        name: "ES-MDD",
        des: "ES-MDD is an empathy and severity-aware multi-modal medical dialogue (ES-MMD) corpus in English.",
        img: "./img/ESimage6_1 (1).png",
        // link: "/DatasetBookingForm"
    },
    {
        name: "QueSemSpan",
        des: "QueSemSpan MedQA is a large-scale semantic information annotated medical multi-span question answering corpus.",
        img: "./img/Med QA (2).png",
        // link: ""
    },
    {
        name: "RD-Dialogue",
        des: "RD-Dialogue is a conversational corpus having conversations between patient and doctor, collected from real world hospitals.",
        img: "./img/RD-Dialogue.jpg",
        // link: ""
    },
    {
        name: "PlanConSent",
        des: "PlaCaConSet, a multi-modal, multi-turn plant care conversational dataset, which consists of around 1K conversations.",
        img: "./img/fig3.png",
        // link: ""
    },
]

const Dataset = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Clinical Datasets</h1>
            </div>
            <div className={styles.dsouter}>
                {data.map((elm) => (

                    <div className={styles.dsbox}>
                        <h1 className={styles.dsname} >{elm.name}</h1>
                        <p className={styles.dsdes}>{elm.des}</p>
                        <img className={styles.img} src={elm.img} alt="" />

                        <NavLink className={styles.a} to="/DatasetBookingForm" > <button className={styles.btndiv} >GET ACCESS</button></NavLink>

                    </div>

                )
                )}
            </div>
        </>
    )
}

export default Dataset
