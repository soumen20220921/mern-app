import React from 'react'
import styles from "./News.module.css"

const data = [
    {
        img: "./img/news1.jpeg",
        content1: "IIT-Patna scholars developing virtual doctor for early diagnosis of diseases",
        content2: `In a novel and path-breaking initiative, IIT Patna is busy developing a ‘virtual doctor’ to assist medical practitioners and facilitate early diagnosis of the disease.
        The ‘virtual doctor’ when fully developed, will serve as a disease diagnostic assistant (diagnosis chatbot), conducting a thorough symptom investigation and preparing a diagnostic report for doctors`,
        link: "https://timesofindia.indiatimes.com/city/patna/iit-patna-scholars-developing-virtual-doctor-for-early-diagnosis-of-diseases/articleshow/94141545.cms",
    },
    {
        img: "./img/news2.jpeg",
        content1: "IIT पटना बना रहा वर्चुअल डॉक्टर, एप की मदद से होगा इलाज, जानें क्या होगा खास",
        content2: "पटना. अब जल्द ही मरीजों के इलाज में वर्चुअल डॉक्टर भी अहम भूमिका निभायेंगे. ये वर्चुअल डॉक्टर कोई दूर बैठा इंसान नहीं बल्कि आर्टिफिशियल इंटेलिजेंस तकनीक का इस्तेमाल कर बनाया गया एंड्रॉयड एप होगा. आने वाले दिनों में यह मोबाइल एप इलाज के तरीकों में बड़ा बदलाव लेकर आ सकता है. इस प्रोजेक्ट पर आइआइटी, पटना के शोधार्थी तेजी से काम कर रहे हैं. इस काम में उनकी मदद आइआइटी, मुंबई और एम्स, ऋषिकेश के विशेषज्ञ कर रहे हैं",
        link: "https://www.prabhatkhabar.com/state/bihar/patna/iit-patna-is-making-virtual-doctor-for-telemedicine-facility-will-be-easy-ans",
    },
    {
        img: "./img/CDAC Meeting.svg",
        content1: "Inter IIT Tech Meet 12.0 among 20 IITs and received a bronze medal 🥉.",
        content2: "The top three ranking teams in the PS belong to IIT Bombay (Score 136), IIT Madras (Score 134), and IIT Patna (Score 133). Congratulations to the whole team for the success 🎉✨!",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7147284787328606208",
    }
]
const News = () => {
    return (
        <div className={styles.outernews}>

            {data.map((elm) => (


                <div className={styles.newscontent}>

                    <img className={styles.img} src={elm.img} alt="" />
                    <div className={styles.about}>
                        <p className={styles.p}>{elm.content1}</p>
                    </div>
                    <div className={styles.about}>
                        <p className={styles.p}>{elm.content2} <a href={elm.link} target='blank'>Read More</a></p>
                    </div>
                </div>

            )
            )}
            {/* for yt video */}
            <div className={styles.newscontent}>

                <iframe className={styles.img} src="https://www.youtube.com/embed/BfPw-NfddPI?si=FjcWN6-Q4uzdvIIr&amp;start=574" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.about}>
                    <p className={styles.p}>IIT-Patna scholars developing virtual doctor for early diagnosis of diseases</p>
                </div>
                <div className={styles.about}>
                    <p className={styles.p}>Sriparna Saha, one of the eight leading women scientists in the area of AI in India and an Associate Editor of IEEE, is an admiral example of women empowerment. Currently working as an Associate professor at IIT Patna, she has been an author of more than 290 papers. She is the recipient of Google India Women in Engineering Award, 2008.   <a href="https://www.youtube.com/embed/BfPw-NfddPI?si=FjcWN6-Q4uzdvIIr&amp;start=574">Read More</a></p>
                </div>
            </div>

        </div>
    )
}

export default News
