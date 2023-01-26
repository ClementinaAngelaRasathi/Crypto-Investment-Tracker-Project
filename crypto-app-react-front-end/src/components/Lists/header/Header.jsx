import logo from './logo.gif';
import './Header.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Header = () => {


  const navigate=useNavigate();

  const tolive=()=>{
    navigate(`/livereports`)
  }



    return(
      
      <header style={{backgroundImage: `url(${"https://media.istockphoto.com/id/1388824886/photo/cryptocurrency-concept-image.jpg?s=612x612&w=0&k=20&c=WTq1UuN_lNvfKog4VHUze4uBSZDbugB25hAZrVmgs78="}` }}>
        <img className="logo" src={logo} alt="Logo" />
        <h1>Choose your <span>favos</span></h1>
        <Button onClick={tolive}>Live Reports</Button>
        <p></p>
      </header>
    );
}
export default Header;