import React, { useState } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from '../Firebase';
const Footer = () => {

    const [Email, setEmail] = useState("")

    const handleTodoChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmition = () => {
        try {
            const collectionRef = collection(db, "subscription"); // Specify the collection name
            const docRef = doc(collectionRef, Email); // Create a document reference with the custom ID
            const data = {};
            setDoc(docRef, data)
                .then(() => {
                    alert("Subscribed")
                })
            setEmail("")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <>
            <footer>
                <div className='footer2nd'>
                    <div className="foot-box1 foot-box">
                        <h3 className='bname'>Clinical AI Assistance Pvt. Ltd.</h3>
                        <p className='bright'>
                            All Rights Reserved @2023 <br /> <br />
                            <NavLink className='bright' to="/Tc"> Terms & Policy</NavLink>
                        </p>
                    </div>
                    <div className="foot-box2 foot-box">
                        <h3 className='bname'>Subscribe to get important <br />updates</h3>

                        {/* <input className='input' type="email"
                            required
                            autoComplete="off"
                            placeholder="Email" /> */}

                        <input className='input' type="email" placeholder='Enter Email'
                            value={Email} onChange={handleTodoChange}
                        /><br />

                        {/* <a href="https://groups.google.com/g/clinical_ai_healthcare/" target='blank'><button class="button-26"><h2 className='btn-n'>Subscribe</h2></button></a> */}

                        <button className="button-26"> <h2 onClick={handleSubmition}>Subscribe</h2></button>
                    </div>
                    <div className="foot-box3 foot-box">
                    <br />
                    <a href="https://www.linkedin.com/jobs/search/?currentJobId=3769256946&f_C=100030811&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3769256946%2C3769270174" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '1.17em'}}>Careers</a>
                        <h3 className='bname'>Follows Us</h3>
                        <div className='f-icons'>
                            <a rel="noreferrer"
                                href="https://www.linkedin.com/company/clinical-ai-assistance"
                                target="_blank">
                                <div className='icon-div'>

                                    <FaLinkedin className="icons" />

                                </div>
                            </a>
                            <a rel="noreferrer"
                                href="https://twitter.com/_Clinical_AI_/"
                                target="_blank">
                                <div className='icon-div'>

                                    <FaTwitter className="icons" />

                                </div>
                            </a>
                            <a rel="noreferrer"
                                href="https://www.instagram.com/clinicalaiassistance/"
                                target="_blank">
                                <div className='icon-div'>

                                    <FaInstagram className="icons" />

                                </div>
                            </a>
                            <a rel="noreferrer"
                                href="https://www.facebook.com/ClinicalAIAssistance"
                                target="_blank">
                                <div className='icon-div'>

                                    <FaFacebook className="icons" />

                                </div>
                            </a>
                        </div>

                    </div>



                    <div className="foot-box4 foot-box">
                        <h3 className='bname'>Contact Us</h3>
                        <div className="cont-div">
                            <p className='bright'>
                                Clinical AI Assistance Pvt. Ltd. <br />
                                FIST, IIT Patna, Block 9, R-503 <br />
                                Patna, Bihar, 801106 India<br />
                                Email: info@clinicalaiassistance.com<br />
                                Mob: +91 9123979259
                            </p>
                        </div>

                    </div>
                    <div className="foot-box5 foot-box">
                        <h3 className='bname'>Supported By</h3>
                        <div className='microsoft spon'>
                            <img className="img" src=".\img\Microsoft.jpeg" alt="" />
                        </div>
                        <div className="fist spon">
                            <img src=".\img\fist2.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
