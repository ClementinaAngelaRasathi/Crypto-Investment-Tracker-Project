import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deepPurple, lightBlue, pink, purple, teal, lime } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale
);

const BarChart = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    const [chartData, setChartData] = useState([]);

    const fetchTopCoins = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setChartData(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchTopCoins();
    }, []);

    const data = {
        // copy data from the state to a new array,
        // sort it by current_price in descending order,
        // take top 10 results using slice
        // and then map 
        labels: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.name),
        datasets: [{
            data: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.current_price),
            label: `${chartData.length} Most Expensive Cryptocurrencies`,
            backgroundColor: [
                    theme.palette.customYellow,
                    theme.palette.error.dark,
                    theme.palette.primary.dark,
                    theme.palette.success.dark,
                    deepPurple[600],
                    pink[400],
                    lightBlue[300],
                    teal[400],
                    purple[300],
                    lime[500]
                ],
        }],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: isMd ? true : false,
                color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
                anchor: 'end',
                align: 'top',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            size: 13,
                        },
                        padding: 10,
                    },
                },
                formatter: (value) => numeral(value).format('$0,0.00'),
            },
        },
        scales: {
            x: {
                ticks: {
                    color: theme.palette.text.primary,
                    maxRotation: 45,
                    minRotation: 45,
                },
                title: {
                    display: true,
                    text: 'Cryptocurrencies',
                    color: theme.palette.text.primary,
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
                    padding: 10,
                },
            },
            y: {
                ticks: {
                    color: theme.palette.text.primary,
                    padding: 10,
                    callback: (value) => numeral(value).format('$0,0.00')
                },
                display: true,
                borderDash: [5, 5],
                title: {
                    display: true,
                    text: 'Current price',
                    color: theme.palette.text.primary,
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
                    padding: 10,
                },
            },
        },
    };


    const navigate=useNavigate();

    const tohome=()=>{
        navigate('/dashboard')
    }

    const todata=()=>{
        navigate('/dashboard')
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


{/* <div className='container'>


<Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#3D1E59'}}>
      <Container>
        <Navbar.Brand onClick={tohome}><h1>Natwest</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' onClick={todashboard2}>Profile</Nav.Link>
            <Nav.Link className='text-light' onClick={tohistory}>Watchlist</Nav.Link>
            <Nav.Link className='text-light' onClick={tosearch}>Search</Nav.Link>
            <Nav.Link className='text-light' onClick={tohistory}></Nav.Link>
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


</div> */}

<Navbar  variant="dark" className='text-light'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={todata}>Natwest</Nav.Link>
            <Nav.Link onClick={tobar}>Expensive</Nav.Link>
            <Nav.Link onClick={topie}>By-Volume</Nav.Link>
            <Nav.Link onClick={toline}>All-Time-Low</Nav.Link>
            <Nav.Link onClick={todoughnut}>Cheapest</Nav.Link>
            <Nav.Link onClick={toarea}>All-Time-High</Nav.Link>
            <Nav.Link onClick={topolar}>By-Market-Cap</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
        <br></br>
        <br></br>


        <Card >
            <CardHeader 
                title='Top 10 Most Expensive Cryptocurrencies' 
                subheader='Top 10 Most Expensive Cryptocurrencies Measured By Their Market Price' 
            />
            <Divider />
            <CardContent>
                <Box sx={{ height: 400, position: 'relative' }}>
                    <Bar
                        data={data} 
                        options={options} 
                        plugins={[ChartDataLabels]} 
                    />
                </Box>
            </CardContent>
        </Card>





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
    );
};

export default BarChart;