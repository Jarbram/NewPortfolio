import React from 'react'
import './portfolio.css'


import Portfolio1 from '../../assets/portfolio1.jpg'
import Portfolio2 from '../../assets/portfolio2.jpeg'
import Portfolio3 from '../../assets/portfolio3.jpg'
import Portfolio4 from '../../assets/portfolio4.jpg'
import Portfolio5 from '../../assets/portfolio5.jpg'
import Portfolio6 from '../../assets/portfolio6.jpg'
import Portfolio7 from '../../assets/portfolio7.png'
import Portfolio8 from '../../assets/portfolio8.jpg'
import Portfolio10 from '../../assets/portfolio10.jpg'


const Portfolio = () => {

const portfolio = [
    {id:1,image : Portfolio1 ,alt:'photo',title:'photo', description:'photo',},
    {id:2,image : Portfolio2 ,alt:'photo',title:'photo', description:'photo',},
    {id:3,image : Portfolio3 ,alt:'photo',title:'photo', description:'photo',},
    {id:4,image : Portfolio4 ,alt:'photo',title:'photo', description:'photo',},
    {id:5,image : Portfolio5 ,alt:'photo',title:'photo', description:'photo',},
    {id:6,image : Portfolio6 ,alt:'photo',title:'photo', description:'photo',},
    {id:7,image : Portfolio7 ,alt:'photo',title:'photo', description:'photo',},
    {id:8,image : Portfolio8 ,alt:'photo',title:'photo', description:'photo',},
    {id:9,image : Portfolio10 ,alt:'photo',title:'photo', description:'photo',},
]

  return (
    <div className='portfolio'>
        <h1>Made For You</h1>
    <div className='portfolio-container'>
            {
                portfolio.map((portfolios) => (
                    <div key={portfolios.id} >
                        <div className='portfolio-item'>
                            <div className='portfolio-container-image'>
                            <img src={portfolios.image} alt={portfolios.alt} />
                            </div>
                            <div className='portfolio-info'>
                                <h3>{portfolios.title}</h3>
                                <p>{portfolios.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
    </div>
    </div>
  )
}

export default Portfolio