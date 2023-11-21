import React from 'react';
import './works.css';
import portfolio1 from '../../assets/p1.webp';
import portfolio2 from '../../assets/port2.jpg';
import portfolio3 from '../../assets/p4.jpg';
import portfolio4 from '../../assets/port12.png';
// import portfolio4 from '../../assets/p7.webp';
import portfolio5 from '../../assets/p200.jpg';
import portfolio6 from '../../assets/p9.jpg';
// import portfolio3 from '../../assets/portfolio';


const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and </span>
        <div className='worksImgs'>
            <img src={portfolio1} alt='' className='worksImg' />
            <img src={portfolio2} alt='' className='worksImg' />
            <img src={portfolio3} alt='' className='worksImg' />
            <img src={portfolio4} alt='' className='worksImg' />
            <img src={portfolio5} alt='' className='worksImg' />
            <img src={portfolio6} alt='' className='worksImg' />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works
