import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Homepage.css'

const DisplayCard = ({ title, description, url, urlToImage }) => {


    return (
        <div className="container">
        <div className="news-app text-dark">
        <div className='news-item text-dark'>
            <img className='news-img ' src={urlToImage} alt={urlToImage} />
            <h3 ><a className='text-dark' href={url} target='_blank'>{title}</a></h3>
            <p >{description}</p>  </div>
    </div>
    </div>
    )
}

export default DisplayCard
