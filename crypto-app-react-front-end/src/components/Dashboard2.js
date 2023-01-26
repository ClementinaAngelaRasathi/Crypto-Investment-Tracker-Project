import React from 'react'
import { Button, Col, Container, Image, Nav, Navbar, Row, Table } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import profile from '../assets/profile.jpg'



const Dashboard2 = () => {


    const user=localStorage.getItem('loggeduser')
    console.log(user);
    const loggeduser=JSON.parse(user)
    console.log(loggeduser);

    const navigate=useNavigate();

    const goHome=()=>{
        navigate(`/`)
        localStorage.clear();
    }

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


  return (
    <div>

<Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#3D1E59'}} >
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


<div>
   
      <Container fluid >
        <Row className="mt-5 pt-3 ">
          <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#C8B9D6', borderRadius: '1%' }} className="p-3 m-auto shadow-lg rounded-lg " >
            <h4 className='text-center' >Your Profile Info</h4>
            <div className='d-flex align-items-center justify-content-center' >
            <Image
              className="mb-4"
              src={profile}
              width={200}
              height={120}
              alt="171x180"
              rounded
              // roundedCircle
            />
            </div>

            <Table variant="secondary" >
      <thead>
        <tr>
          <th colSpan={2}>Basic Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Email</td>
          <td>{loggeduser.id}</td>
        </tr>
        <tr>
          <td>Userame</td>
          <td>{loggeduser.name}</td>
        </tr>
        <tr>
          <td>PAN</td>
          <td>{loggeduser.pancardNo}</td>
        </tr>
        <tr>
          <td>Account No</td>
          <td>{loggeduser.accno}</td>
        </tr>
        <tr>
          <td>Mobile No</td>
          <td>{loggeduser.mobno}</td>
        </tr>
      </tbody>
    </Table>
            

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

export default Dashboard2