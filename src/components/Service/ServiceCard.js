import React, { useState } from 'react'

const ServiceCard = ({ image, title }) => {

    const [more, setMore] = useState(false);

    return (
        <div className='service__card'>
            <img src={image} alt='icon' className='service__card-img' />
            <h3 className='service__card-title'>{title}</h3>
            <p className='service__card-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius.
                {
                    more && `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius.`
                }

            </p>
            <button className='service__card-btn' type='button' onClick={() => setMore(!more)}>
                {!more ? 'Learn more' : 'Less'}
            </button>
        </div>
    )
}

export default ServiceCard