import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <h1 className='header__title'>Velocity</h1>

                    <ul className='header__list'>
                        <li className='header__item'>Home</li>
                        <li className='header__item'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header