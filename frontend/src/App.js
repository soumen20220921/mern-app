import Home from './Home';
import Header from "./components/Header";
import Footer from './components/Footer'
import Services from "./Services"
import Vision from './Vision';
import OnlineDr from './OnlineDr';
import Dataset from './Dataset';
import Framework from './Framework';
import Mentorship from './Mentorship';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SwaasthyaSathi from './SwaasthyaSathi';
import News from './News';
import Teams from './Teams';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile2';
import TC from "./TC";
import Form from "./AppointmentForm";
import MentorshipForm from "./MentorshipForm";
import DatasetBookingForm from "./DatasetBookingForm";
import FrameworkBookingForm from "./FrameworkBookingForm";
import DemoBookingForm from "./DemoBookingForm";
import ResetPassword from './ResetPassword';
import Product from './Product'
// import Protected from './Protected';
import { useState, useEffect } from 'react';
import { auth } from './Firebase';
import Payment from './Payment';
import Payment1 from './Payment1';
function App() {

  const [key, setKey] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setKey(user.uid);
        console.log(user.uid);
      } else {
        setKey(null); // or whatever default value you want when the user is not logged in
      }
    });

    // Cleanup the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/SwaasthyaSathi" element={<SwaasthyaSathi />} />
          <Route path="/services" element={<Services />} />
          <Route path="/onlinedr" element={<OnlineDr />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path='/news' element={<News />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Profile' element={key ? <Profile /> : <Login />} />
          <Route path='/TC' element={<TC />} />
          <Route path='/appointmentform' element={key ? <Payment /> : <Login />} />
          <Route path='/mentorshipform' element={key ? <Payment1 /> : <Login />} />
          <Route path='/DatasetBookingForm' element={key ? <DatasetBookingForm /> : <Login />} />
          <Route path='/FrameworkBookingForm' element={key ? <FrameworkBookingForm /> : <Login />} />
          <Route path='/DemoBookingForm' element={key ? <DemoBookingForm /> : <Login />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/products' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
