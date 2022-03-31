import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState("Submit");
  // send form to my email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending...");
    
    
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder= "Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject Line" required/>
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
          {/* {message && <span>Thanks, I'll reply ASAP :)</span>} */}
        </form>
      </div>
    </div>
  );
}