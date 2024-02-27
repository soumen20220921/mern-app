import React from 'react'
import styles from "./Teams.module.css"
import { FaTwitter, FaChrome, FaLinkedin } from "react-icons/fa";

const data = [
    {
        name: "Abhisek Tiwari",
        img: "./img/Abhisek Tiwari.jpg",
        id: "https://abhisektiwari.github.io/",
        lkin: "https://www.linkedin.com/in/abhisekti/",
        twit: "https://twitter.com/abhisekti"
    },

    {
        name: "Sarbajeet Tiwari",
        img: "./img/Sarbjeet.png",
        id: "https://www.medaicare.in/teams",
        lkin: "https://www.medaicare.in/teams",
        twit: "https://www.medaicare.in/teams",
    },

]

const data1 = [
    {
        name: "Dr. Sriparna Saha",
        img: "./img/ss.jpg",
        id: "https://www.iitp.ac.in/~sriparna/",
        lkin: "https://www.linkedin.com/in/sriparna-saha-1a1338161/?originalSubdomain=in",
        twit: "https://www.iitp.ac.in/~sriparna/"
    },
    {
        name: "Dr. Pushpak Bhattacharyya",
        img: "./img/Pushpak Bhattacharyya.jpeg",
        id: "https://www.cse.iitb.ac.in/~pb/",
        lkin: "https://in.linkedin.com/in/pushpakbh",
        twit: "https://www.cse.iitb.ac.in/~pb/",
    },
    {
        name: "Dr. Praveen Kumar",
        img: "./img/DrPraveen.jpg",
        id: "https://fistiitp.com/",
        lkin: "https://www.linkedin.com/in/fist-tbi-iit-patna-7227b9255/",
        twit: "https://fistiitp.com/",
    },

]

const data2 = [
    {
        name: "Dr. Minakshi",
        img: "./img/Minakshi-Dhar.jpg",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar",
        lkin: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
        twit: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
    },
    {
        name: "Dr Sai Ruthvik Edara",
        img: "./img/Ruthvik.jpeg",
        id: "https://www.linkedin.com/in/ruthvikedara/",
        lkin: "https://www.linkedin.com/in/ruthvikedara/",
        twit: "https://www.linkedin.com/in/ruthvikedara/",
    },

    {
        name: "Dr Pankaj",
        img: "./img/DrRakesh.jpeg",
        id: "https://www.apollospectra.com/patna/agam-kuan/doctors/dr-pankaj-kumar",
        lkin: "https://www.apollospectra.com/patna/agam-kuan/doctors/dr-pankaj-kumar",
        twit: "https://www.apollospectra.com/patna/agam-kuan/doctors/dr-pankaj-kumar",
    },
    // {
    //     name: "Dr. Swarnim",
    //     img: "./img/Sawarnin.jpeg",
    //     id: "https://www.researchgate.net/profile/Minakshi-Dhar",
    //     lkin: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
    //     twit: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
    // },

    {
        name: "Sarbajeet Tiwari",
        img: "./img/Sarbjeet.png",
        id: "https://www.linkedin.com/in/sarbjeet-tiwari-b42977268/",
        lkin: "https://www.linkedin.com/in/sarbjeet-tiwari-b42977268/",
        twit: "https://www.linkedin.com/in/sarbjeet-tiwari-b42977268/",
    },

    // {
    //     name: "Dr. Mrinmoy",
    //     img: "./img/mrinmoy.jpeg",
    //     id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
    //     lkin: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
    //     twit: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
    // },


]
const data3 = [
    {
        name: "Abhisek Tiwari",
        img: "./img/Abhisek Tiwari.jpg",
        id: "https://abhisektiwari.github.io/",
        lkin: "https://www.linkedin.com/in/abhisekti/",
        twit: "https://twitter.com/abhisekti"
    },
    {
        name: "Soumen Singh",
        img: "./img/Soumen Singh.jpeg",
        id: "https://www.linkedin.com/in/soumen-singh-891844208/?originalSubdomain=in",
        lkin: "https://www.linkedin.com/in/soumen-singh-891844208/?originalSubdomain=in",
        twit: "https://www.linkedin.com/in/soumen-singh-891844208/?originalSubdomain=in",
    },
    {
        name: "Ujjwal Kumar",
        img: "./img/Ujjwal.jpeg",
        id: "https://www.linkedin.com/in/masteryodaa",
        lkin: "https://www.linkedin.com/in/masteryodaa",
        twit: "https://x.com/masteryoda_69",
    },

    {
        name: "Rachit sharma",
        img: "./img/Rachit.jpg",
        id: "https://www.linkedin.com/in/kanik-pathak-542322259/",
        lkin: "https://www.linkedin.com/in/kanik-pathak-542322259/",
        twit: "https://www.linkedin.com/in/kanik-pathak-542322259/",
    },
    {
        name: "Kanik Pathak",
        img: "./img/Kanik.jpg",
        id: "https://github.com/Rachit2323",
        lkin: "https://www.linkedin.com/in/rachit-sharma-212931183",
        twit: "https://www.linkedin.com/in/rachit-sharma-212931183",
    },
    {
        name: "Varad Paswar",
        img: "./img/varad Paswar.jpeg",
        id: "https://www.researchgate.net/",
        lkin: "https://www.linkedin.com/",
        twit: "https://www.linkedin.com/",
    },


]

