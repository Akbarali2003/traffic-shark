import React from 'react';
import './Purchases.scss';
import { TopImgSvg, PurchasesImg, DollorImgSvg2 } from './../../../Assets/Images/index';
function Purchases() {
    return (
        <section className='purchases'>
            <div className="container">
                <div className="purchases__package">
                    <h3 className='purchases__title'>мы всегда в топе!</h3>
                    <p className='purchases__discription'>
                        Наш опыт измеряется более
                        $50.000.000 рекламного бюджета
                        за все время, поэтому мы прекрасно
                        понимаем ваши потребности и готовы
                        их закрыть в полной мере.
                    </p>
                    <ul className='purchases__list'>
                        <li className='purchases__item'>
                            <TopImgSvg />
                            <p className='purchases__item-text'>Умеем выводить приложения в топы AppStore и Google Play</p>
                        </li>
                        <li className='purchases__item'>
                            <PurchasesImg />
                            <p className='purchases__item-text'>Ориентируемся не только на инсталлы, но и на покупки и оплаты внутри приложения</p>
                        </li>
                        <li className='purchases__item'>
                            <DollorImgSvg2 />
                            <p className='purchases__item-text'>Стоимость одного инсталла начинается всего от $0.1</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Purchases
