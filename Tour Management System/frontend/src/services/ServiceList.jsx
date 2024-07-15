import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Provide real-time weather updates and forecasts for destinations, helping travelers plan their trips more effectively and pack appropriately.Current weather conditions, temperature, humidity, wind speed, and a 7-day weather forecast.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'This available for various destinations. This service can include profiles of tour guides, their expertise, customer reviews, ratings, and booking options. It aims to help travelers find the perfect guide to enhance travel experience.communicate with tour guides before booking to ask questions'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Provide users with the ability to customize their tours according to their interests, schedule, and budget. This service can include selecting activities, destinations, accommodations, and more, creating a personalized itinerary that suits their needs.Enable users to set a budget and receive recommendations that fit within their financial constraints.'
    },

];


const ServiceList = () => {
    return (
        <>
            {
                serviceData.map((item, index) => (
                    <Col lg='3' md='6' sm='12' className='mb-4' key={index} >
                        <ServiceCard item={item} />
                    </Col>
                ))
            }

        </>

    )
}

export default ServiceList