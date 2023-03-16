import React from 'react'
import { Button, Form } from 'react-bootstrap'
import logo from '../assets/login.webp'
import foot from '../assets/F1.png'

const Signin = () => {
    return (
        <>
        <div className="page">
        <div className="logo">
            <img src={logo} alt="logo" style={{width:'10rem',marginLeft:'55rem'}} />
        </div>
        <div className="container">
            <form style={{width:'20rem',height:'18rem',textAlign:'center',lineHeight:'2rem',marginTop:'1rem',marginLeft:'50rem',paddingTop:'2rem',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <input placeholder=' Enter Email' type='email' style={{marginLeft:'1rem',height:'1.5rem',border:'1px solid black',borderRadius:'.5rem'}}></input>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <input placeholder=' Password' type='password' style={{marginLeft:'2.5rem',height:'1.5rem',border:'1px solid black',borderRadius:'.5rem'}}></input>
                </Form.Group><br/>
                <h9 style={{fontSize:'12px',margin:'2px'}}>By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</h9><br/>
                
                <button  type="submit" style={{border:'1px solid black',width:'5rem',height:'2rem',paddingBottom:'1rem',backgroundColor:'yellow',borderRadius:'5px'}}><b>Log In</b></button>
            </form>
        </div>   <br/> 
        <h3  style={{marginLeft:'54rem'}}>Don't have Amazon Account?</h3>
        <div className="end" style={{marginLeft:'53rem'}}>
            <button style={{border:'1px solid black',width:'15rem',height:'2rem',paddingBottom:'1rem',borderRadius:'5px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}><a href=''>Create your Amazon Account</a></button>
        </div>
        </div><br/>
        <div className="foot">
            <img src={foot} alt="" />
        </div>

        </>
    )
}

export default Signin
