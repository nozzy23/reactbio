import React from 'react';
import {Link} from 'react-router-dom';


const ContactPage=()=>{
    return <div> <form id="contact-form" class="form" action="#" method="POST" role="form">
        <label class="form-label" for="name">Your Name</label>
        <input type="text" class="form-control" id="name"                           
        <label class="form-label" for="email">Your Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required>                         
    <div class="form-group">
        <label class="form-label" for="subject">Subject</label>
        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3">                           
    <div class="form-group">
        <label class="form-label" for="message">Message</label>
        <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Message..." tabindex="4" required></textarea>                                 
    </div>
    <div class="text-center">
        <button type="submit" class="btn btn-start-order">Send Message</button>
    </div>
</form>
</div>
};


export default ContactPage;