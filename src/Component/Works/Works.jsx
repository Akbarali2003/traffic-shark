import React from 'react';
import './Works.scss';
import { ShieldImg, VideoPlayerImg, CallCenterImg, MoneyImg, DiamondImg, WalletImg } from '../../Assets/Images/index';
function Works() {
    return (
        <section className='works'>
            <div className="container">
                <div className="works__pakage">
                    <h2 className='works__title'>Работать с нами это</h2>
                    <ul className='works__list'>
                        <li className='works__item'>
                            <span className='works__item-icon'><ShieldImg /></span>
                            <p className='works__item-text'>Уверенность и стабильность! Мы на рынке с 2015г.</p>
                        </li>
                        <li className='works__item'>
                            <span className='works__item-icon'><VideoPlayerImg /></span>
                            <p className='works__item-text'>Большой выбор мобильных приложений и аддонов</p>
                        </li>
                        <li className='works__item'>
                            <span className='works__item-icon'><CallCenterImg /></span>
                            <p className='works__item-text'>Дружелюбная и квалифицированная поддержка</p>
                        </li>
                        <li className='works__item'>
                            <span className='works__item-icon'><MoneyImg /></span>
                            <p className='works__item-text'>Эффективная монетизация Pop-under, Push, In-App, FB, Google и других источников трафика</p>
                        </li>
                        <li className='works__item'>
                            <span className='works__item-icon'><DiamondImg /></span>
                            <p className='works__item-text'>Эксклюзивные предложения благодаря собственному сильному баингу</p>
                        </li>
                        <li className='works__item'>
                            <span className='works__item-icon'><WalletImg /></span>
                            <p className='works__item-text'>Стабильные выплаты 1 раз в неделю от $100 после проверки качества</p>
                        </li>
                    </ul>
                    <button className='works__register-btn'>Регистрация</button>
                </div>
            </div>
        </section>
    )
}

export default Works
