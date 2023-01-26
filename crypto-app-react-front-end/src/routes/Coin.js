import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Coin.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Coin = () => {

    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`


    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // const [cryptCoin, setCryptCoin] = useState({});

    var cryptCoin

    const saveDb=(e)=>{
        console.log(e.target.id);

        var id=e.target.id

        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response=>{
            console.log(response.data)
            cryptCoin={
                "id":0,
                "name":response.data.name,
                "currentprice":response.data.market_data.current_price.usd,
                "pricechange":response.data.market_data.price_change_24h,
                "lastupdated":response.data.last_updated,
                "emailid":localStorage.getItem("email")
            }
            console.log(cryptCoin);
            // alert(`${cryptCoin.name} is successfull added to your Watchlist`)
            toast.success(`${cryptCoin.name} is successfull added to your Watchlist`)
    
        })
        .catch(err=>console.log(err))

        // wait(3000);

        setTimeout(() => {
            axios.post(`http://localhost:8080/watchlist`, cryptCoin)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
        }, 2000);

        

    }

    const navigate=useNavigate();

    const tohome=()=>{
        navigate('/data')
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

const goHome=()=>{
        localStorage.clear();
        navigate('/')
        window.location.reload();

    }

    return (
        <div>
       <ToastContainer/>

{/* <Navbar style={{backgroundColor:'#FEDFE2'}}>
        <Container style={{backgroundColor:'#FEDFE2'}}>
          <Navbar.Brand onClick={tohome}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

<div className='container'>


<Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#3D1E59'}}>
      <Container>
        <Navbar.Brand onClick={tohome}><h1>Natwest</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' onClick={todashboard2}>Profile</Nav.Link>
            <Nav.Link className='text-light' onClick={tohistory}>Watchlist</Nav.Link>
            <Nav.Link className='text-light' onClick={tosearch}>Search</Nav.Link>
            <Nav.Link className='text-light' onClick={toenquiry}>Enquiry</Nav.Link>
            <div className="spinner-grow text-info" onClick={tocharts}><h4>CCCheck out!!</h4></div>
</Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={goHome}>
              <Button>Logout</Button>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            </div>


            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                    <button className='btn btn-sm' id={coin.id} onClick={saveDb}>Add to Watchlist</button>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading' text-dark>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                            
                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='about'>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                        
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin
