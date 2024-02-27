import React from 'react'
import styles from "./Dataset.module.css"
// import { NavLink } from 'react-router-dom'

const data = [

    {
        name: "Dilution Face wash",
        des: "Glameura skin Kinetics Vitamin C Zero Dilution Face wash with fruits AHA, improves and energize dull skin | 100ml",
        img: "./img/pd1.jpg",
        link: "https://clinicalaiassistance.com/products"
    },
    {
        name: "Vitamin C Serum",
        des: "Glameura Skin Kinetics vitamin C Zero Dilution Serum for oily or acne prone skin, get Blemish-Free, Bright Skin, Suits All Skin Types, Fragrance-Free | 15 ml",
        img: "./img/pd2.jpg",
        link: "https://clinicalaiassistance.com/products"
    },
    {
        name: "Niacinamide Serum",
        des: "Glameura Skin Kinetics Niacinamide Zero Dilution Serum for minimizing skin pores, reduces acne marks, stretch marks | 30 ml",
        img: "./img/pd3.jpg",
        link: "https://clinicalaiassistance.com/products"
    },

]

const Dataset = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Nutraceutical products</h1>
            </div>
            { <div className={styles.about}>
                <p>We are delighted to announce a collaborative partnership between our company, <b>Clinical AI Assistance</b>, and <b><a href="https://boipl.com/" target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration: 'none'}}>Blu Oscen Innovation</a></b>, marking a significant stride in the realm of Nutraceutical products. This alliance reflects our shared commitment to advancing healthcare through cutting-edge technologies and innovative solutions. </p>
            </div> }
            <div className={styles.dsouter}>
                {data.map((elm) => (

                    <div className={styles.dsbox}>
                        <h1 className={styles.dsname} >{elm.name}</h1>
                        <p className={styles.dsdes}>{elm.des}</p>
                        <img className={styles.img} src={elm.img} alt="" />

                        <a className={styles.a} href={elm.link} target='blank'> <button className={styles.btndiv} >GET ACCESS</button></a>

                    </div>

                )
                )}
            </div>
        </>
    )
}

export default Dataset
