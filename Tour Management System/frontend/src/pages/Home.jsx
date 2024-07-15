import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import world from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured_Tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return (
    <>
      {/*=================== 1) Hero Section Started With search functanality ============ */}
      <section>
        <Container>
          <Row>

            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Know Before You Go 🤗'} />
                  <img src={world} alt="not Found 😥" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight"> memories</span> </h1>
                <p>From exotic beaches to majestic mountains, our tours offer something for every traveler. Book now and embark on a journey filled with discovery and excitement. Your next great adventure is just a click away.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=" not Found 😥" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4 ">
                <video src={heroVideo} alt="Video not Found 😥" controls />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5 ">
                <img src={heroImg02} alt=" not Found 😥" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>

      </section>
      {/*=================== Hero Section Ended ============ */}

      {/*=================== 2) Hero Section Started of Services ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='3' >
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*=================== 2) Hero Section Started of Services End ============ */}


      {/*=================== 3) Featued Tour Section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5' >
              <Subtitle subtitle={"Explore 🤩🛫"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*=================== 3) Featued Tour Section End ============ */}

      {/*=================== 4) Experiance Section Start ============ */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">

                <Subtitle subtitle={'Experience 🏆'} />
                <h2>With our all experience <br />We will serve you!! </h2>

                <p>At Travel World, we bring years of expertise to ensure your travel experience is nothing short of extraordinary. Our seasoned team of travel professionals is dedicated to crafting personalized journeys that cater to your unique preferences and needs. From selecting the perfect destinations to arranging luxurious accommodations and unforgettable activities, every detail is meticulously planned and executed with precision.</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5 ">

                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      {/*=================== 4) Experiance Section End ============ */}

      {/*=================== 5) Gallery Section Start ============ */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery 🦋'} />
              <h2 className="gallery__title">
                Visit Our Customers Tour Gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*=================== 5) Gallery Section End ============ */}

      {/*=================== 6) testimonial section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' >
              <Subtitle subtitle={'Fans Love 💝🎉'} />
              <h2 className="testimonial__title">What our fans say about us..</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/*=================== 6) testimonial section end ============ */}

      {/*=================== 7) Newsletter section start ============ */}
      <Newsletter />

      {/*=================== 7) Newsletter section end ============ */}

    </>
  )
}

export default Home