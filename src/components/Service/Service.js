import React from 'react'
import service from './service.png'
import service2 from './service2.png'
import './service.css'
import ServiceCard from './ServiceCard'


const Service = () => {
    return (
        <section className='service'>
            <div className='container'>
                <h2 className='service__title'>services</h2>
                <p className='service__text'>This is some text inside of a div block.</p>

                <div className='service__row'>
                    <ServiceCard image={service} title="SERVICES one" />
                    <ServiceCard image={service2} title="SERVICES two" />

                </div>
            </div>
        </section>
    )
}

export default Service