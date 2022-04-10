import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className='footer__content'>
                        <ul className='footer__list'>
                            <h2 className='footer__title'>about velocity</h2>
                            <p className='footer__text'> Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra ornare,
                                eros dolor interdum nulla,
                                ut commodo diam libero vitae erat.</p>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <ul className="footer__list">
                            <h2 className="footer__title">
                                useful links
                            </h2>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Phasellus gravida semper nisi
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Suspendisse nisl elit
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Dellentesque habitant morbi
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Dellentesque habitant morbi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <ul className="footer__list">
                            <h2 className="footer__title">
                                social
                            </h2>
                            <li className="footer__list-item">
                                <i className="fab fa-twitter"></i>
                                <a href="#" className="footer__link">
                                    Twitter
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-facebook-f"></i>
                                <a href="#" className="footer__link">
                                    Facebook
                                </a>
                            </li>
                            <li class="footer__list-item">
                                <i className="fab fa-pinterest-p"></i>
                                <a href="#" className="footer__link">
                                    Pinterest
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-google"></i>
                                <a href="#" className="footer__link">
                                    Google
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-instagram"></i>
                                <a href="#" className="footer__link">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                Copyright Velocity Inc. Made in Webflow.
            </div>
        </footer>
    )
}
export default Footer