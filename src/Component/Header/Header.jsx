import React from 'react'
import './Header.scss'
import LogoImg from './../../Assets/Images/logo.svg';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__package" id='vanta-canvans'>
                    <a href="/" className='header__logoimg'><img src={LogoImg} alt='LogoImg' /></a>
                    <ul className='header__list'>
                        <li className='header__item'><a href='#' className='header__webmaster'>вебмастерам</a></li>
                        <li className='header__item'><a href='#' className='header__advertiser'>рекламодателям</a></li>
                    </ul>
                    <div className='header__registratsion'>
                        <a href="#" className='header__regis-exit'>вход</a>
                        <div className='header__regis-line'>|</div>
                        <a href="#" className='header__rigis-registration'>регистрация</a>
                    </div>
                    <span className='header__languages'>
                        <p className='header__lang-ru'>RU</p>
                        <p className='header__lang-en'>EN</p>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;
