import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import About from '../components/About/About'
import ServicesList from '../components/Services/ServicesList'


const Home = () => {
  return <>
  
  {/*hero section*/}
  <section className='hero_section pt-[60px] 2xl:h-[800px]'>
    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

      {/**====== hero content===== */}
      <div>
        <div className='lg:w-[570px]'>
          <h2 className='text-[360] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
          Nurturing well-being, guiding vibrant, healthy lives
          </h2>

          <p className='text_para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil, non necessitatibus molestiae recusandae, ipsam ab totam neque voluptas facere nam iusto autem doloremque repellendus debitis similique dignissimos illo rem.
          </p>

          <button className='btn'>Add an Appointment</button>
        </div>

        {/**==== hero counter==== */}

        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              30+
            </h2>
            <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
            <p className='text_para'>Years of Experience</p>
          </div>

          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              15+
            </h2>
            <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
            <p className='text_para'>clinic location</p>
          </div>

          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              100%
            </h2>
            <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
            <p className='text_para'>Patient Satisfaction</p>
          </div>

        </div>

      </div>
      {/**====== hero content===== */}


    <div className='flex gap-[30px] justify-end'>
      <div>
        <img className = 'w-full' src={heroImg01} alt="" />
      </div>
      <div className='mt-[30px]'>
        <img src={heroImg02} alt=""  className='w-full mb-[30px]'/>
        <img src={heroImg03} alt=""  className='w-full mb-[30px]'/>
      </div>
    </div>

      </div>
    </div>
  
  </section>
   {/**=============hero section end */}

  <section>
    <div className="container">
      <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-clip'>
          Providing the quality health service
        </h2>

        <p className="text_para text-center">
            World-clas care for everyone. Our health system offers unmatched, expert health care.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>


        <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center '>
              <img src={icon01} alt="" />
            </div>
          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Find a Doctor
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[700] text-center'>
                World- class care for everyone. Our health system offers unmatched, expert health care. from the lab to the clinic.
            </p>

            <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
            </div>
            
              
        </div>


        <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center '>
              <img src={icon02} alt="" />
            </div>
          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Find a Location
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[700] text-center'>
                World- class care for everyone. Our health system offers unmatched, expert health care. from the lab to the clinic.
            </p>

            <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
            </div>
            
              
        </div>

        <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center '>
              <img src={icon03} alt="" />
            </div>
          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Book an Appointment
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[700] text-center'>
                World- class care for everyone. Our health system offers unmatched, expert health care. from the lab to the clinic.
            </p>

            <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 '/>
            </Link>
            </div>
            
              
        </div>

      </div>

    </div>
  </section>

  <About/>

  {/**======== Service section=========== */}
  <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Our medical services</h2>

              <p className="text_para text-center">
                World cklass care for everyone. Our health System offers unmatched, expert health care.
              </p>
        </div>

        <ServicesList />
      </div>
  </section>
  </>
}

export default Home;