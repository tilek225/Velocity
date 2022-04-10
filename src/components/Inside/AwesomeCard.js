import React from 'react'
import './inside.css'


const AwesomeCard = ({ image, title }) => {
    return (
        <div className='inside__card'>
            <img className='inside__card-img' alt='icon' src={image} />
            <h3 className='inside__card-title'>{title}</h3>
            <p className='inside__card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    )
}

export default AwesomeCard