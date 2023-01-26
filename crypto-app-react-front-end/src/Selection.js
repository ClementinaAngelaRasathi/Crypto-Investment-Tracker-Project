import React, { useState } from 'react'
import Header from './components/Lists/header/Header';
import { Routes } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LiveReports from './components/Lists/live_reports/LiveReports';
import FetchCoins from './components/Lists/fetch_coins/FetchCoins';
// import './App.css';
import CardCoins from './components/Lists/card_coins/CardCoins';
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from 'react-bootstrap';





const Selection = () => {

    const [isActive, setIsActive] = useState('hidden-nav');

    const btnToggle = () => { // Toggle main nav on button click
        if (isActive === 'hidden-nav') {
        setIsActive('active-nav');
        } else {
        setIsActive('hidden-nav');
        }
    }

    const navToggle = (e) => { // Hide main nav on link or search click
        if (e.target.tagName !== 'INPUT') {
        setIsActive('hidden-nav');
        }
    }

    const navigate=useNavigate();


    const toHome=()=>{
        navigate('/login')
    }

    const goHome=()=>{
        navigate(`/`)
    }

    const totable=()=>{
        navigate('/news')
    }

    const tolist=()=>{
      window.location.reload();
        navigate('/selection')
    }
   
    const [click, setClick] = useState(false)


  return (
  <div  >

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
                <a  onClick={tolist} >Quick Cart</a>
                
                </ul>
                <ul>
                <a 
                onClick={totable}
                >Latest News</a>
                </ul>
        </ul>
        
        </div>
        </div>



    <Header/>
    <nav className='container text center'>
          <ul onClick={navToggle}className={`main-nav ${isActive}`}>
            {/* <li className="home-link" style={{color: '#f9f9f9'}}>
              <Link to="/">Home</Link>
            </li> */}

            <li className="live-link">
              <Link to="/livereports" className='text-light'></Link>
            </li>

            {/* <li className="about-link">
              <Link to="/about">About</Link>
            </li>

            <li className="search-link">
              <Search />
            </li> */}
          </ul>
          {/* <div className="res-nav">
            <p>CRYPTONITE.com</p>
            <button type="button" onClick={btnToggle} className="btn-toggle-nav">{isActive === 'hidden-nav' ? <span>&#x2630;</span> : <span className="close-entity">&times;</span>}</button>
          </div> */}
        </nav>
     
    <Routes>
    <Route path='/livereports' element={<LiveReports/>}/>
    <Route path='/' element={<FetchCoins/>}/>


    </Routes>

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

export default Selection