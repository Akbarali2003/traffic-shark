import React from 'react';
import './AboutUs.scss';
import { WorldGrid, GoalFinish, Building, People, SmartPhone } from '../../../Assets/Images/index';
function AboutUs() {
    return (
        <section className='aboutus'>
            <div className="container">
                <div className="aboutus__package">
                    <h2 className='aboutus__title'>Факты о нас</h2>
                    <ul className='aboutus__list'>
                        <li className='aboutus__item'>
                            <span className='aboutus__item-icon'><WorldGrid /></span>
                            <p className='aboutus__item-text'>Нам доверяют крупнейшие рекламодатели со всего мира</p>
                        </li>
                        <li className='aboutus__item'>
                            <span className='aboutus__item-icon'><GoalFinish /></span>
                            <p className='aboutus__item-text'>Показываем стабильный рост и развитие непрерывно с 2015 года</p>
                        </li>
                        <li className='aboutus__item'>
                            <span className='aboutus__item-icon'><Building /></span>
                            <p className='aboutus__item-text'>2 офиса в России</p>
                        </li>
                        <li className='aboutus__item'>
                            <span className='aboutus__item-icon'><People /></span>
                            <p className='aboutus__item-text'>Собственные отделы медиабаинга и разработки</p>
                        </li>
                        <li className='aboutus__item'>
                            <span className='aboutus__item-icon'><SmartPhone /></span>
                            <p className='aboutus__item-text'>Собственные Android и iOS приложения</p>
                        </li>
                    </ul>
                    <button className='aboutus__btn'>Связаться</button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
