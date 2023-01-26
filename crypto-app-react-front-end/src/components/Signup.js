import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import Crypto from '../assets/hero-img.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Username (@Id)
// Name
// Email-id
// Mobile no.
// Password

const Signup = () => {
    // Getting all the userinputs as a variable    

    // const [username, setUsername] = useState(``);
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [mobNo, setMobNo] = useState(``);
    const [accno, setAccno] = useState(``);
    const [panNo, setPanNo] = useState(``);
    const [password, setPassword] = useState(``);


    const [emailError, setEmailError] = useState(``);
    const [usernameError, setUsernameError] = useState(``);
    const [panError, setPanError] = useState(``);
    const [accNoError, setAccNoError] = useState(``);
    const [mobNoError, setMobNoError] = useState(``);
    const [passwordError, setPasswordError] = useState(``);


    

    const navigate=useNavigate();

    const RoutToLoginPage=()=>{
        navigate('/login')
    }


    const goHome=()=>{
        navigate(`/`)
    }
    

    var [walletUsers, setWalletUsers] = useState([]);
    // const [statusCode, setStatusCode] = useState(0);
    // const [error, setError] = useState(``)
    

    var name_exists;
    var email_exist;




    //Regex Variable to compare
    var regExEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
    var regexUsername = /[A-Za-z0-9]{3,30}/
    var regexName = /[A-Za-z]{3,30}/
    var regex10digits = /^[0-9]\d{09}$/ // to validate phone no 
    // var regexAddress = /^[a-zA-Z0-9(?:_*.\-\\,\s)?]{10,100}$/
    var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/

    //setting up base url for request
    const api = axios.create({
        baseURL: `http://localhost:8080/cryptousers`
    })

    useEffect(() => {

        api.get(`http://localhost:8080/cryptousers`)
            .then(res => setWalletUsers(res.data))
            .catch(err => console.log(err))

    })


    for (let i = 0; i < walletUsers.length; i++) {
        if (email === walletUsers[i].id ) {

            email_exist = true
            // alert("username already exist")
        }

    }

    for (let i = 0; i < walletUsers.length; i++) {
        if (name === walletUsers[i].name ) {

            name_exists = true
            // alert("username already exist")
        }

    }

    const SignUp = (event) => {
        event.preventDefault()
        if(email === '' && name === '' && mobNo === '' && accno === '' && panNo === '' && password === ''){
        //     setEmailError(`Email ID is Required`)
        //     setUsernameError(`Username is Required`)
        //     setPanError(`Pan is Required`)
		// setAccNoError(`Account No is Required`)
		// setMobNoError(`Mobile No is Required`)
		// setPasswordError(`Password is Required`)

        toast.error(`Pease fill in all the details`)

        }
        else if (!regexUsername.test(name)) {
            // alert(`Userame length must be between 3 -20 characters, Only Alpha-numeric allowed`)
            // setUsernameError(`Userame length must be between 3 -20 characters, use only alphabets. numbers & special charaters not allowed`) 
            toast.error(`Userame length must be between 3 -20 characters, use only alphabets. numbers & special charaters not allowed`)

         }

        else if (name_exists) {
            // alert(`Username already exist. Please use a different a username to continue`)
            toast.error(`Username already exist. Please use a different a username to continue`)

        }

        else if (!regexName.test(name)) {
            // alert(`Please enter a valid name use only alphabets`)
            toast.error("Please enter a valid name use only alphabets")

        }
        else if (!regExEmail.test(email)) {
            // alert(`Please enter a valid email id`)
            // setEmailError(`Please enter a valid email id`)
            toast.error(`Please enter a valid email id`)

        }
        else if (email_exist) {
            // alert(`Email ID already exist. Please use a different email id to continue or Login`)
            toast.error("Email ID already exist. Please use a different email id to continue or Login`")

        }
        else if (!regex10digits.test(accno)) {
            // setAccNoError(`Please Enter a valid 10 digit account number`)
            toast.error(`Please Enter a valid 10 digit account number`)

        }
        else if (!regexUsername.test(panNo)) {
            // alert(`Address length must be between 10 -100 characters`)
            // setPanError(`Pan No must be between 10 -100 characters`)
            toast.error(`Pan No must be between 10 -100 characters`)

        }
        
        else if (!regex10digits.test(mobNo)) {
            // alert(`Please Enter a valid 10 digit mobile number`)
            // setMobNoError(`Please Enter a valid 10 digit mobile number`)
            toast.error(`Please Enter a valid 10 digit mobile number`)

        }
        
        else if (!regExPwd.test(password)) {
            // alert(`Please create a strong password`)
            // setPasswordError(`Please create a strong password`)
            toast.error(`Please create a strong password`)

        }



        else {

            var newUser = {
                "id": email,
                "name": name,
                // "emailid": email,
                "mobno": mobNo,
                "accno":accno,
                "pancardNo":panNo,
                "password": password
            }


            axios.post(`http://localhost:8080/cryptousers`, newUser)
                .then(response => console.log(response))
                .catch(err => console.log(err))

                setTimeout(() => {
                    navigate("/login")
                }, 2000);
           
            // alert("Sign Up successful. Redirecting to login...")
            toast.success(`Sign Up successful. Redirecting to login...`)

        
        }

    }

    // useEffect(() => {
    //     document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')`;
    
    //   }, [])

    const toHome=()=>{
        navigate('/login')
    }


    const totable=()=>{
        navigate('/news')
    }

    const tolist=()=>{
        navigate('/selection')
    }
   
    const [click, setClick] = useState(false)

    

    return (
        <div  style={{backgroundSize: 'cover',  marginTop: '-10px'}}>
       <ToastContainer/>


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
                >Latest News</a>
                </ul>
        </ul>
        
        </div>
        </div>  


        <Container fluid   >
            <Row className="pt-3 mt-4">
                <Col lg={4} md={6} sm={9} className="p-4 m-auto shadow-lg rounded-lg " 
                style={{ backgroundColor: '#A58CC3',
                 borderRadius:'1%'}}
                 >
                    <Form  >
                    <h4 className='text-center' onClick={goHome} >
                            <img
                            alt=""
                            src="https://www.bing.com/th?id=OSK.afa3a68f24db08580c55a8cdbfddaa84&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            onClick={goHome}
                            />{' '}
                                Natwest Crypto Gallery
                            </h4>
                    <FloatingLabel 
                    controlId="Username" label="Username" className="mb-3 text-dark">
                    <Form.Control type="text" placeholder="Username" autoComplete='off'
                    // onChange={(e)=> setName(e.target.value)}
                    onChange={(e) => {
                        setName(e.target.value);
                        setUsernameError(``)
                    }}
                        isInvalid={!!usernameError}
    
                     required={true}
                    />
                     <Form.Control.Feedback type='invalid'>
                        {usernameError}
                    </Form.Control.Feedback>
    
                    {/* <Form.Text className="text-muted">
                        <i><b>*Please enter your username</b></i>
                        </Form.Text>
                         */}
                </FloatingLabel>
                <FloatingLabel 
                    controlId="Email address" label="Email address" className="mb-3 text-dark">
                    <Form.Control type="email" placeholder="name@example.com" required 
                    // onChange={(e)=> setEmail(e.target.value)}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(``)
                    }}
                    isInvalid={!!emailError}
                    />
                    <Form.Control.Feedback type='invalid'>
                    {emailError}
    
                    </Form.Control.Feedback>
{/*     
                    <Form.Text className="text-muted">
                        <i><b>*Please enter a valid email id(xxx@xx.com)</b></i>
                        </Form.Text> */}
    
                </FloatingLabel>
                <FloatingLabel 
                    controlId="Bank Account Number" label="Bank Account Number" className="mb-3 text-dark">
                    <Form.Control type="number" placeholder="Address"
                    // onChange={(e)=> setAddress(e.target.value)}
                    onChange={(e) => {
                        setAccno(e.target.value);
                        setAccNoError(``)
                    }}
                    isInvalid={!!accNoError}
    
                     required={true}/>
                     <Form.Control.Feedback type='invalid'>
                        {accNoError}
                    </Form.Control.Feedback>
    
                    {/* <Form.Text className="text-muted">
                        <i><b>*Please enter your account number</b></i>
                        </Form.Text> */}
                </FloatingLabel>
                <FloatingLabel 
                    controlId="Pan Card Number" label="Pan Card Number" className="mb-3 text-dark">
                    <Form.Control type="text" placeholder="Pan Card Number" required 
                    // onChange={(e)=> setAccno(e.target.value)} 
                    onChange={(e) => {
                        setPanNo(e.target.value);
                        setPanError(``)
                    }}
                    isInvalid={!!panError}
                    />
                     <Form.Control.Feedback type='invalid'>
                        {panError}
                    </Form.Control.Feedback>
    
                    {/* <Form.Text className="text-muted">
                        <i><b>Please enter your PAN(1-10)characters</b></i>
                        </Form.Text> */}
                </FloatingLabel>
    
                <FloatingLabel 
                    controlId="Phone Number" label="Phone Number"  className='text-dark'>
                    <Form.Control type="number" placeholder="Phone Number" required 
                    // onChange={(e)=> setMobNo(e.target.value)}
                    onChange={(e) => {
                        setMobNo(e.target.value);
                        setMobNoError(``)
                    }}
                    isInvalid={!!mobNoError}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {mobNoError}
                    </Form.Control.Feedback>
    
                    {/* <Form.Text className="text-muted">
                            <i><b>*Please Enter Your 10 digit mobile number</b></i>
                        </Form.Text> */}
                        
                        <br></br>
    
                </FloatingLabel>
                <FloatingLabel controlId="Password" label="Password" className='text-dark'>
                    <Form.Control type="password" placeholder="Password"required 
                    // onChange={(e)=> setPassword(e.target.value)}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(``)
                    }}
                    isInvalid={!!passwordError}
    
                    />
                    <Form.Control.Feedback type='invalid'>
                        {passwordError}
                    </Form.Control.Feedback>
    
                    {/* <Form.Text className="text-muted">
                            <i><b>*Your password should contain atleast 8 characters. Must Contain 1 uppercase,  1 lowercase, 1 numeric and atleast 1 symbols ( @ # % ^ & - _ )</b></i>
                        </Form.Text> */}
    
                </FloatingLabel>
                    <div className='text-center span2'>
                        <Button type='submit' style={{ backgroundColor: '#1D7B8A'}} className='mb-2 mt-2 m-3 btn-block' 
                        onClick={SignUp}
                         >Sign Up</Button>
                        <Button type='reset' style={{ backgroundColor: '#AD1982'}} className='mb-2 mt-2 btn-block' >Reset</Button>
                    </div>
                    <div className='text-center mt-1'>
                        <h6>Already have an account? Please login</h6>
                        {/* onClick={RouteToLoginPage} */}
                        <Button style={{ backgroundColor: '#086978'}} className='mb-3'
                        onClick={RoutToLoginPage} 
                        >Login</Button>
    
                    </div>
                    
                </Form>
            </Col>
        </Row>
    
    </Container>
    <br></br>
    <br></br>
    


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

export default Signup
