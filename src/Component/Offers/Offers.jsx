import React from 'react';
import './Offers.scss';
import { OffersImgSvg, TopImgSvg, DollorImgSvg } from '../../Assets/Images/index';

function Offers() {
    return (
        <div className='offers'>
            <div className="container">
                <div className="offers__package">
                    <h2 className='offers__title'>мы всегда в топе!</h2>
                    <p className='offers__text'>Мы прямой рекламодатель с собственными офферами, которые входят в топ-чарты AppStore и Google Play. </p>
                    <ul className='offers__list'>
                        <li className='offers__item'>
                            <span className='offers__item-img'><TopImgSvg /></span>
                            <p className='offers__item-discription'>Наши офферы входят в ТОПы в AppStore и Google Play</p>
                        </li>
                        <li className='offers__item'>
                            <span className='offers__item-img'><OffersImgSvg /></span>
                            <p className='offers__item-discription'>Мы делаем собственные белые мобильные офферы, которые вы не найдете ни в одной другой партнерке</p>
                        </li>
                        <li className='offers__item'>
                            <span className='offers__item-img'><DollorImgSvg /></span>
                            <p className='offers__item-discription'>Мы платим до $2.5 за инсталл и принимаем трафик со всего мира</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Offers
