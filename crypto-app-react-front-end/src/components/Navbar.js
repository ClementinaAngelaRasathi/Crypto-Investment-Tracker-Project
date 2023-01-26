import React, {useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {FaCoins} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
   

    const navigate=useNavigate();

    const toHome=()=>{
        navigate('/login')
    }

    const goHome=()=>{
        navigate('/')
    }

    const totable=()=>{
        navigate('/tables')
    }

    const tolist=()=>{
        navigate('/selection')
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)  


    // useEffect(() => {
    //     document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')`;
    
    //   }, [])

    return (

        <div>
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> NatWest <span className='purple'>Crypto Gallery</span></h1>
                
            </div>
        </Link>

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
                        <a  onClick={tolist}></a>
                        </ul>
                        <ul>
                        <a 
                        onClick={totable}
                        >Search</a>
                        </ul>
                </ul>
                <div className='btn-group'>
                    <Button className='btn'>Connect Wallet</Button>
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
    )
}

export default Navbar
