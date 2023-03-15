import React from 'react'
import Navbar from './Navbar'
import sofa from '../assets/sofa.jpg'
import amazon from '../assets/amazon.png'
import first from '../assets/1.png'
import second from '../assets/2.png'
import footer from '../assets/footer.png'

import { Button, Card, Col, Row } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="head">
                <div id="demo" class="carousel slide" data-ride="carousel">


                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={sofa} alt="sofa" style={{ width: '100rem', marginLeft: '8rem' }} />
                        </div>
                    </div>
                    <img src={amazon} alt="sofa" style={{ width: '100rem', marginLeft: '8rem' ,marginTop:'-15rem'}} />
                    <img src={first} alt="sofa" style={{ width: '100rem', marginLeft: '8rem' }} />
                    <img src={second} alt="sofa" style={{ width: '100rem', marginLeft: '8rem' }} />
                    <img src={footer} alt="sofa" style={{ width: '100rem', marginLeft: '8rem' }} />
                </div>
            </div>
           
        </>
    )
}

export default Home
