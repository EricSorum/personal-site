import React from 'react';
import style from '../style/Contact.module.css';

function Contact() {
  return (
    <div className={style.contactDiv}>
      <h2 id="contact">Contact</h2>
      <br />
      <div>
        <span>Eric Sorum</span>
        <span>3527 11th Ave S</span>
        <span>Minneapolis, MN 55407</span>
        <span>(651) 399-6279</span>
        <a href="mailto:ejsorum@gmail.com" style={style.email}>
          ejsorum@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;