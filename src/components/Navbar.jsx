import React from 'react'
import logo from '../assets/logo.png'
import prime from '../assets/prime.jpg'
import { MagnifyingGlassCircleIcon, MapPinIcon, LanguageIcon, ShoppingCartIcon, ListBulletIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    return (
        <>
            <div className="flex bg-black h-14">
                <ul className='flex'>
                    <li><a href='/'><img src={logo} alt='logo' className='w-25 h-8 mx-4 my-4' /></a></li>
                    <MapPinIcon style={{ color: 'white', width: '1.7rem', marginLeft: '1rem' }} />
                    <li className='w-90  mx-2 my-3 px-2' ><input style={{ width: '80rem' }} className=' border h-9' placeholder=' Search Amazon.in'></input></li>
                    <button style={{ backgroundColor: '#edbc32', width: '2.1rem', height: '2.2rem', paddingLeft: '0.3rem', marginTop: '.8rem', borderRadius: '.2rem' }}><MagnifyingGlassCircleIcon style={{ color: 'white', width: '1.5rem' }} /></button>
                    <button style={{ backgroundColor: 'black', width: '2.1rem', height: '2.2rem', paddingLeft: '0.3rem', marginTop: '.8rem', borderRadius: '.2rem', marginLeft: '1rem' }}><LanguageIcon style={{ color: 'white', width: '1.5rem' }} /></button>
                    <button style={{ backgroundColor: 'black', width: '5rem', height: '2.2rem', paddingLeft: '0.3rem', marginTop: '.8rem', borderRadius: '.2rem', marginLeft: '1rem', color: 'white' }}><a href='/Signin'><b>Sign In</b></a></button>
                    <button style={{ backgroundColor: 'black', width: '5rem', height: '2.2rem', paddingLeft: '0.3rem', marginTop: '.5rem', borderRadius: '.2rem', marginLeft: '1rem', color: 'white' }}><b>Return & Order</b></button>
                    <button style={{ backgroundColor: 'black', width: '5rem', height: '2.2rem', paddingLeft: '0.3rem', marginTop: '.8rem', borderRadius: '.2rem', marginLeft: '3rem', color: 'white' }}><a href='/Cart'><ShoppingCartIcon style={{ color: 'white', width: '2rem' }} /></a></button>
                   
                </ul>
            </div>
            <div className="flex h-10 " style={{ backgroundColor:'#212a4a', color:'white' }}>
                <ul className='flex'>
                    
                    <button style={{ backgroundColor: '#212a4a', width: '3rem', height: '2.2rem', paddingLeft: '0.3rem', marginTop: '.2rem', borderRadius: '.2rem', marginLeft: '2rem' }}><b><ListBulletIcon style={{ color: 'white', width: '1.5rem' }} /></b></button>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}><a href='/Deals'><b>Today's Deal</b></a> </li>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}><a href=''><b>Coustomer Service</b></a></li>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}><a href=''><b>Amazon Mini Tv</b></a></li>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}><a href=''><b>Registry</b></a></li>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}><a href=''><b>Gift Cards</b></a></li>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}><a href=''><b>Sell</b></a></li>
                    <li style={{ marginLeft: '50rem' }}><a href=''><img src={prime} style={{ height: '2rem', marginTop: '0.3rem' }} /></a></li>

                </ul>
            </div>
        </>
    )
}

export default Navbar
