import React from 'react';
import './Payment.scss';
import Wiretransfer from '../../Assets/Images/wiretansfer.png';
import CapitaList from '../../Assets/Images/capitalist.png';
import Webmoney from '../../Assets/Images/webmoney.png';
import Payoneer from '../../Assets/Images/payoneer.png';
import BIcon from '../../Assets/Images/bicon.png';
import TIcon from '../../Assets/Images/ticon.png';
function Payment() {
    return (
        <section className='payment'>
            <div className="container">
                <div className="payment__package">
                    <h2 className='payment__title'>Еженедельные выплаты <p className='payment__title-100'>от $100</p></h2>
                    <p className='payment__discription'>На удобную для вас платежную систему из перечисленных ниже</p>
                    <div className='payment__logos'>
                        <span className='payment__logo'><img src={Wiretransfer} alt="Wiretransfer" /></span>
                        <span className='payment__logo'><img src={CapitaList} alt="CapitaList" /></span>
                        <span className='payment__logo'><img src={Webmoney} alt="Webmoney" /></span>
                        <span className='payment__logo'><img src={Payoneer} alt="Payoneer" /></span>
                        <span className='payment__logo'><img src={BIcon} alt="BIcon" /></span>
                        <span className='payment__logo'><img src={TIcon} alt="TIcon" /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment
