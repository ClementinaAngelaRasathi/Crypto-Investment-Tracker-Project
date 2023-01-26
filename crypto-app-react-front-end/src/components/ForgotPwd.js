import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPwd = () => {
    const navigate = useNavigate()

    const goHome=()=>{
        navigate(`/`)
    }
    const [userEmail, setUserEmail] = useState(``)
    const [securePin, setSecurePin] = useState(``)
    const [newPwd, setNewPwd] = useState(``)
    const [userDetails, setUserDetails] = useState([]);


    const [emailIdError, setEmailIdError] = useState(``)
    const [pinError, setPinError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)



    var userExist = ``
    var index = 0
    var db_encryptedpwd = ``
    var oldPwdMatch = false
    var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/
    // const api = axios.create({
    //     baseURL: `http://localhost:8080`
    // })

    useEffect(() => {

        axios.get(`http://localhost:8080/cryptousers`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))

    })

    for (let i = 0; i < userDetails.length; i++) {
        if (userEmail === userDetails[i].id) {
            userExist = `yes`
            index = i
            db_encryptedpwd = userDetails[i].password

        }
    }




    // const changePwd = (event) => {
    async function changePwd(event) {
        event.preventDefault();
        oldPwdMatch = await bcrypt.compare(newPwd, db_encryptedpwd)

        if(userEmail === '' && securePin === '' && newPwd === '' ){
            setEmailIdError(`Email ID is Required`)
            setPinError(`PIN is Required`)
            setPasswordError(`Password is Required`)
        }

        else if(userEmail === '' ){
            setEmailIdError(`Email ID is Required`)
        }

        else if (!(userExist === `yes`)) {
            setEmailIdError(`Email ID doesn't exist.`)
        }
        else if (securePin === ''){
            setPinError(`PIN is Required`)
        }
        else if (!(securePin === `1234`)) {
            setPinError(`Incorrect PIN`)
        }
        else if (newPwd === ''){
            setPasswordError(`Password is Required`)

        }
        else if (newPwd === "") {
            setPasswordError(`Password field should not be empty`)
        }
        else if (!regExPwd.test(newPwd)) {
            setPasswordError(`Please Create a strong password`)
        }
        else if (oldPwdMatch) {
            setPasswordError(`New Password should not be your old password`)
        }
        
        
        else {

            let newPwdUpdate = {
                "id": userDetails[index].id,
                "name": userDetails[index].name,
                "pancardNo": userDetails[index].pancardNo,
                "accno": userDetails[index].accno,
                "mobno": userDetails[index].mobno,
                "password": newPwd
            }

            axios.put(`http://localhost:8080/cryptousers`, newPwdUpdate)
                .then(res => console.log(res))
                // alert(`Dear ${userDetails[index].name} your passoword is now updated. 
                //         Navigating you to login page...`))
                .catch(err => console.log(err))
                // alert(`Dear ${userDetails[index].name} your passoword is now updated. 
                // Navigating you to login page...`)
                
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                
                toast.success(`Dear ${userDetails[index].name} your passoword is now updated. 
                Navigating you to login page...`);

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

        <Container fluid p-2 >
            <Row className="mt-4 pt-5 ">
                <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded-lg" style={{ backgroundColor: '#A58CC3',borderRadius:'1%'}} >
                    <Form style={{ backgroundColor: '#A58CC3'}} >
                    <h4 className='text-center' onClick={goHome}>
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
                        <h4 className='mb-3 text-center' >Password Reset</h4>

                        <FloatingLabel controlId="floatingInput" label="Registered User Email" className="mb-3 text-dark" autoComplete="off" >
                            <Form.Control type="email" placeholder="name@example.com"
                                onChange={(e) => { setUserEmail(e.target.value);
                                    setEmailIdError(``)
                                }}
                                isInvalid={!!emailIdError}
                            />
                        <Form.Control.Feedback type='invalid'>
                            {emailIdError}
                        </Form.Control.Feedback>
                        {/* <Form.Text className="text-muted">
                                <i><b>*Please enter your registered email address</b></i>
                                </Form.Text> */}
                        </FloatingLabel>
                        

                        <FloatingLabel controlId="floatingPassword" label="Secure PIN" className="mb-3 text-dark" autoComplete="off" >
                            <Form.Control type="password" placeholder="Secure PIN"
                                onChange={(e) => { setSecurePin(e.target.value) 
                                    setPinError(``)
                                }}
                                isInvalid={!!pinError}
                            />
                        <Form.Control.Feedback type='invalid'>
                            {pinError}
                        </Form.Control.Feedback>
                        {/* <Form.Text className="text-muted">
                                <i><b>*Please enter your secure PIN</b></i>
                                </Form.Text> */}
                        </FloatingLabel>
                        

                        <FloatingLabel controlId="floatingPassword" label="New Password"  className="mb-3 text-dark" autoComplete="off" >
                            <Form.Control type="password" placeholder="New Password"
                                onChange={(e) => { setNewPwd(e.target.value) 
                                    setPasswordError(``)
                                }}
                                isInvalid={!!passwordError}
                            />
                            
                            <Form.Control.Feedback type='invalid'>
                                {passwordError}
                            </Form.Control.Feedback>
                            {/* <Form.Text className="text-muted">
                                <i><b>*Please enter your new password</b></i>
                                </Form.Text> */}
                        </FloatingLabel>

                        <div className='text-center span2'>
                            {/* <div className="d-grid ps-5 gap-2"> */}
                            <Button type='submit' style={{ backgroundColor: '#1D7B8A'}}  className='mb-2 mt-2 m-3 btn-block' onClick={changePwd} >Change Password</Button>
                            <Button type='reset' style={{ backgroundColor: '#AD1982'}} className='mb-2 mt-2 btn-block' >Reset</Button>
                        </div>
                        {/* <div className='text-center mt-2 '>
                            <Button variant="secondary" className='mb-3' onClick={RouteToSignUpPage} >Sign Up</Button>
                        </div> */}
                        {/* <div className='text-center mt-2 '>
                            <Button variant="primary" className='mb-3' onClick={RouteToLoginPage} >Login</Button>
                        </div> */}
                        {/* <div className='text-center'>

                            <Button variant="success" className='mb-3' onClick={RouteToHomePage} >Back to Home</Button>
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

        </Container>

        </div>
    )
}

export default ForgotPwd
