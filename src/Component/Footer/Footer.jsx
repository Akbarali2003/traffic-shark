import React from 'react';
import './Footer.scss';
import Logo from '../../Assets/Images/logo.svg';
import { Arrow, Email, Tlegram, Skypename } from '../../Assets/Images/index';
function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__package">
                    <a href="/" className='footer__logo'><img src={Logo} alt="logo" /></a>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <p className='footer__item-discription'>Все права защищены. <br /> Traffic Shark @ 2015-2021</p>
                            <a href="#" className='footer__item-link'>Terms & Conditions</a>
                            <a href="#" className='footer__item-link'>Privacy police</a>
                        </li>
                        <li className='footer__item'>
                            <a href='#' className='footer__item-site'>
                                <Arrow />
                                Веб-мастерам
                            </a>
                            <a href='#' className='footer__item-site'>
                                <Arrow />
                                Рекламодателям
                            </a>
                        </li>
                        <li className='footer__item'>
                            <a href='#' className='footer__item-chanel'>
                                <Email />
                                partner@trafficshark.pro
                            </a>
                            <a href="#"  className='footer__item-chanel'>
                                <Tlegram />
                                @telegramname
                            </a>
                            <a href="#"  className='footer__item-chanel'>
                                <Skypename />
                                @skypename
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
