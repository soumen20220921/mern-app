import React from 'react'

import AppointmentForm from './AppointmentForm';
import axios from "axios";


const Payment = () => {


  const checkoutHandler = async (amount) => {
    console.log(amount);
    const { data: { key } } = await axios.get("http://www.localhost:4000/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/checkout", {
      amount
    })
    console.log(order, key);
    // const options = {
    //     key,
    //     amount: order.amount,
    //     currency: "INR",
    //     name: "Rachit",
    //     description: "Razor ",
    //     image: "",
    //     order_id: order.id,
    //     callback_url: "http://localhost:4000/paymentverification",
    //     prefill: {
    //         name: "Gaurav Kumar",
    //         email: "gaurav.kumar@example.com",
    //         contact: "9999999999"
    //     },
    //     handler: function (response) {
    //         alert(response.razorpay_payment_id);
    //         alert(response.razorpay_order_id);
    //         alert(response.razorpay_signature);
    //       },
    //     notes: {
    //         "address": "Razorpay Corporate Office"
    //     },
    //     theme: {
    //         "color": "#121212"
    //     }
    // };
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Rachit",
      description: "Razor ",
      image: "",
      order_id: order.id,
      callback_url: "http://localhost:4000/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      handler: function (response) {
        // Display Razorpay payment details
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        // Send the payment details to the server
        const paymentDetails = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        // Make a POST request to your /paymentverification endpoint
        fetch("http://localhost:4000/paymentverification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentDetails),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Server response:", data);
          })
          .catch((error) => {
            console.error("Error sending payment details to server:", error);
          });
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  }

  return (




    <AppointmentForm amount={180} checkoutHandler={checkoutHandler} />



  )
}

export default Payment