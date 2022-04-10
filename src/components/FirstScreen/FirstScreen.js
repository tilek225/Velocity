import React from 'react'
import './firstScreen.css'

const FirstScreen = () => {
    return (
        <section className='firstScreen'>
            <div className='container'>
                <h2 className='firstScreen__title'>This is Velocity</h2>
                <div className='firstScreen__btns'>
                    <button className='firstScreen__btn sign'>sign up</button>
                    <button className='firstScreen__btn'>Learn more</button>
                </div>
            </div>
        </section>
    )
}

export default FirstScreen