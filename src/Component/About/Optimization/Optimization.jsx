import React from 'react';
import './Optimization.scss';
import { ArrowTop, Loupe, TapChecked } from './../../../Assets/Images/index';

function Optimization() {
    return (
        <section className='optimization'>
            <div className="container">
                <div className="optimization__package">
                    <h3 className='optimization__title'>ASO (App store optimization)</h3>
                    <p className='optimization__discription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>
                    <div className='optimization__open-page'>
                        <hr className='optimization__open-page-line' />
                        <span className='optimization__open-page-icon'><ArrowTop /></span>
                    </div>
                    <div className='optimization__open-list'>
                        <div className='optimization__promotion'>
                            <h4 className='optimization__promotion-title'>продвижение мобильных приложений в apple app store и google play</h4>
                            <ul className='optimization__promotion-list'>
                                <li className='optimization__promotion-item'>
                                    <Loupe />
                                    <p className='optimization__promotion-item-text'>
                                        Повышаем позиции вашего приложения в выдаче при поиске
                                        внутри магазинов приложений по заданным ключевым фразам
                                    </p>
                                </li>
                                <li className='optimization__promotion-item'>
                                    <TapChecked />
                                    <p className='optimization__promotion-item-text'>
                                        Использование различных подходов и зание алгоритмов работы
                                        магазинов приложений от Google и Apple позволяет нам точно
                                        определить, какие изменения в метаданных нужно сделать,
                                        чтобы обеспечить рост органических установок, видимости
                                        и конверсий  для вашего приложения
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='optimization__progress'>
                            <h4 className='optimization__progress-title'>наши успехи</h4>
                            <p className='optimization__progress-text'>
                                Мы смогли вывести наши собственные приложения в ТОП-10 среди
                                категорий утилитит в USA, в ТОП-15 среди утилит CA и UK, а
                                так же в ТОП-15 среди TIER-3
                            </p>
                            <button className='optimization__progress-btn'>Связаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Optimization
