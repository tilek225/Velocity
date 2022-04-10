import React from 'react'
import bg from './bg.png'

const SomeCard = ({ title }) => {
    return (
        <div className='some__content'>
            <img src={bg} alt="bg" className='some__content-img' />
            <h2 className='some__subtitle'>{title}</h2>
            <p className='some__subtext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing ebuttont. Suspendisse
                varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
            </p>
        </div>
    )
}

export default SomeCard