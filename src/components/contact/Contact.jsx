import { useState } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';

const Result =()=>{
  return(
    <p>Thank you for message! I will contact you soon. :)</p>
  )
}

export default function Contact() {
  const [result, showResult] = useState(false);
  // send form to my email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adruyct', 'template_mpybllt', e.target, 'p9dWf-Vno5Ws6zVaV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <form onSubmit={sendEmail}>
          <input type="text" placeholder= "Full Name" name="fullname" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Subject Line" name="subject" required/>
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          <div>
            {result ? <Result/> : null}</div>
        
        </form>
      </div>
    </div>
  );
}