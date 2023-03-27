import React from 'react'
import { Card } from 'react-bootstrap'
import Navbar from './Navbar'
import card1 from '../assets/c1.png'
import card2 from '../assets/c2.png'
import card3 from '../assets/c3.png'
import card4 from '../assets/c4.png'
import card5 from '../assets/c5.png'
import card6 from '../assets/c6.png'
import card7 from '../assets/c7.png'
import card8 from '../assets/c8.jpg'
import card9 from '../assets/c9.png'
import card10 from '../assets/c10.png'
import card11 from '../assets/c11.jfif'
import card12 from '../assets/c12.png'
import card13 from '../assets/c13.png'
import card14 from '../assets/c14.png'
import card15 from '../assets/c15.png'
import card16 from '../assets/c16.png'
import card17 from '../assets/c17.png'
import card18 from '../assets/c18.jpg'
import p1 from '../assets/p1.jpg'
import footer from '../assets/footer.png'
import '../styles/cart.scss'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="cart">
                <div className="row">
                    <div className="column">
                        <Card style={{ width: '70rem', textAlign: 'center',  margin: '2rem',marginLeft:'10rem', boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',backgroundColor:'white'}}>
                            <div className="row">
                                <h1 style={{ fontSize: '2rem', fontWeight: 'normal', float: 'left', margin: '1rem' }}>Shopping Cart</h1>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <img alt="photo"variant="top" src={p1} style={{ width: '15rem', height: '15rem', margin: '2rem', marginTop: '2rem' }} />
                                </div>
                                <div className="column">
                                    <div className="row">
                                        <h2 style={{ fontSize: '2rem', fontWeight: 'normal', float: 'left', margin: '1rem' }}>Hard Plastic Conference Stand</h2>
                                    </div>    
                                    <div className="row">
                                        <span style={{ float: 'left', margin: '1rem' }}>Sold by Express Games</span>
                                       
                                    </div>
                                    <div className="row">
                                        
                                        <span style={{ float: 'left', margin: '1rem' }}>Gift options not available.Gift options not available. Learn more</span>
                                    </div>
                                    
                                    <div className="row">
                                        <div class="dropdown" style={{width:'5rem',backgroundColor:'grey', margin: '1rem'}}>
                                            <span>QNT.</span>
                                            <div class="dropdown-content">
                                                <p><a href=''>1</a></p>
                                                <p><a href=''>2</a></p>
                                                <p><a href=''>3</a></p>
                                                <p><a href=''>4</a></p>
                                                <p><a href=''>5</a></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Card>
                    </div>
                    <div className="column">
                        <Card style={{ width: '25rem', textAlign: 'center',float: 'right', margin: '2rem', boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',backgroundColor:'white' }}>

                            <Card.Body>
                                <div className="row"><h1 style={{ float: 'left', margin: '1rem', fontSize: '1.5rem' }}>Sub-Total : <b>RS. 150</b></h1></div>
                                <div className="row" style={{ display: 'contents' }}><button style={{ backgroundColor: '#ffd13b', marginLeft: '10.5rem', boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', margin: '2rem', width: '8rem', height: '3rem', borderRadius: '1rem' }}><a href='/'><b>Proceed to buy</b></a></button></div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="container-fluid" style={{ backgroundColor:'white',width:'100%'  }}>
                <div className="row" style={{ marginTop: '2rem' ,backgroundColor:'white' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 'normal', float: 'left', margin: '1rem' }}><b>Recommended Just for You</b></h2><br />
                </div>
                <div className="row" >

                    <div class="h1scroll"  style={{ backgroundColor:'white'  }}>
                        <div class="card"><a href=''><img alt="photo"src={card1} /><h2><b>All Deals</b></h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card2} /><h2>Amazon Device</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card3} /><h2>Computer Accesories</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card4} /><h2>Electronics</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card5} /><h2>Beauty</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card6} /><h2>Toys</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card7} /><h2>Shoes</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card8} /><h2>TV</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card9} /><h2>Gym Equipments</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card10} /><h2>Gaming</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card11} /><h2>Cameras</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card12} /><h2>Mobile Phones</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card13} /><h2>Grocery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card14} /><h2>Office Items</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card15} /><h2>Jewellery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card16} /><h2>Baby</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card17} /><h2>Personal Care</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card18} /><h2>Books</h2></a></div>
                    </div><br />

                </div>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 'normal', float: 'left', margin: '1rem' }}><b>Inspired by your Browsing</b></h2><br />
                </div>
                <div className="row">

                    <div class="h1scroll"  style={{ backgroundColor:'white'  }}>
                        <div class="card"><a href=''><img alt="photo"src={card1} /><h2><b>All Deals</b></h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card2} /><h2>Amazon Device</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card3} /><h2>Computer Accesories</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card4} /><h2>Electronics</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card5} /><h2>Beauty</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card6} /><h2>Toys</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card7} /><h2>Shoes</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card8} /><h2>TV</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card9} /><h2>Gym Equipments</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card10} /><h2>Gaming</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card11} /><h2>Cameras</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card12} /><h2>Mobile Phones</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card13} /><h2>Grocery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card14} /><h2>Office Items</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card15} /><h2>Jewellery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card16} /><h2>Baby</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card17} /><h2>Personal Care</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card18} /><h2>Books</h2></a></div>
                    </div><br />

                </div>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 'normal', float: 'left', margin: '1rem' }}><b>Coustomers also purchased</b></h2><br />
                </div>
                <div className="row">

                    <div class="h1scroll"  style={{ backgroundColor:'white'  }}>
                        <div class="card"><a href=''><img alt="photo"src={card1} /><h2><b>All Deals</b></h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card2} /><h2>Amazon Device</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card3} /><h2>Computer Accesories</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card4} /><h2>Electronics</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card5} /><h2>Beauty</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card6} /><h2>Toys</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card7} /><h2>Shoes</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card8} /><h2>TV</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card9} /><h2>Gym Equipments</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card10} /><h2>Gaming</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card11} /><h2>Cameras</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card12} /><h2>Mobile Phones</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card13} /><h2>Grocery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card14} /><h2>Office Items</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card15} /><h2>Jewellery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card16} /><h2>Baby</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card17} /><h2>Personal Care</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card18} /><h2>Books</h2></a></div>
                    </div><br />

                </div>
                <div className="row" style={{ marginTop: '2rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 'normal', float: 'left', margin: '1rem' }}><b>This too shall fit in cart</b></h2><br />
                </div>
                <div className="row">

                    <div class="h1scroll"  style={{ backgroundColor:'white'  }}>
                        <div class="card"><a href=''><img alt="photo"src={card1} /><h2><b>All Deals</b></h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card2} /><h2>Amazon Device</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card3} /><h2>Computer Accesories</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card4} /><h2>Electronics</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card5} /><h2>Beauty</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card6} /><h2>Toys</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card7} /><h2>Shoes</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card8} /><h2>TV</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card9} /><h2>Gym Equipments</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card10} /><h2>Gaming</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card11} /><h2>Cameras</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card12} /><h2>Mobile Phones</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card13} /><h2>Grocery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card14} /><h2>Office Items</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card15} /><h2>Jewellery</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card16} /><h2>Baby</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card17} /><h2>Personal Care</h2></a></div>
                        <div class="card"><a href=''><img alt="photo"src={card18} /><h2>Books</h2></a></div>
                    </div><br />

                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 'normal', margin: '1rem' }}>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.

                    Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</h3>
                    </div>
                <div className="footer">
                    <img  src={footer} alt="footer" />
                </div>
            </div>

        </>
    )
}

export default Cart
