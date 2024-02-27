import React from 'react'
import styles from "./OnlineDr.module.css"
import { NavLink } from 'react-router-dom'

const data = [
    {
        name: "Dr. Minakshi Dhar, MBBS, MD, PGD",
        department: "Specialization: General Medicine",
        experience: "Experience: 15 years+",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Minakshi-Dhar.jpg",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
        vc: "Volunteering (Free consultation)",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar"
    },

    {
        name: "Dr. Pankaj Kumar, MBBS, MD",
        department: "Specialization: Psychiatry",
        experience: "Experience: 17 years+",
        hospital: "Avalability: S1: Sat 10.00 am-10.30 am, \n  S2: Sat 10.30 am-11.00 am, \n S3: Sun 10.00 am-10.30 am, \n S4: Sun 10.30 am-11.00 am",
        img: "./img/DrRakesh.jpeg",
        vc: "Volunteering (Free consultation)"
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },

    // {
    //     name: "Dr Swarnim",
    //     department: "Specialization: Paediatric",
    //     experience: "Experience: 5 years+",
    //     hospital: "Avalability: Sat 6pm-7pm",
    //     img: "./img/Sawarnin.jpeg",
    //     id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
    //     // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    // },


    {
        name: "Dr. Diwakar Singh, MBBS, MD",
        department: "Specialization: Paediatrician",
        experience: "Experience: 5 years+",
        hospital: "Avalability: S1: Sat 4 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 5.00 pm-5.30 pm, \n S4: Sun 5.30 pm-6.00 pm",
        img: "./img/Dr. Diwakar SIngh, MBBS, MD.jpeg",
        id: "https://www.medindia.net/patients/doctor_search/dr-diwakar-singh-indian-medicine-general-practitioner-family-physician-lakhisarai-bihar-81357-1.htm",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Mehfooz Alam, MBBS, DNB",
        department: "Specialization: Obstetrics and Gynaecology",
        experience: "Experience: 5 years+",
        hospital: "Avalability: S1: Sat 8 am-8.30 am, \n  S2: Sat 8.30 pm-9.00 am",
        img: "./img/Mehfooz.jpg",
        id: "https://www.linkedin.com/in/mahfooz-alam-a3811127b/?originalSubdomain=in",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Chandni Prakash, MBBS, MD",
        department: "Specialization: General Physician",
        experience: "Experience: 5 years+",
        hospital: "Avalability: S1: Sat 6 pm-6.30 pm, \n  S2: Sat 6.30 pm-7.00 pm, \n S3: Sun 6.00 pm-6.30 pm, \n S4: Sun 6.30 pm-7.00 pm",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
        img: "./img/dr chandni.jpg"
    },

    {
        name: "Dr. Tanmoy sarkar, BHMS, MD",
        department: "Specialization: General Physician.",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Sat 5 pm-5.30 pm, \n  S2: Sat 5.30 pm-6.00 pm",
        img: "./img/Dr Tanmoy.jpg",
        id: "https://www.linkedin.com/in/dr-tanmoy-sarkar-61061917b/",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Shobha Kant Pandey, MBBS",
        department: "Specialization: General Medicine",
        experience: "Experience: 4 years+",
        hospital: "Avalability: S1: Sat 4 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 5.00 pm-5.30 pm, \n S4: Sun 5.30 pm-6.00 pm",
        img: "./img/DrPandey.jpg",
        id: "https://sites.google.com/view/health-center-iit-patna/doctors#h.24n2z2koyslj",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Monalisa Murmu, BHMS",
        department: "Specialization: General Medicine",
        experience: "Experience: 2 years+",
        hospital: "Avalability: S1: Sat 6 pm-6.30 pm, \n  S2: Sat 6.30 pm-7.00 pm, \n S3: Sun 6.00 pm-6.30 pm, \n S4: Sun 6.30 pm-7.00 pm",
        img: "./img/Monalisa.jpg",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr Dewesh Kumar, BHMS, MD(Hom)",
        department: "Specialization: General Physician",
        experience: "Experience: 7 years+",
        hospital: "Avalability: S1: Tue 5 pm-5.30 pm, \n  S2: Sat 5.30 pm-6.00 pm, \n S3: Thur 5.00 pm-5.30 pm, \n S4: Sun 5.30 pm-6.00 pm",
        img: "./img/Dewesh.jpeg",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Mrinmoy, MBBS",
        department: "Specialization: General Medicine",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Sat 6 pm-6.30 pm, \n  S2: Sat 6.30 pm-7.00 pm, \n S3: Sun 6.00 pm-6.30 pm, \n S4: Sun 6.30 pm-7.00 pm",
        img: "./img/user2.png",
        vc: "Volunteering (Free consultation)"
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr Nilakshi sethia, BHMS",
        department: "Specialization: General Physician",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Mon 10 am-10.30 am, \n S2: Mon 10.30 am-11.00 am, S3: Tue 10 am-10.30 am, \n S4: Wed 10.30 am-11.00 am",
        img: "./img/DrNilakshi .jpg",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Krithartha, MBBS",
        department: "Specialization: Geriatric Medicine ",
        experience: "Experience: 3 years+",
        hospital: "Avalability: S1: Sun 6.00 pm-6.30 pm, \n S2: Sun 6.30 pm-7.00 pm",
        img: "./img/krithartha.jpg",
        // link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
]


const OnlineDr = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>AI-aided Online Doctor Consultation</h1>
            </div>
            <div className={styles.outerDr}>

                {data.map((elm) => (

                    <div className={styles.Drbox}>
                        <div className={styles.Drimg}>
                            <img className={styles.img} src={elm.img} alt="" />
                        </div>
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
                        <NavLink className={styles.drbtn} to="/appointmentform"><button className={styles.btn}><h2 className={styles.drbtnn}>BOOK</h2></button></NavLink>
                        {/* </div> */}
                    </div>

                )
                )}
            </div>
        </>
    )
}

export default OnlineDr
