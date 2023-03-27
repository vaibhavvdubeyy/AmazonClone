import React from 'react'
import '../styles/deals.scss'
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
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'
import product6 from '../assets/product6.jpg'
import product7 from '../assets/product7.jpg'
import product8 from '../assets/product8.jpg'
import product9 from '../assets/product9.jpg'
import product10 from '../assets/product10.jpg'
import product11 from '../assets/product11.jpg'
import product12 from '../assets/product12.jpg'
import product13 from '../assets/product13.jpg'
import product14 from '../assets/product14.jpg'
import product15 from '../assets/product15.jpg'
import product16 from '../assets/product16.jpg'

import p2 from '../assets/p2.jpg'
import { Card} from 'react-bootstrap'
import footer from '../assets/footer.png'


const Deals = () => {
    return (
        <>
            <Navbar />
            <h1 style={{ fontSize: '2rem' }}>Today's Deals</h1>
            <div className='hscroll'>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                <div class="card"><img src={p2} /><h2>Amazon Device</h2></div>
                
            </div>    
            <div class="h1scroll">
                <div class="card"><a href=''><img src={card1} /><h2><b>All Deals</b></h2></a></div>
                <div class="card"><a href=''><img src={card2} /><h2>Amazon Device</h2></a></div>
                <div class="card"><a href=''><img src={card3} /><h2>Computer Accesories</h2></a></div>
                <div class="card"><a href=''><img src={card4} /><h2>Electronics</h2></a></div>
                <div class="card"><a href=''><img src={card5} /><h2>Beauty</h2></a></div>
                <div class="card"><a href=''><img src={card6} /><h2>Toys</h2></a></div>
                <div class="card"><a href=''><img src={card7} /><h2>Shoes</h2></a></div>
                <div class="card"><a href=''><img src={card8} /><h2>TV</h2></a></div>
                <div class="card"><a href=''><img src={card9} /><h2>Gym Equipments</h2></a></div>
                <div class="card"><a href=''><img src={card10} /><h2>Gaming</h2></a></div>
                <div class="card"><a href=''><img src={card11} /><h2>Cameras</h2></a></div>
                <div class="card"><a href=''><img src={card12} /><h2>Mobile Phones</h2></a></div>
                <div class="card"><a href=''><img src={card13} /><h2>Grocery</h2></a></div>
                <div class="card"><a href=''><img src={card14} /><h2>Office Items</h2></a></div>
                <div class="card"><a href=''><img src={card15} /><h2>Jewellery</h2></a></div>
                <div class="card"><a href=''><img src={card16} /><h2>Baby</h2></a></div>
                <div class="card"><a href=''><img src={card17} /><h2>Personal Care</h2></a></div>
                <div class="card"><a href=''><img src={card18} /><h2>Books</h2></a></div>
            </div><br />
            <div class="dropdown">
                <span>Sort by</span>
                <div class="dropdown-content">
                    <p><a href=''>Featured</a></p>
                    <p><a href=''>Price Low to High</a></p>
                    <p><a href=''>Price High to Low</a></p>
                    <p><a href=''>Customer Rating</a></p>
                    <p><a href=''>Discount</a></p>

                </div>
            </div><br /><br/>
            <div className="items">
                <div className="row">
                <div className="column1">
                    <h2><b>Prime Programs</b></h2>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1">Amazon Prime</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1">Prime Early Access deals</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1">Prime Exclusive deals</label><br/>
                    <br/>
                    <h2><b>Departments</b></h2>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Amazon Devices</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Arts, Crafts & Sewing</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Automotive & Motorcycle</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Baby</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Baby Clothing & Accessories</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Beauty</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Books</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Boys Fashion</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Camera & Photo</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Men's Watches</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Mens Clothing</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Mens Fashion</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Movies & TV</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Music</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Musical Instruments</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Office Electronics & Supplies</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Patio, Lawn & Garden</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Pet Supplies</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Portable Speakers</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Power & Hand Tools</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Software</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="">Sports & Outdoors</label><br/>
                    <br/>

                    <h2><b>Deal Type</b></h2>
                    <p>All deals</p>
                    <p>Top Deal</p>
                    <p>Lightning deal</p>
                    <p>Best deal</p>
                    <br/>

                    <h2><b>Discount</b></h2>
                    <p>All deals</p>
                    <p>10% off or more</p>
                    <p>25% off or more</p>
                    <p>50% off or more</p>
                    <p>70% off or more</p>
                    <br/>

                   
                    <h2><b>Customer Ratings</b></h2>
                </div>
                <div className="column" >
                    <Card style={{ width: '25rem',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product1} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product2} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product3} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product4} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' ,paddingTop:'3rem'}}>
                        <Card.Img variant="top" alt="photo" src={product13} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' ,paddingTop:'.5rem'}}>
                        <Card.Img variant="top" alt="photo" src={product14} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem',paddingTop:'1rem'}}>
                        <Card.Img variant="top" alt="photo" src={product15} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'9rem' }}>
                        <Card.Img variant="top" alt="photo" src={product16} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="column">
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product5} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product6} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product7} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product8} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product9} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product10} />
                        <Card.Body>
                          
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem',paddingTop:'3rem'}}>
                        <Card.Img variant="top" alt="photo" src={product11} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product12} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="column">
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product9} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product10} />
                        <Card.Body>
                          
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem',paddingTop:'3rem'}}>
                        <Card.Img variant="top" alt="photo" src={product11} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product12} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product5} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product6} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product7} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product8} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                </div>
                <div className="column">
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' ,paddingTop:'3rem'}}>
                        <Card.Img variant="top" alt="photo" src={product13} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' ,paddingTop:'.5rem'}}>
                        <Card.Img variant="top" alt="photo" src={product14} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem',paddingTop:'1rem'}}>
                        <Card.Img variant="top" alt="photo" src={product15} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'9rem' }}>
                        <Card.Img variant="top" alt="photo" src={product16} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product1} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product2} />
                        <Card.Body>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem'}}>
                        <Card.Img variant="top" alt="photo" src={product3} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem',textAlign:'center',border:'1px solid grey',height:'15rem',paddingLeft:'7rem' }}>
                        <Card.Img variant="top" alt="photo" src={product4} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </div>
                
                
                
                </div>
            </div><br/>
            <div className="footer">
                <img src={footer} alt="footer" />
            </div>
        </>
    )
}

export default Deals
