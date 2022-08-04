import React from 'react';
import './Subscribe.scss';
import { ArrowButton, ArrowRight } from '../../Assets/Images/index';
function Subscribe() {
    return (
        <section className='subscribe'>
            <div className="container">
                <ul className='subscribe__list'>
                    <li className='subscribe__item'>
                        <p className='subscribe__discription'>Я пользователь соцсетей, блогер, владелец сайта или арбитражник и хочу сотрудничать с топовыми мировыми брендами.</p>
                        <button className='subscribe__master-btn'>веб-мастерам <span className='subscribe__master-icon'><ArrowButton /></span></button>
                    </li>
                    <li className='subscribe__item'>
                        <p className='subscribe__discription'>Я владелец компании или маркетолог и хочу привлечь новых клиентов и увеличить продажи с помощью онлайн-рекламы.</p>
                        <button className='subscribe__advertiser-btn'>рекламодателю <span className='subscribe__advertiser-icon'><ArrowRight /></span></button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Subscribe
