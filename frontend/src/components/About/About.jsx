import React from 'react'
import aboutCardImg from "../../assets/images/about-card.png"
import {Link} from 'react-router-dom'

const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/**=========about img======== */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutCardImg} alt="" />
            </div>
             {/**================ about content============= */}
        <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'> 
            Proud to be one nations best
            </h2>
            <p className='tetx_pata'> For 40 years in a row, world report has organized us as one of best hospital and #1 in texas.</p>

            <p className='text_para'>Our best is something we strive for each day, caring for our patients not looking  at what we accomplished but towards what we can do tomorrow</p>

            <Link to='/'>
                <button className='btn'>
                    Learn More
                </button>
            </Link>
        </div>
        </div>

       
    </div>
  </section>
}

export default About