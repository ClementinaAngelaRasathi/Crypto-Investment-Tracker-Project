import React, { useEffect } from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './Coins.css'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Coins = (props) => {


    const navigate=useNavigate();

    const tohome=()=>{
        navigate('/')
        window.location.reload();

    }

    const tocharts=()=>{
        navigate('/dashboard')
    }

    const todashboard2=()=>{
        navigate('/dashboard2')
    }


    const tosearch=()=>{
        navigate('/tables')
    }

    const toenquiry=()=>{
      navigate('/enquiry')
    }

    const tohistory=()=>{
        navigate('/history')
    }

    useEffect(() => {
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')`;

  }, [])


    const goHome=()=>{
        localStorage.clear();
        navigate('/')
        window.location.reload();

    }
    
    return (
        <div className='container'>

{/* <Nav className="justify-content-center" > */}
        {/* <Nav.Item>
          <Button onClick={tohome}>Home</Button>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Button onClick={tocharts}>Charts</Button>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Button onClick={todashboard2}>Profile</Button>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Button onClick={tosearch}>Search</Button>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Button onClick={tohistory}>History</Button>
        </Nav.Item> */}
      {/* </Nav> */}


      <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#3D1E59'}}>
      <Container>
        <Navbar.Brand  onClick={tohome}><h1 className='text-light'>Natwest</h1 ></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' onClick={todashboard2}>Profile</Nav.Link>
            <Nav.Link className='text-light' onClick={tohistory}>Watchlist</Nav.Link>
            <Nav.Link className='text-light' onClick={tosearch}>Search</Nav.Link>
            {/* <Nav.Link className='text-light' onClick={tohistory}></Nav.Link> */}
            <Nav.Link className='text-light' onClick={toenquiry}>Enquiry</Nav.Link>

            <div className="spinner-grow text-info" onClick={tocharts}><h4>CCCheck out!!</h4></div>

           

            {/* <Button>Logout</Button> */}

            {/* <NavDropdown  title="Dropdown" id="collasible-nav-dropdown">

              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={goHome}>
              <Button>Logout</Button>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


            <div>
                   <br></br> <h4 className='text-center'>Live Updates on all Cryptos! Dive inside and explore!!</h4>
                    <div className='heading'>
                    <p>#</p>
                    <p className='coin-name '>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                    {/* <p className='hide-mobile'>Add</p> */}

                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>

            <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>De<span className='primary'>Fi</span></h1>
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

export default Coins
