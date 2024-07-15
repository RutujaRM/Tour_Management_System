import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
    return (
        <section className='newsletter' >
            <Container >
                <Row>
                    <Col lg='6'>

                        <div className='newsletter__content'>
                            <h2>Subscribe now to get useful traveling information.</h2>

                            <div className="newsletter__input">
                                <input type="email" name="email" id="" placeholder='Enter your Email' />
                                <button className="btn newsletter__btn ">Subscribe</button>
                            </div>
                            <p>
                            "Subscribe now and unlock a world of travel inspiration! Join our community to receive curated travel guides, insider tips, and special offers directly to your inbox. Stay ahead with the latest destinations, packing hacks, and exclusive deals—all designed to make your travels unforgettable. Don't miss out on the adventure—subscribe today!"
                            </p>
                        </div>

                    </Col>

                    <Col lg="6">
                        <div className='newsletter__img'>
                            <img src={maleTourist} alt=" Not found" />
                        </div>
                    </Col>


                </Row>
            </Container>
        </section>
    )
}

export default Newsletter