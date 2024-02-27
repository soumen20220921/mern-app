import { auth } from "../Firebase"
import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Header = () => {

  const [id, setId] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setId(user.emailVerified);
      }
      else setId("");
    });
  })


  const [openMenu, setOpenMenu] = useState(false);

  const toggleModal = () => {
    setOpenMenu(!openMenu);
  };
  // className={styles.header}
  // className={openMenu ? "header2" : "header"}
  return (
    <div className={openMenu ? "header2" : "header"} >

      <NavLink to="/"><img className={openMenu ? "logo2" : "logo"} src=".\img\logo dark updated.png" alt="" /></NavLink>


      {
        openMenu && (
          <button className="iconbtn3" onClick={toggleModal} ><RxCross1 className="icon" /></button>
        )
      }
      <div className="navlist">
        <ul >
          <li className={openMenu ? "li1" : "li"} >
            <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/"><p className="phome">Home</p></NavLink>
          </li>
          <li className={openMenu ? "li1" : "li"}>
            <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/vision"><p className="phome"
            >Why We Started</p></NavLink>
          </li>
          <li className={openMenu ? "li1" : "li"}>
            <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/SwaasthyaSathi"><p className="phome" >SwaasthyaSathi</p></NavLink>
          </li>
          <li className={openMenu ? "li1" : "li"}>
            <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/services"><p className="phome" >Services</p></NavLink>
          </li>
          <li className={openMenu ? "li1" : "li"}>
            <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/news"><p className="phome" >News</p  ></NavLink>
          </li>
          <li className={openMenu ? "li1" : "li"}>
            <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/teams"> <p className="phome"> Our Team</p></NavLink>
          </li>
          <li className={openMenu ? "li1" : "li"}>
            {id ? <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/Profile"><p className="phome" >Profile</p> </NavLink> : <NavLink className="navkink" onClick={() => setOpenMenu(false)} to="/signup"><p className="phome" >Get Started</p> </NavLink>}
          </li>
        </ul>
      </div>
      <button className={openMenu ? "iconbtn2" : "iconbtn1"} onClick={toggleModal} ><FaBars className="icon" /></button>
    </div>
  )
}



//  <RxCross1 className={styles.icon} /> 
export default Header
