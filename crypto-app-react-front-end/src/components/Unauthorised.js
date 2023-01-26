import { Link } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const Unauthorised = () => {
    
  const navigate=useNavigate();

  const gologin=()=>{
    navigate('/login')
  }

  return (
    
        <div >
      <Card style={{ width: '28rem' }} className="text-dark">
                <Card.Body>

                    <Card.Text>
                        Sorry you are not authorised. Please <Link onClick={gologin}>Login</Link>. 
                    </Card.Text>
                    
                </Card.Body>
            </Card>

            

    </div>

  )
}

export default Unauthorised