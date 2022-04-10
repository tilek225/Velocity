import React from 'react'
import './inside.css'
import AwesomeCard from './AwesomeCard'
import icon from './icon.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'

const Inside = () => {
    return (
        <section className='inside'>
            <div className='container'>
                <h2 className='inside__title'>what we do</h2>
                <p className='inside__text'>This is some text inside of a div block.</p>

                <div className='inside__row'>
                    <AwesomeCard
                        image={icon}
                        title="Graphic Design"
                    />
                    <AwesomeCard
                        image={icon2}
                        title="Awesome code"
                    />
                    <AwesomeCard
                        image={icon3}
                        title="free template"
                    />
                </div>
            </div>
        </section >
    )
}

export default Inside