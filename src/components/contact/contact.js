import React from 'react';
import './contact.css';
import microsoft from '../../assets/mc1.png';
import google from '../../assets/googl1.jpg';
import walmart from '../../assets/wlmt1.jpg';
import amazon from '../../assets/amazon3.png';
import LinkedInIcon from '../../assets/linkedinIcon.jpg';
import FacebookIcon from '../../assets/fbb.jpg';
import TwitterIcon from '../../assets/twitterIcon.jpg';
import InstaIcon from '../../assets/instagramIcon.jpg';


const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with the diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={microsoft} alt='microsoft' className='clientImg'/>
                <img src={google} alt='google' className='clientImg'/>
                <img src={walmart} alt='walmart' className='clientImg'/>
                <img src={amazon} alt='amazon' className='clientImg'/>

            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={LinkedInIcon} alt='LinkedInIcon' className='link'/>
                    <img src={InstaIcon} alt='InstaIcon' className='link'/>
                    <img src={TwitterIcon} alt='TwitterIcon' className='link'/>
                    <img src={FacebookIcon} alt='FacebookIcon' className='link'/>

                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
