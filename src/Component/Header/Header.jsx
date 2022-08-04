import React, { useRef, useState } from 'react';
import './Header.scss';
import LogoImg from './../../Assets/Images/logo.svg';
import { NavLink } from 'react-router-dom';
function Header({ borderColorHome, borderColorAbout }) {
    const animationRef = useRef();
    const [color, setColor] = useState(0);
    const [bordercount, setBorderCount] = useState(0);
    const home = useRef();
    const about = useRef();
    return (
        <header className='header'>
            <div className="container">
                <div className="header__package" id='vanta-canvans'>
                    <a href="/" className='header__logoimg'><img src={LogoImg} alt='LogoImg' /></a>
                    <ul className='header__list'>
                        <li className='header__item' ref={home} style={{ borderColor: (bordercount == 0) ? `${borderColorHome}` : '#fff' }} >
                            <NavLink className='header__webmaster' to={'/'} onClick={() => {
                                setBorderCount(0)
                                about.current.classList('.border')
                            }} >вебмастерам</NavLink>
                        </li>
                        <li className='header__item' ref={about} style={{ borderColor: (bordercount == 0) ? `${borderColorAbout}` : '#fff' }}>
                            <NavLink to={'/about'} className='header__advertiser' onClick={() => {
                                setBorderCount(1)
                                home.current.classList('.border')
                            }} >рекламодателям</NavLink>
                        </li>
                    </ul>
                    <div className='header__registratsion'>
                        <NavLink to="/login" className='header__regis-exit'>вход</NavLink>
                        <div className='header__regis-line'>|</div>
                        <NavLink to="/register" className='header__rigis-registration'>регистрация</NavLink>
                    </div>
                    <span className='header__languages'>
                        <p className='header__lang-ru' style={{ color: `${color == 0 ? '#fff' : '#919191'}` }} onClick={() => {
                            animationRef.current.classList.remove('start-en')
                            animationRef.current.classList.add('start-ru')
                            setColor(0)
                        }}>RU</p>
                        <p className='header__lang-en' style={{ color: `${color == 1 ? '#fff' : '#919191'}` }} onClick={() => {
                            animationRef.current.classList.remove('start-ru')
                            animationRef.current.classList.add('start-en')
                            setColor(1);
                        }}>EN</p>
                        <span className='animation-ref start-ru' ref={animationRef}></span>
                    </span>
                </div>
            </div>
        </header >
    )
}

export default Header;
