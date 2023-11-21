import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hire.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Kailas</span><br />Software Engineer</span>
            <p className='introPara'>I am a experienced Software Engineer specializing in building <br /> highly performant applications that solve real-world problems <br /> and provide users with an awesome experience.</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>

        <img src={bg} alt='Profile' className='bg' />
    </section>
  );
}

export default Intro;

