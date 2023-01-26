import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'
import { useNavigate } from 'react-router-dom'


const News = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=a1051a86bb1e4d469052882b7f788782`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
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
    const handleClick = () => setClick(!click) 

    
  return (
    <div>

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
        <h4 data-testid="Newss" className='text-center'>Latest news on Crypto</h4>

        {articles.map(article => {
                return(
                    <DisplayCard 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })} 

    </div>
    </div>
  )
}

export default News