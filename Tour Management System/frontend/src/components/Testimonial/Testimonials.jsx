import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
  
    ]
  
  }

  return ( <>
    <Slider {...settings}>
     
      <div className="testimonial py-4 px-3 ">
        <p>
        "My trip to Italy was magical, thanks to Travel World. The custom itinerary was perfect, and the tour guides were incredibly knowledgeable and friendly. Can't wait for my next adventure with them!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className='w-25 h-25 rounded-2' alt='not found' />
          <div>
            <h6 className="mb-0 mt-3 ">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>


      <div className="testimonial py-4 px-3 ">
        <p>
        "My experience with Travel World in Japan was beyond expectations.The itinerary was flawless, and the local insights added immense value. Excited to plan my next journey with them!"
        dedication to customer satisfaction awesome!. 
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className='w-25 h-25 rounded-2' alt=' not found' />
          <div>
            <h6 className="mb-0 mt-3 ">Rutuja Mashere</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>


      <div className="testimonial py-4 px-3 ">
        <p>
        "Traveling with Travel World to Canada was seamless and enriching. Their attention to detail and personalized service made it a memorable family vacation. Looking forward to more adventures!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className='w-25 h-25 rounded-2' alt=' not found' />
          <div>
            <h6 className="mb-0 mt-3 ">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      
    </Slider>
  </>

  )
}

export default Testimonials


