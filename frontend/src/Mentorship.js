import React from 'react';
import styles from "./Mentorship.module.css";
import { NavLink } from 'react-router-dom';

const data = [
    {
        name: "Abhisek Tiwari",
        department: "Expertise: Researcher & Innovator, AI for Social Good, NLP, PMRF IIT Patna & Co-founder, Clinical AI Assistance Pvt. Ltd.",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Abhisek Tiwari.jpg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        vc: "Volunteering (Free consultation)",
        id: "https://www.linkedin.com/in/abhisekti/"
    },

    {
        name: "Sriparna Saha",
        department: "Expertise: Researcher,Associate Professor at Department of Computer Science and Engineering, Indian Institute of Technology",
        experience: "Experience: 15 years+",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/ss.jpg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://scholar.google.co.in/citations?user=Fj7jA_AAAAAJ&hl=en"
    },

    {
        name: "Mukul Kumar",
        department: "Expertise: Hackathon and Product Building || PMRF || Winner SIH-2022 || Climate Change -- Air quality -- Health",
        experience: "Experience: 6 years+",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Mukul.jpeg",
        id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        vc: "Volunteering (Free consultation)"
    },
    {
        name: "Anisha Saha",
        department: "Expertise: Data Science, Data Scientist at Micron Technology | CMI Data Science '22| Summer Intern at Legato Health Technologies",
        experience: "Experience: 5 years +",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Anisha Saha.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/anisha0398/",
        vc: "Volunteering (Free consultation)"

    },

    {
        name: "Chandan Kumar",
        department: "IOT, Privacy and Security, Google PhD Fellow@IIT Kharagpur",
        experience: "Experience: 3 years +",
        hospital: "Avalability: S1: Sun 4.00 pm-4.30 pm, \n  S2: Sun 4.30 pm-5.00 pm",
        img: "./img/Chandan.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/cchaudhary278/"
    },

]

