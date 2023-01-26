import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

Chart.register(...registerables);

const CryptoByVolumePieChart = () => {
    const theme = useTheme();

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
        // sort it by total_volume in descending order,
        // take top 3 results using slice
        // and then map 
        labels: chartData.sort((a, b) => b.total_volume - a.total_volume).slice(0, 3).map(coin => coin.name),
        datasets: [
            {
                data: chartData.sort((a, b) => b.total_volume - a.total_volume).slice(0, 3).map(coin => coin.total_volume),
                backgroundColor: [

                    theme.palette.primary.main,
                    theme.palette.error.dark,
                    theme.palette.customYellow,
                ],
                borderWidth: 1,
                borderColor: colors.common.white,
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
        },
        plugins: {
            legend: {
                display: true,
                padding: 30,
                labels: {
                    color: theme.palette.text.primary,
                    font: {
                        size: 14,
                    },
                },
            },
            datalabels: {
                display: true,
                color: colors.common.white,
                align: 'center',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            size: 13,
                        },
                    },
                },
                formatter: (value) => numeral(value).format('$0,0.00'),
            },
        },
    };

    const navigate=useNavigate();


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

        <Card>
            <CardHeader 
                title='Top 3 Cryptocurrencies By Volume' 
                subheader='Top 3 Cryptocurrencies Measured By Their Total Volume' 
            />
            <Divider />
            <CardContent>
                <Box sx={{ height: 400, position: 'relative' }}>
                    <Pie
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

export default CryptoByVolumePieChart;