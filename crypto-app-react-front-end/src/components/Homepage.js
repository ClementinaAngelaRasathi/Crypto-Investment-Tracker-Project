import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { FaBars, FaCoins, FaFacebook, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
import './Homepage.css'
import Crypto from '../assets/hero-img.png'
import Cryptoo from '../assets/trade.png'



const Homepage = () => {

    const navigate=useNavigate();

    const toHome=()=>{
        navigate('/login')
    }

    const goHome=()=>{
        navigate('/')
    }

    const totable=()=>{
        navigate('/news')
    }

    const tolist=()=>{
        navigate('/selection')
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) 


    const tocontact=()=>{
        navigate(`/contact`)
    }

  return (
    <div>

<div>
        {/* <Link to='/'> */}
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1 data-testid="appName" className='text-light'>NatWest <span className='purple'>Crypto Gallery</span></h1>
                
            </div>
        {/* </Link> */}

        <div className='header'>
            <div className='container'>
            {/* <img
                            alt=""
                            src="https://www.bing.com/th?id=OSK.afa3a68f24db08580c55a8cdbfddaa84&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM"
                            // width="30"
                            // height="30"
                            // className="d-inline-block align-top"
                            onClick={goHome}
                            />{' '} */}
                            {/* <h1>Nat<span className='primary'>West Group</span></h1> */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <ul>
                        <a onClick={goHome}>Home</a>
                        </ul>
                        <ul>
                        <a onClick={toHome}>Login</a>
                        </ul>
                        <ul>
                        <a  onClick={tolist}>Quick Cart</a>
                        </ul>
                        <ul>
                        <a 
                        onClick={totable}
                        >Latest News</a>
                        </ul>
                        
                </ul>
                <div className='btn-group'>
                    <Button className='btn' onClick={tocontact}>Connect Wallet</Button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
        <div className="col text-center">
        {/* <Button variant="primary" 
        // href='/login' 
        onClick={toHome}
        >Login</Button> */}
    </div>

  
    

        </div>

        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurreny with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' style={{ backgroundColor: '#FBC9CF'}}/>
                        <button className='btn'  ><a href='https://www.natwestgroup.com/' target='_blank' className='text-light'>Learn More</a></button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right' >
                    <div className='img-container'>
                        <img src={Crypto} href='https://www.natwestgroup.com' target='_blank' alt=''/>
                    </div>
                </div>
            </div>
        </div>


        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Cryptoo}  alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' style={{ backgroundColor: '#FBC9CF'}} />
                        <button className='btn'  ><a href='https://www.natwestgroup.com/' target='_blank' className='text-light'>Learn More</a></button>
                    </div>
                </div>

            </div>


            
        </div>
        
        
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Nat<span className='primary'>West</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaFacebook className='icon'/></a>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default Homepage