const data1 = [
    {
        name: "Dr. Minakshi Dhar, MBBS, MD",
        department: "Expertise: General Medicine",
        experience: "Experience: 15 years+",
        hospital: "Avalability: S1: Sat 3.00 pm-3.30 pm, \n  S2: Sat 3.30 pm-4.00 pm",
        img: "./img/Minakshi-Dhar.jpg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar",
        vc: "Volunteering (Free consultation)"

    },

    {
        name: "Dr. Pankaj Kumar, MBBS, MD",
        department: "Specialization: Psychiatry",
        experience: "Experience: 17 years+",
        hospital: "Avalability: S1: Sun 3.00 pm-3.30 pm, \n  S2: Sat 3.30 pm-4.00 pm",
        img: "./img/DrRakesh.jpeg",
        vc: "Volunteering (Free consultation)"
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },

    {
        name: "Satyam, MBBS Student, AIIMS Delhi",
        department: "Expertise: General Medicine, NEET AIR 73, 2020",
        experience: "Experience: 2 years+",
        hospital: "Avalability: S1: Sun 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm",
        img: "./img/Satyam.jpeg",
        vc: "Volunteering (Free consultation)"
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },

    {
        name: "Dr Chandni Prakash, MBBS, MD",
        department: "Expertise: General Physician",
        experience: "Experience: 5 years+",
        hospital: "Avalability: S1: Sun 7 pm-7.30 pm, \n  S2: Sat 7.30 pm-8.00 pm",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
        img: "./img/dr chandni.jpg"
    },

    {
        name: "Shivangi Singh, MBBS Student",
        department: "Expertise: General Medicine",
        experience: "Experience: 2 years+",
        hospital: "Avalability: S1: Sun 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm",
        img: "./img/Shivangi.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },

    {
        name: "Swati Srijaya, PhD Student, AIIMS Delhi",
        department: "Expertise: Structural & Molecular Biology ",
        experience: "Experience: 2 years+",
        hospital: "Avalability: S1: Sun 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm",
        img: "./img/Swati.jpeg",
        id: "https://www.linkedin.com/in/swati-srijaya-samantaray/",
    },


]

const data3 = [
    {
        name: "Indrajit Pal, Data Scientist @Noodle.ai",
        department: "Expertise: Machine Learning, and Artificial Intelligence (Industry) ",
        experience: "Experience: 5 years +",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Indrajit Pal.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://indropal.github.io/",

    },
    {
        name: "Aryan Sahoo, B.tech, CSE @IIT Patna",
        department: "Expertise: Research, Coding, B.tech, CSE @IIT Patna",
        experience: "Experience: 2 years+",
        hospital: "Avalability: S1: Sat 6.00 pm-6.30 pm, \n  S2: Sat 6.30 pm-7.00 pm, \n S3: Sun 7.00 pm-7.30 pm, \n S4: Sun 7.30 pm-8.00 pm",
        img: "./img/Aryan Sahoo.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/aryan-darkrunner/"
    },

    {
        name: "Satyam Sahoo, B.tech, CSE @IIT Patna",
        department: "Expertise: Computer Vision, ML, and IOT",
        experience: "Experience: 2 years+",
        hospital: "Avalability: S1: Sat 6.00 pm-6.30 pm, \n  S2: Sat 6.30 pm-7.00 pm, \n S3: Sun 7.00 pm-7.30 pm, \n S4: Sun 7.30 pm-8.00 pm",
        img: "./img/satyam sahoo.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/satyam-sahoo-7b9786248/"
    },

    {
        name: "Varad Paswar, M.Tech@IIT Patna",
        department: "Expertise: Mechatronics & Data Science (Industry)",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Sat 7.00 pm-7.30 pm, \n  S2: Sat 7.30 pm-8.00 pm, \n S3: Sun 7.00 pm-7.30 pm, \n S4: Sun 7.30 pm-8.00 pm",
        img: "./img/varad Paswar.jpeg",
        id: "https://www.linkedin.com/in/varad-paraswar/",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },
    {
        name: "Muhammed Sinan, B.tech, CSE @IIT Patna",
        department: "Expertise: Conversastional AI & Deep Learning",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Sat 3.00 pm-3.30 pm, \n  S2: Sat 3.30 pm-4.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Muhammed Sinan C K.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/muhammed-sinan-c-k-a65301116/"
    },
    {
        name: "Sourya Dipta Das, Research Engineer at SHL India",
        department: "Expertise: Data Science & Machine Learning",
        experience: "Experience: 5 years+ (Industry)",
        hospital: "Avalability: S1: Sat 7.00 pm-7.30 pm, \n  S2: Sat 7.30 pm-8.00 pm",
        img: "./img/Sourya Dipta Das.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/sourya-dipta-das-8b935911b/"
    },

]

const Mentorship = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Research Mentorship</h1>
            </div>
            <div className={styles.outerDr}>

                {data.map((elm) => (

                    <div className={styles.Drbox}>
                        <a href={elm.id} target='blank'>
                            <div className={styles.Drimg}>
                                <img className={styles.img} src={elm.img} alt="" />
                            </div>

                        </a>
                        
                        <h1>
                            {elm.name}
                        </h1>
                        <h1 className={styles.vc}>{elm.vc}</h1>
                        <div className={styles.Drdes}>
                            <p>
                                {elm.department}
                            </p>
                            {<p>
                                {elm.experience}
                            </p>}
                            <p>
                                {elm.hospital}
                            </p>
                        </div>
                        {/* <div className={styles.btndiv}> */}
                        <NavLink className={styles.drbtn} to="/mentorshipform" ><button className={styles.btn}><h2 className={styles.drbtnn}>BOOK</h2></button></NavLink>
                        {/* </div> */}
                    </div>

                )
                )}
            </div>

            {/* Clinical Mentorship */}



            <div className={styles.Drheader}>
                <h1>Development Mentorship</h1>
            </div>
            <div className={styles.outerDr}>

                {data3.map((elm) => (

                    <div className={styles.Drbox}>
                        <a href={elm.id} target='blank'>
                            <div className={styles.Drimg}>
                                <img className={styles.img} src={elm.img} alt="" />
                            </div>

                        </a>
                        <h1 className={styles.vc}>{elm.vc}</h1>
                        <h1>
                            {elm.name}
                        </h1>
                        <div className={styles.Drdes}>
                            <p>
                                {elm.department}
                            </p>
                            {<p>
                                {elm.experience}
                            </p>}
                            <p>
                                {elm.hospital}
                            </p>
                        </div>
                        {/* <div className={styles.btndiv}> */}
                        <NavLink className={styles.drbtn} to="/mentorshipform" ><button className={styles.btn}><h2 className={styles.drbtnn}>BOOK</h2></button></NavLink>
                        {/* </div> */}
                    </div>

                )
                )}
            </div>

            <div className={styles.Drheader}>
                <h1>Clinical Mentorship</h1>
            </div>
            <div className={styles.outerDr}>

                {data1.map((elm) => (

                    <div className={styles.Drbox}>
                        <a href={elm.id} target='blank'>
                            <div className={styles.Drimg}>
                                <img className={styles.img} src={elm.img} alt="" />
                            </div>

                        </a>
                        <h1>
                            {elm.name}
                            <h1 className={styles.vc}>{elm.vc}</h1>
                        </h1>
                        <div className={styles.Drdes}>
                            <p>
                                {elm.department}
                            </p>
                            <p>
                                {elm.experience}
                            </p>
                            <p>
                                {elm.hospital}
                            </p>
                        </div>
                        {/* <div className={styles.btndiv}> */}
                        <NavLink className={styles.drbtn} to="/mentorshipform" ><button className={styles.btn}><h2 className={styles.drbtnn}>BOOK</h2></button></NavLink>
                        {/* </div> */}
                    </div>

                )
                )}
            </div>

        </>
    )
}

export default Mentorship
