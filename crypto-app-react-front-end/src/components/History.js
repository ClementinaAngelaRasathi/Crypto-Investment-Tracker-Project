import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar, Table } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const History = () => {


    const [history, setHistory] = useState([])

    var loggeduser=JSON.parse(localStorage.getItem("loggeduser")) 


    useEffect(() => {
        getHistory();
      }, );


    const getHistory = () => {
        axios.get(`http://localhost:8080/watchlist/emailid?emailid=${loggeduser.id}`)
          .then(response => setHistory(response.data))
          .catch(error => console.log(error))
      }

    // const remove=(e)=>{
        async function remove(e){
        console.log(e.target.id);

        var id=e.target.id

        var deletedCoin=""


       var response = await axios.delete(`http://localhost:8080/watchlist/${id}`)
        .then(response=>{
            
            console.log(response)
            deletedCoin=response.data.name}
        )
        .catch(err=>console.log(err))
        console.log(response);
        console.log(deletedCoin);
        // alert(`${deletedCoin} is successfully removed`)
        toast.success(`${deletedCoin} is successfully removed`)
    }

    const navigate=useNavigate();

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


<Table striped bordered hover className='text-light '>
        <thead className='table-dark'>
          <tr >
            <th >Id</th>
            <th>Current Price</th>
            <th>Email id</th>
            <th>Last updated</th>
            <th>Name</th>
            <th>Price Change</th>
            <th>Yay or Nay!!</th>

          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#F1CD83'}} >
          {
            history.map(data => (
          <tr >
            <td className='text-dark'>{data.id}</td>
            <td className='text-dark'>{data.currentprice}</td>
            <td className='text-dark'>{data.emailid}</td>
            <td className='text-dark'>{data.lastupdated}</td>
            <td className='text-dark'>{data.name}</td>
            <td className='text-dark'>{data.pricechange}</td>
            <td><Button id={data.id} onClick={remove}>Remove</Button></td>
          </tr>
          ))}
        </tbody>
        
      </Table>


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

export default History