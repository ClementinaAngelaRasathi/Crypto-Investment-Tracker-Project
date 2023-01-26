import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'


import TablePaginationActions from './TablePaginationActions';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const CoinMarkets = () => {
    const theme = useTheme();

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const fetchCoinMarkets = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setCoins(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchCoinMarkets();
    }, []);

    const navigate=useNavigate();

    // const tohome=()=>{
    //     navigate('/')
    // }

    // const tocharts=()=>{
    //     navigate('/dashboard')
    // }

    // const todashboard2=()=>{
    //     navigate('/dashboard2')
    // }


    // const tosearch=()=>{
    //     navigate('/tables')
    // }
    


    const tohome=()=>{
        navigate('/data')
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


    const tohistory=()=>{
        navigate('/history')
    }

    const toenquiry=()=>{
        navigate('/enquiry')
      }
      
    const goHome=()=>{
        localStorage.clear();
        navigate('/')
        window.location.reload();

    }
    

    return (
        <React.Fragment >

{/* <Nav className="justify-content-center" >
        <Nav.Item>
          <Button onClick={tohome}>Home</Button>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={tocharts}>Charts</Button>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={todashboard2}>Profile</Button>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={tosearch}>Search</Button>
        </Nav.Item>
      </Nav> */}


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
            <div class="spinner-grow text-info" onClick={tocharts}><h4>CCCheck out!!</h4></div>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={goHome}>
              <Button>Logout</Button>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <br></br>
            <Box >
                <Box >
                    {/* <Card  > */}
                        {/* <CardContent >
                            <Box sx={{ maxWidth: 500 }}  > */}
                            <div style={{ width: '20rem' }}>
                                <TextField style={{ backgroundColor: '#C8B9D6'}}  

                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment  position='start'>
                                                <SvgIcon fontSize='small' color='action'>
                                                    <SearchIcon  />
                                                </SvgIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                    placeholder='Search a cryptocurrency'
                                    onChange={handleChange}
                                />
                                </div>
                            {/* </Box>
                        </CardContent> */}
                    {/* </Card> */}
                </Box>
            </Box>
            <Box sx={{ pt: 3 }}>
                <Card >
                    <Box style={{ backgroundColor: ''}} sx={{ minWidth: 1050, pb: 3 }}>
                        <Table >
                            <TableHead >
                                <TableRow >
                                    <TableCell style={{ backgroundColor: '#0C7F88'}}  sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell style={{ backgroundColor: '#0C7F88'}} sx={{ fontWeight: 'bold' }}>Symbol</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                    <TableCell style={{ backgroundColor: '#0C7F88'}} sx={{ fontWeight: 'bold' }}>24h</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                                    <TableCell style={{ backgroundColor: '#0C7F88'}} sx={{ fontWeight: 'bold' }}>Market Cap</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? filteredCoins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : filteredCoins
                                ).map(coin => (
                                    <TableRow hover key={coin.id}>
                                        <TableCell>
                                            <img 
                                                src={coin.image} 
                                                alt='' 
                                                style={{ height: '30px', width: '30px' }}
                                            />
                                        </TableCell>
                                        <TableCell>{coin.name}</TableCell>
                                        <TableCell>{coin.symbol}</TableCell>
                                        <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                                        <TableCell>
                                            {coin.price_change_percentage_24h > 0 
                                                ? (
                                                    <span 
                                                        style={{ 
                                                            color: theme.palette.mode === 'dark' 
                                                                ? theme.palette.success.main 
                                                                : theme.palette.success.dark
                                                             
                                                        }}
                                                    >
                                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                                    </span>
                                                ) 
                                                : (
                                                    <span 
                                                        style={{ 
                                                            color: theme.palette.mode === 'dark' 
                                                                ? theme.palette.error.main 
                                                                : theme.palette.error.dark
                                                        }}
                                                    >
                                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                                    </span>
                                                )
                                            }
                                        </TableCell>
                                        <TableCell>${coin.total_volume.toLocaleString()}</TableCell>
                                        <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[]}
                            colSpan={3}
                            count={coins.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            ActionsComponent={TablePaginationActions}
                            sx={{ display:'flex', justifyContent: 'center' }}
                        />
                    </Box>
                </Card>
            </Box>



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
        </React.Fragment>
    );
};

export default CoinMarkets;