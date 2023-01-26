import './LiveReports.css';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const LiveReports = () => {
    const [reportList, setReportList] = useState([]);
    const favArr = useSelector(state => state.favArr);
    
    useEffect(() => {
        if (favArr.length > 0) { // Check if favArr isn't empty
            setReportList(favArr);
        }
    }, [])

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

    

    return(
        <div>

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

        <section className="reports-section">
            <h2 >List Reports. To add them forever into your favourite list, please login</h2>
            {favArr.length === 0 ? <h3>Your report list is empty</h3> : <ol>
                {reportList.map(item => {
                    return(
                        <li key={item}>{item.toUpperCase()}</li>
                    );
                })}
             </ol>}
        </section>


        <div className='footer fixed-bottom'>
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
}
export default LiveReports;