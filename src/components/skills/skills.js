import React from 'react';
import './skills.css';
import webDesign from '../../assets/website.png';
import uiuxDesign from '../../assets/uiux1.png';
import appDesign from '../../assets/appdesign.webp';


const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>I am a skilled and passionate software developer with experience in creating visually appealing user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, Kotlin, Python, as well as design software such as Adobe Photoshop and Illustrator.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={uiuxDesign} alt='uiuxDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is demo content.....</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={webDesign} alt='webDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>This is demo content.....</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={appDesign} alt='appDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>This is a demo content.....</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills