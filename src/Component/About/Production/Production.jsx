import React from 'react';
import './Production.scss';
import { ArrowTop, Facebook, Google, MyTarget, TikTok, ASA, InApp, Popunder, Push, CheckMark } from '../../../Assets/Images/index';
import Joom from '../../../Assets/Images/joom.png';
import Stologo from '../../../Assets/Images/stologo.png';
import VpnPro from '../../../Assets/Images/vpn-pro.png';
import VpnUltima from '../../../Assets/Images/vpn-ultima.png';
function Production() {
    return (
        <section className='production'>
            <div className="container">
                <div className="production__package">
                    <h3 className='production__subtitle'>направления нашей деятельности</h3>
                    <div className='production__advance'>
                        <h2 className='production__title'>Продвижение</h2>
                        <p className='production__discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </p>
                        <div className='production__open-page'>
                            <hr className='production__open-page-line' />
                            <span className='production__open-page-icon'><ArrowTop /></span>
                        </div>
                        <div className='production__open-list'>
                            <div className='production__publicity'>
                                <h4 className='production__publicity-title'>Рекламные форматы</h4>
                                <ul className='production__publicity-list'>
                                    <li className='production__publicity-item'>
                                        <span><Facebook /></span>
                                        <p className='production__publicity-item-text'>Facebook</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span>< Google /></span>
                                        <p className='production__publicity-item-text'>Google UAC</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span><MyTarget /></span>
                                        <p className='production__publicity-item-text'>MyTarget</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span><TikTok /></span>
                                        <p className='production__publicity-item-text'>TikTok</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span><ASA /></span>
                                        <p className='production__publicity-item-text'>ASA</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span><InApp /></span>
                                        <p className='production__publicity-item-text'>InApp</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span><Popunder /></span>
                                        <p className='production__publicity-item-text'>Popunder</p>
                                    </li>
                                    <li className='production__publicity-item'>
                                        <span><Push /></span>
                                        <p className='production__publicity-item-text'>Push</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='production__status'>
                                <h4 className='production__status-title'>наши кейсы</h4>
                                <ul className='production__status-list'>
                                    <li className='production__status-item'>
                                        <img src={Joom} alt="joom" />
                                        <div className='production__status-item-joom'>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Траффик</p>
                                                <p className='production__status-item-joom-text'>Facebook</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Расходы</p>
                                                <p className='production__status-item-joom-text'>54.800 $</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Показатели компании</p>
                                                <p className='production__status-item-joom-price'>Покупки более чем на 200.000$</p>
                                            </span>
                                        </div>
                                    </li>
                                    <li className='production__status-item'>
                                        <img src={Stologo} alt="Stologo" />
                                        <div className='production__status-item-joom'>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Траффик</p>
                                                <p className='production__status-item-joom-text'>Facebook, TikTok, InApp</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Расходы</p>
                                                <p className='production__status-item-joom-text'>10.000.000 руб.</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Показатели компании</p>
                                                <p className='production__status-item-joom-price'>Привлеченные пользователи купили билеты более чем на 30.000.000 руб.</p>
                                            </span>
                                        </div>
                                    </li>
                                    <li className='production__status-item'>
                                        <div className='production__status-item-imgblock'>
                                            <img src={VpnPro} alt="VpnPro" />
                                            <p>VPN PRO - Anonymity & Secure</p>
                                        </div>
                                        <div className='production__status-item-joom'>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Траффик</p>
                                                <p className='production__status-item-joom-text'>Popunder, Push</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Расходы</p>
                                                <p className='production__status-item-joom-text'>500.000 $</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Показатели компании</p>
                                                <p className='production__status-item-joom-price'>25.000+ триалов в месяц, 7.500+ покупок,ТОП-10 в США по выручке в Apple Store</p>
                                            </span>
                                        </div>
                                    </li>
                                    <li className='production__status-item'>
                                        <div className='production__status-item-imgblock'>
                                            <img src={VpnUltima} alt="VpnUltima" />
                                            <p>VPN Ultima</p>
                                        </div>
                                        <div className='production__status-item-joom'>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Траффик</p>
                                                <p className='production__status-item-joom-text'>Popunder, Push, In-Page push, Calendar</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Расходы</p>
                                                <p className='production__status-item-joom-text'>160.000 $</p>
                                            </span>
                                            <span className='production__status-item-joom-span'>
                                                <p className='production__status-item-joom-txt'>Показатели компании</p>
                                                <p className='production__status-item-joom-price'>10.000+ триалов в месяц, 4.000+ покупок</p>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='production__advantage'>
                                <h4 className='production__advantage-title'>Преимущества</h4>
                                <ul className='production__advantage-list'>
                                    <li className='production__advantage-item'>
                                        <span className='production__advantage-checkmark'><CheckMark /></span>
                                        <p className='production__advantage-text'>Сильный inhouse медиабаинг из более чем 10 человек</p>
                                    </li>
                                    <li className='production__advantage-item'>
                                        <span className='production__advantage-checkmark'><CheckMark /></span>
                                        <p className='production__advantage-text'>Проверенный траффик высокого качества</p>
                                    </li>
                                    <li className='production__advantage-item'>
                                        <span className='production__advantage-checkmark'><CheckMark /></span>
                                        <p className='production__advantage-text'>Понимание потребностей клиента, опираясь на опыт продвижения собственных продуктов</p>
                                    </li>
                                    <li className='production__advantage-item'>
                                        <span className='production__advantage-checkmark'><CheckMark /></span>
                                        <p className='production__advantage-text'>Собственное производство промо-материалов</p>
                                    </li>
                                    <li className='production__advantage-item'>
                                        <span className='production__advantage-checkmark'><CheckMark /></span>
                                        <p className='production__advantage-text'>Никакого фрода и ботов</p>
                                    </li>
                                    <li className='production__advantage-item'>
                                        <span className='production__advantage-checkmark'><CheckMark /></span>
                                        <p className='production__advantage-text'>Интеграции с Adjust, Appsflyer и др. трекерами</p>
                                    </li>
                                </ul>
                            </div>
                            <button className='production__btn'>Связаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Production
