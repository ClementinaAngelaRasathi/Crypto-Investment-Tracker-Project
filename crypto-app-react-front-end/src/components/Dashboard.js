import { Container, Grid } from '@mui/material';
import React from 'react'
import { Col, Nav, Navbar, Row } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom' 
import AssetPlatforms from './Statistics/AssetPlatforms';
import Categories from './Statistics/Categories';
import Exchanges from './Statistics/Exchanges';
import MarketIndexes from './Statistics/MarketIndexes';


const Dashboard = () => {

    // const navigate=useNavigate();

    // const goHome=()=>{
    //     localStorage.clear();
    //     navigate('/')
    // }

    const navigate=useNavigate();

    const todata=()=>{
        navigate('/data')
    }

    const tobar=()=>{
        navigate('/tobar')
    }

    const topie=()=>{
        navigate('/topie')
    }

    const toline=()=>{
        navigate('/toline')
    }

    const todoughnut=()=>{
        navigate('/todoughnut')
    }

    const toarea=()=>{
        navigate('/toarea')
    }

    const topolar=()=>{
        navigate('/topolar')
    }

  return (
    <div>

        

<Navbar  variant="dark" className='text-light'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="text-light" onClick={todata}>Natwest</Nav.Link>
            <Nav.Link  onClick={topie}>By-Volume</Nav.Link>
            <Nav.Link onClick={toline}>All-Time-Low</Nav.Link>
            <Nav.Link onClick={todoughnut}>Cheapest</Nav.Link>
            <Nav.Link onClick={toarea}>All-Time-High</Nav.Link>
            <Nav.Link onClick={topolar}>By-Market-Cap</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

<br></br>
        {/* <Button variant='primary' onClick={goHome}>Logout</Button> */}

        <Container maxWidth={false} >
        <Grid container spacing={3} >
                        <Grid item md={6} xs={12}>
                            <AssetPlatforms />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Categories />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Exchanges/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <MarketIndexes />
                        </Grid>
                    
                        
            </Grid>
            </Container>

            <br></br> 
            <br></br> 

        


            <div>
            <Container class='container'>
                <Row>
                <Col sm={6}>
                        <img
                            className="d-block w-100 h-100"
                            src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/new-articles/867x497/image.dim.480.Racial-Equality-cover-image-867x497.png"
                            alt='home1' />
                    </Col>
                    <Col sm={6}>
                        <br></br>
                        <br></br>

                        <h1 class='heading1'>Investments and Natwest</h1>
                        <p class='para1'>Find out how we’re supporting our customers, through our products & partnerships.</p>
                        <a class='h1link' href='natwest.com/investments/natwest-invest.html'>Our approach to Investments</a>
                    </Col>
                    
                </Row>
            </Container>
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

export default Dashboard