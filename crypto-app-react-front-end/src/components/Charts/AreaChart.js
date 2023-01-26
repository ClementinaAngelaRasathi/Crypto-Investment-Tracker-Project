import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, registerables} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

Chart.register(...registerables);

const AreaChart = () => {
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
        // sort it by ath in descending order,
        // take top 10 results using slice
        // and then map 
        labels: chartData.sort((a, b) => b.ath - a.ath).slice(0, 10).map(coin => coin.name),
        datasets: [{
            label: 'All-Time-High',
            fontColor: colors.common.white,
            data: chartData.sort((a, b) => b.ath - a.ath).slice(0, 10).map(coin => coin.ath),
            fill: true,
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
            borderColor: theme.palette.primary.main,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: theme.palette.primary.main,
            pointBorderColor: alpha(theme.palette.primary.main, 0.8),
            pointHoverRadius: 3,
            pointHoverBackgroundColor: theme.palette.primary.main,
            pointHitRadius: 50,
            pointBorderWidth: 2
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
                grid: {
                    color: theme.palette.divider,
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
                grid: {
                    color: theme.palette.divider,
                },
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

        
        <Card>
            <CardHeader 
                title='Top 10 Cryptocurrencies By All-Time-High' 
                subheader='Top 10 Cryptocurrencies Measured By Their All-Time-High (ATH)' 
            />
            <Divider />
            <CardContent>
                <Box sx={{ height: 400, position: 'relative' }}>
                    <Line
                        data={data} 
                        options={options} 
                        plugins={[ChartDataLabels]} 
                    />
                </Box>
            </CardContent>
        </Card>



        <div className='footer '>
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

export default AreaChart;