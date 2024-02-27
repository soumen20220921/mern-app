import React from 'react'
import styles from "./Framework.module.css"
import { NavLink } from 'react-router-dom'
const data = [
    {
        name: "Medical Entity Recognition",
        des: "Medical Entity Recognition (MER) is the automated identification and classification of medical concepts and entities in text, such as diseases, medications, and symptoms.",
        img: "./img/MER.png",
        // link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
    {
        name: "Medical Document Summarization",
        des: " Our AI-powered Multimodal Medical Document Summarization has been crafted to efficiently and precisely condense complex clinical documents (including multimodal content) into concise and accurate information.",
        img: "./img/MDS.png",
        // link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
    {
        name: "Medical Question Answering",
        des: "We have built a semantic-aware, knowledge infused multi-span medical question answering framework, which extracts answer (having texts from different paragraphs) to a query from a document.",
        img: "./img/Med QA (2).png",
        // link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
    {
        name: "On Demand",
        des: "Apart from the medical tasks mentioned earlier, we also handle additional responsibilities like categorizing mental illnesses and generating interventions. Therefore, please don't hesitate to make your request, and we will respond promptly.",
        img: "./img/OD.png",
        // link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
]
const Framework = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Clinical Frameworks</h1>
            </div>
            <div className={styles.dsouter}>

                {data.map((elm) => (

                    <div className={styles.dsbox}>
                        <h1 className={styles.dsname} >{elm.name}</h1>
                        <p className={styles.dsdes}>{elm.des}</p>
                        <img className={styles.img} src={elm.img} alt="" />

                        <NavLink className={styles.a} to="/FrameworkBookingForm"> <button className={styles.btndiv} >GET ACCESS</button></NavLink>

                    </div>

                )
                )}
            </div>
        </>
    )
}

export default Framework
