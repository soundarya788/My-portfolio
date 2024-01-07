import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; 

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6odavov', 'template_6xgyrtl', e.target, 'Kq9B8xwp2smYoc17J')
      .then((result) => {
        console.log(result.text);
        alert('Message submitted successfully!'); 
      }, (error) => {
        console.log(error.text);
        alert('Error submitting message. Please try again.'); 
      });
  };

  return (
    <section id="contact" className="contact-section" style={{ marginTop: '200px',marginLeft:'20px' }}>
      <div className="contact-container">
        <h1>Message Me</h1>
        <form onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" rows="4" required></textarea>
          </div>

          
          <input type="hidden" name="to_email" value="soundaryaa040@gmail.com" />

      
          <input type="hidden" name="phone_number" value="+91 9444151900" />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Email: soundaryaa040@gmail.com</p>
          <p>Phone: +91 9444151900</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
