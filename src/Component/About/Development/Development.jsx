import React from 'react';
import './Development.scss';
import { ArrowTop, IOS, Android, Connection } from './../../../Assets/Images/index';
import Cleaner from '../../../Assets/Images/cleaner.png';
import Clicker from '../../../Assets/Images/clicker.png';
import CoinLord from '../../../Assets/Images/coin-lord.png';
import Filter from '../../../Assets/Images/filter.png';
import Fitness from '../../../Assets/Images/fitness.png';
import FoxVpn from '../../../Assets/Images/fox-vpn.png';
import Screen from '../../../Assets/Images/screen.png';
import VpnUltrita from '../../../Assets/Images/vpn-ult.png';
import HotVpn from '../../../Assets/Images/hot-vpn.png';
import VpnPro from '../../../Assets/Images/vpn-pro.png';

function Development() {
    return (
        <section className='development'>
            <div className="container">
                <div className="development__package">
                    <h3 className='development__title'>разработка</h3>
                    <p className='development__discription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                    </p>
                    <div className='development__open-page'>
                        <hr className='development__open-page-line' />
                        <span className='development__open-page-icon'><ArrowTop /></span>
                    </div>
                    <div className="development__open-list">
                        <div className="development__application">
                            <h4 className='development__application-title'>разрабатываем мобильные приложения под ключ</h4>
                            <ul className="development__application-list">
                                <li className="development__application-item">
                                    <span className="development__application-item-ios">
                                        <IOS />
                                        <p className='development__application-item-text'>IOS</p>
                                    </span>
                                    <hr className="development__application-item-line" />
                                    <span className="development__application-item-texnoligy">
                                        <p className="development__application-item-texnoligy-text">Используемые технологии:</p>
                                        <p className="development__application-item-texnoligy-codelang">Swift</p>
                                    </span>
                                </li>
                                <li className="development__application-item">
                                    <span className="development__application-item-android">
                                        <Android />
                                        <p className='development__application-item-text'>Android</p>
                                    </span>
                                    <hr className="development__application-item-line" />
                                    <span className="development__application-item-texnoligy">
                                        <p className="development__application-item-texnoligy-text">Используемые технологии:</p>
                                        <p className="development__application-item-texnoligy-codelang">Java, Kotlin</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="development__developer">
                            <h4 className='development__developer-title'>Полный цикл разработки</h4>
                            <p className='development__developer-text'>От идеи, прототипа, дизайна и технического задания до публикации и поддержки приложения!</p>
                            <Connection />
                            <p className='development__developer-discription'>Так же мы успешно разрабатываем свои IOS | Android приложения, поэтому мы отлично понимаем, что необходимо нашим партнерам</p>
                        </div>
                        <div className="development__product">
                            <h4 className="development__product-title">наши продукты</h4>
                            <ul className="development__product-list">
                                <li className="development__product-item">
                                    <img src={Cleaner} alt="cleaner" />
                                    <p className='development__product-item-text'>Ghost Cleaner</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={FoxVpn} alt="fox-vpn" />
                                    <p className='development__product-item-text'>FOX VPN</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={HotVpn} alt="hot-vpn" />
                                    <p className='development__product-item-text'>HOT VPN</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={Screen} alt="screen" />
                                    <p className='development__product-item-text'>Screen Defender</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={Clicker} alt="clicker" />
                                    <p className='development__product-item-text'>Idle Mafia Clicker</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={CoinLord} alt="coin-lord" />
                                    <p className='development__product-item-text'>Coin Lord</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={Filter} alt="filter" />
                                    <p className='development__product-item-text'>Filters.Pro Photo editor</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={Fitness} alt="fitness" />
                                    <p className='development__product-item-text'>Fitness&Workout</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={VpnPro} alt="vpnpro" />
                                    <p className='development__product-item-text'>VPN PRO - Anonymity & Secure</p>
                                </li>
                                <li className="development__product-item">
                                    <img src={VpnUltrita} alt="vpnultrita" />
                                    <p className='development__product-item-text'>VPN Ultima</p>
                                </li>
                            </ul>
                            <p className='development__product-text'>и многие другие проекты...</p>
                            <button className='development__product-btn'>Связаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Development
