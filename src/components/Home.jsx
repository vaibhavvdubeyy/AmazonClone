import React from 'react'
import Navbar from './Navbar'
import sofa from '../assets/sofa.jpg'
import toys from '../assets/toys.jpg'
import laptop from '../assets/laptop.jpg'
import beauty from '../assets/beauty.jpg'

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="home" style={{width:'80rem',alignItems:'center',marginLeft:'20rem'}}>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={sofa} class="d-block w-100" alt="..."/>
                    </div>
                    
                </div>
                
            </div>
        </div>    
        </>
    )
}

export default Home
