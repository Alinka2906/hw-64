import React from 'react';
import './Contacts.css';


const Contacts = () => {
  const contactsUrl = 'http://rmsibiri.ru/wp-content/uploads/2017/09/contact.jpg';
  return (
    <div>
      <div className="contacts">
        <h5>Online diary</h5>
        <div className="contact">
          <div className="info contact-text">
            <ul>
              <li><strong>E-mail:</strong> 418420a@gmail.com </li>
              <li><strong>Phone:</strong> +996 312 597762</li>
              <li><strong>WhatsApp:</strong> +996 704909950</li>
              <li> <strong>Address:</strong> Bishkek city, Bakaeva street, 180/4</li>
            </ul>
          </div>
          <div className="info contact-image">
            <img className="aboutImage" src={contactsUrl}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;