import axios from 'axios'
import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from "emailjs-com";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnquiryForm = () => {

    const [name, setName] = useState(``);
    const [emailid, setEmailid] = useState(``);
    const [subject, setSubject] = useState(``);
    const [message, setMessage] = useState(``);



    // function sendEmail(e) {
    //     e.preventDefault();

    // emailjs.sendForm('service_kna9tc1', 'template_pk46url', e.target, 'qIIs7110xM0zVKv1Y')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     e.target.reset()
    //     // alert("Email sent successfully")
    //     // notify();

        
        
    // }

    

    const toenquiry=(event)=>{
        event.preventDefault()

        var enquiry={

            "name":name,
            "emailid":emailid,
            "subject":subject,
            "message":message
        }
    
        axios.post(`http://localhost:8081/enquiry`, enquiry)
          .then(res => console.log(res))
          .catch(error => console.log(error))

          toast.success(`Enquiry submitted successfully`)
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
        <h3 className='text-center'>Post your queries and we will be back soon!</h3>
<div className="container">
            <form 
            // onSubmit={sendEmail}
            >
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required={true}   onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" required={true} placeholder="Email Address"  name="email" onChange={(e) => {
                        setEmailid(e.target.value);
                    }}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required onChange={(e) => {
                        setSubject(e.target.value);
                    }}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" onChange={(e) => {
                        setMessage(e.target.value);}}
                        ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info"  onClick={toenquiry}  value="Send Message"></input>
                        </div>
                    </div>
                </form>
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

export default EnquiryForm