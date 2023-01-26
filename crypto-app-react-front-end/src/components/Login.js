import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);


    const [emailError, setEmailError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)

    var db_name = ``;
    var db_email = ``;
    var emailid_exists = false;
    var db_encryptedpwd = ``;
    var loginValidationStatus = false;

    // const dispatch = useDispatch();
    // console.log(jwtToken);

    const navigate=useNavigate();

    const RouteToSignPage = () => {
        navigate('/signup')
    }


    const goHome=()=>{
        navigate(`/`)
    }

    const api = axios.create({
        baseURL: `http://localhost:8080`
    })

    useEffect(() => {

        axios.get(`http://localhost:8080/cryptousers`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))

    })
    for (let i = 0; i < userDetails.length; i++) {
        if (email.toLowerCase() === (userDetails[i].id).toLowerCase()) {

            db_name = userDetails[i].name;
            db_email = userDetails[i].id;
            db_encryptedpwd = userDetails[i].password;
            emailid_exists = true
        }
    }   

    // const LoginCheck = (event) => {
    async function LoginCheck(event) {

        event.preventDefault();
        // 
        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)



        if ( email == "" || password == "" ) {
            // alert(`Please fill all the details`)
            setEmailError(`Email id doesn't exist. Please Sign Up`)
            setPasswordError(`Password doesnt match our records`)


        }
         if ( !emailid_exists ){
            // alert(`Emailid doesn't Exist`)
            setEmailError(`Email id doesn't exist. Please Sign Up`)
        }
        else if (!loginValidationStatus){
            // alert(`Password doesnt match our records`)
            setPasswordError(`Password doesnt match our records`)

        }
        else if (loginValidationStatus) {

            let credentials={

                "emailid": email,
                "password": password
            }

            api.post(`/login`, credentials)
                .then(response => {
                    console.log(response.data.jwtToken)
                    localStorage.setItem('jwtToken', response.data.jwtToken)
                    localStorage.setItem('email', email)

                })
                .catch(err => console.log(err))


                axios.get(`http://localhost:8080/cryptousers/${email}`)
                .then(response=>{
                    console.log(response.data)
                    localStorage.setItem("loggeduser",JSON.stringify(response.data))
                    
                })


                // alert("login success. Navigating to dashboard...")
                // Modal("Sucess")

                setTimeout(() => {
                    navigate('/data')  
                    // window.location.reload();
            }, 3000);
            toast.success("Login success. Navigating to dashboard...");
    
                // navigate('/data')  
                // window.location.reload();

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
    const handleClick = () => setClick(!click) 


  return (
    <div>
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
    
        <div className='container-fluid p-2'>
            
            <Row className="mt-5 pt-4 " >
                <Col lg={4} md={6} sm={9} className="p-4 m-auto shadow-lg rounded-lg "
                
                style={{ backgroundColor: '#A58CC3', borderRadius:'1%'}}  >
                    <Form style={{ backgroundColor: '#A58CC3'}} >
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
                        <h6 className='mb-3 text-center  ' >Welcome back! Please Login into Continue </h6>
                        <FloatingLabel controlId="floatingInput" label="Enter your registered Email Address" className="mb-3 text-dark" autoComplete="off" >
                            <Form.Control type="text" placeholder="Email" 
                            
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={(e) => {setEmail(e.target.value); 
                                setEmailError(``) }}
                            isInvalid = {!!emailError}
                        
                            />

                            <Form.Control.Feedback type='invalid'>
                                {emailError}
                            </Form.Control.Feedback>
                            {/* <Form.Text className="text-muted">
                                <i><b>*Please enter your registered email address</b></i>
                                </Form.Text> */}
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Enter your registered Password" className="mb-3 text-dark" autoComplete="off" >
                            <Form.Control type="password" placeholder="Password" 
                            
                            // onChange={(e) => setPassword(e.target.value)}
                            onChange={(e) => { setPassword(e.target.value) 
                                setPasswordError(``)
                            }} 
                            isInvalid = {!!passwordError}
                            />

                            <Form.Control.Feedback type='invalid'>
                                {passwordError}
                            </Form.Control.Feedback> 
                            {/* <Form.Text className="text-muted">
                                <i><b>*Please enter your password</b></i>
                                </Form.Text> */}
                                
                        </FloatingLabel>
                        <div className='text-center span2'>
                            {/* <div className="d-grid ps-5 gap-2"> */}
                            <Button type='submit'  style={{ backgroundColor: '#1D7B8A'}} className='mb-2 mt-2 m-3 btn-block'
                             onClick={LoginCheck} 
                             >Login</Button>
                            <Button type='reset' style={{ backgroundColor: '#AD1982'}} className='mb-2 mt-2 btn-block' >Reset</Button>
                        </div>
                        <div className='text-center mt-2'>
                            <Link to="/forgotpassword" className='text-light' >Forgot Password?</Link>
                        </div>
                        <div className='text-center mt-3 '>
                            <h6>New here? Please Sign Up</h6>
                            <Button style={{ backgroundColor: '#086978'}}
                            // variant="secondary"   
                            className='mb-3' 
                            onClick={RouteToSignPage}
                             >Sign Up</Button>
                        </div>
                        {/* <div className='text-center'>

                            <Button variant="success" className='mb-3' 
                            // onClick={RouteToHomePage} 
                            >Back to Home</Button>
                        </div> */}
                    </Form>
                </Col>
            </Row>

                    <br></br>
                    <br></br>
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
        </div>
  )
}

export default Login