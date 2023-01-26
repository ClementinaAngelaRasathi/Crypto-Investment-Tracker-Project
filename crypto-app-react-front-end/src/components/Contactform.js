import React, { useState } from 'react'
import emailjs from "emailjs-com";
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Contactform = () => {

    

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_kna9tc1', 'template_pk46url', e.target, 'qIIs7110xM0zVKv1Y')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        toast.success('Email sent successfully!')
        // alert("Email sent successfully")
        // notify();
    }

    // const notify = () => {toast.success('Email sent successfully!')};

    // const [email, setEmail] = useState(``);

    // if(email=""){
    //     toast.error('Email required!')
    // }

    const navigate=useNavigate();


    const toHome=()=>{
        navigate('/login')
    }

    const goHome=()=>{
        navigate(`/`)
    }

    const totable=()=>{
        navigate('/news')
    }

    const tolist=()=>{
        navigate('/selection')
    }
   
    const [click, setClick] = useState(false)


  return (
    <div>

<ToastContainer />

<div className='header'>
    <div className='container'>
    {/* <img
                    alt=""
                    src="https://www.bing.com/th?id=OSK.afa3a68f24db08580c55a8cdbfddaa84&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM"
                    // width="30"
                    // height="30"
                    // className="d-inline-block align-top"
                    onClick={goHome}
                    />{' '} */}
                    {/* <h1>Nat<span className='primary'>West Group</span></h1> */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <ul>
                <a onClick={goHome}>Home</a>
                </ul>
                <ul>
                <a onClick={toHome}>Login</a>
                </ul>
                <ul>
                <a  onClick={tolist}>Quick Cart</a>
                </ul>
                <ul>
                <a 
                onClick={totable}
                >News</a>
                </ul>
        </ul>
        
        </div>
        </div> 

                    <h4 className='text-center'>To use a bank account/virtual cash as a payment method please send a request via the below form.</h4>

            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" 
                            // onClick={notify}
                            ></input>
                        </div>
                        <br></br>
                        {/* <Button className="col-8 form-group pt-2 mx-auto" onClick={notify}>Send email</Button> */}
                        {/* <ToastContainer /> */}

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

export default Contactform