const sandm = [

    {
        name: "Robin Singh",
        img: "./img/robin.jpg",
        id: "https://instagram.com/robin__singh04?igshid=NGVhN2U2NjQ0Yg==",
        lkin: "https://www.linkedin.com/in/robin-singh-46b703208/",
        twit: "https://instagram.com/robin__singh04?igshid=NGVhN2U2NjQ0Yg=="
    },

    {
        name: "Kripa Tiwari",
        img: "./img/Kripa.jpeg",
        id: "https://www.medaicare.in/teams",
        lkin: "https://www.medaicare.in/teams",
        twit: "https://www.medaicare.in/teams"
    },

    {
        name: "Ankna Litoriya",
        img: "./img/Ankana.jpg",
        id: "https://www.linkedin.com/in/ankna",
        lkin: "https://www.linkedin.com/in/ankna",
        twit: "https://www.linkedin.com/in/ankna",
    },
    {
        name: "Yash Kumar",
        img: "./img/Yash.jpg",
        id: "https://www.linkedin.com/in/yash-kumar-9919a7286/",
        lkin: "https://www.linkedin.com/in/yash-kumar-9919a7286/",
        twit: "https://www.linkedin.com/in/yash-kumar-9919a7286/",
    },
    {
        name: "Ankita Priya",
        img: "./img/Ankita.jpg",
        id: "https://www.linkedin.com/in/ankita-priya-946923228",
        lkin: "https://www.linkedin.com/in/ankita-priya-946923228",
        twit: "https://www.linkedin.com/in/ankita-priya-946923228",
    },
]
const data_r = [
    {
        name: "Abhisek Tiwari",
        img: "./img/Abhisek Tiwari.jpg",
        id: "https://abhisektiwari.github.io/",
        lkin: "https://www.linkedin.com/in/abhisekti/",
        twit: "https://twitter.com/abhisekti"
    },

    {
        name: "Aman Bhansali",
        img: "./img/Aman.jpg",
        id: "https://aman-095.github.io/",
        lkin: "https://www.linkedin.com/in/aman-bhansali-b4aa26228",
        twit: "https://aman-095.github.io/"
    },

    {
        name: "Yuvraj Singh",
        img: "./img/Yuvraj.jpg",
        id: "https://yuvraj-singh-portfoilio.onrender.com",
        lkin: "https://www.linkedin.com/in/yuvraj-singh-95b203289/",
        twit: "https://www.linkedin.com/in/yuvraj-singh-95b203289/",
    },

    {
        name: "Aryan Sahoo",
        img: "./img/Aryan Sahoo.jpeg",
        id: "https://www.linkedin.com/in/aryan-darkrunner/?originalSubdomain=in",
        lkin: "https://www.linkedin.com/in/aryan-darkrunner/?originalSubdomain=in",
        twit: "https://twitter.com",
    },

    {
        name: "Dr. Sriparna Saha",
        img: "./img/ss.jpg",
        id: "https://www.iitp.ac.in/~sriparna/",
        lkin: "https://www.linkedin.com/in/sriparna-saha-1a1338161/?originalSubdomain=in",
        twit: "https://www.iitp.ac.in/~sriparna/"
    },

    {
        name: "Anisha Saha",
        department: "Expertise: Data Science, Data Scientist at Micron Technology | CMI Data Science '22| Summer Intern at Legato Health Technologies",
        experience: "Experience: 5 years +",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n  S2: Sat 4.30 pm-5.00 pm, \n S3: Sun 4.00 pm-4.30 pm, \n S4: Sun 4.30 pm-5.00 pm",
        img: "./img/Anisha Saha.jpeg",
        // link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.linkedin.com/in/anisha0398/"
    },

]
const Teams = () => {
    return (
        <>

            <div className={styles.headertm}>
                <div className={styles.Drheader}>
                    <h1>Founders</h1>
                </div>
                <div className={styles.headertm}>

                    {data.map((elm) => (

                        <div className={styles.menber}>
                            <a href={elm.id}><img className={styles.img} src={elm.img} alt="" /></a>
                            <div className={styles.name}>{elm.name}</div>
                            <div className={styles.socialicons}>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.id}
                                        target="_blank">
                                        <FaChrome className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={
                                            elm.twit
                                        }
                                        target="_blank">
                                        <FaTwitter className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.lkin}
                                        target="_blank">
                                        <FaLinkedin className={styles.icons} />
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}


                </div>

                {/* 2nd row */}
                <div className={styles.Drheader}>
                    <h1>Advisory Team</h1>
                </div>
                <div className={styles.headertm}>

                    {data1.map((elm) => (

                        <div className={styles.menber}>
                            <a href={elm.id}><img className={styles.img} src={elm.img} alt="" /></a>
                            <div className={styles.name}>{elm.name}</div>
                            <div className={styles.socialicons}>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.id}
                                        target="_blank">
                                        <FaChrome className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={
                                            elm.twit
                                        }
                                        target="_blank">
                                        <FaTwitter className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.lkin}
                                        target="_blank">
                                        <FaLinkedin className={styles.icons} />
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}


                </div>
                {/* 3rd row */}
                <div className={styles.Drheader}>
                    <h1>Research Team</h1>
                </div>
                <div className={styles.headertm}>

                    {data_r.map((elm) => (

                        <div className={styles.menber}>
                            <a href={elm.id}><img className={styles.img} src={elm.img} alt="" /></a>
                            <div className={styles.name}>{elm.name}</div>
                            <div className={styles.socialicons}>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.id}
                                        target="_blank">
                                        <FaChrome className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={
                                            elm.twit
                                        }
                                        target="_blank">
                                        <FaTwitter className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.lkin}
                                        target="_blank">
                                        <FaLinkedin className={styles.icons} />
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}


                </div>
                {/* 4th row */}
                <div className={styles.Drheader}>
                    <h1>Clinical Team</h1>
                </div>
                <div className={styles.headertm}>

                    {data2.map((elm) => (

                        <div className={styles.menber}>
                            <a href={elm.id}><img className={styles.img} src={elm.img} alt="" /></a>
                            <div className={styles.name}>{elm.name}</div>
                            <div className={styles.socialicons}>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.id}
                                        target="_blank">
                                        <FaChrome className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={
                                            elm.twit
                                        }
                                        target="_blank">
                                        <FaTwitter className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.lkin}
                                        target="_blank">
                                        <FaLinkedin className={styles.icons} />
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}


                </div>
                {/* 5th row */}
                <div className={styles.Drheader}>
                    <h1>Engineering Team</h1>
                </div>
                <div className={styles.headertm}>

                    {data3.map((elm) => (

                        <div className={styles.menber}>

                            <a href={elm.id}><img className={styles.img} src={elm.img} alt="" /></a>
                            <div className={styles.name}>{elm.name}</div>
                            <div className={styles.socialicons}>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.id}
                                        target="_blank">
                                        <FaChrome className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={
                                            elm.twit
                                        }
                                        target="_blank">
                                        <FaTwitter className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.lkin}
                                        target="_blank">
                                        <FaLinkedin className={styles.icons} />
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}


                </div>
                {/* 6th row */}
                <div className={styles.Drheader}>
                    <h1>Sales & Marketing Team</h1>
                </div>
                <div className={styles.headertm}>

                    {sandm.map((elm) => (

                        <div className={styles.menber}>

                            <a href={elm.id}><img className={styles.img} src={elm.img} alt="" /></a>
                            <div className={styles.name}>{elm.name}</div>
                            <div className={styles.socialicons}>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.id}
                                        target="_blank">
                                        <FaChrome className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={
                                            elm.twit
                                        }
                                        target="_blank">
                                        <FaTwitter className={styles.icons} />
                                    </a>
                                </div>
                                <div className={styles.icondiv}>
                                    <a rel="noreferrer"
                                        href={elm.lkin}
                                        target="_blank">
                                        <FaLinkedin className={styles.icons} />
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}


                </div>
                {/* 7th row */}
            </div>
        </>
    )
}

export default Teams
