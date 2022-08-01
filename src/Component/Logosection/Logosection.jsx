import React from 'react';
import './Logosection.scss';
import Dostavista from '../../Assets/Images/Dostavista.svg';
import Lamonda from '../../Assets/Images/Lamoda.svg';
import Joom from '../../Assets/Images/Joom.svg';
import Lazada from '../../Assets/Images/Lazada.svg';
import Binomo from '../../Assets/Images/Binomo.svg';
import Stoloto from '../../Assets/Images/Stoloto.svg';
import BetBoom from '../../Assets/Images/Betboom.svg';
import BlackStar from '../../Assets/Images/Blackstar.svg';
import LigaStavok from '../../Assets/Images/Ligastavok.svg';
import Root from '../../Assets/Images/Root.svg';
import Psafe from '../../Assets/Images/Plafe.svg';
import Flowwow from '../../Assets/Images/Flowwow.svg';
import Hill from '../../Assets/Images/Hill.svg';
import Email from '../../Assets/Images/Email.svg';
import Fonbet from '../../Assets/Images/Fonbet.svg';
import AliExpress from '../../Assets/Images/AliExpress.svg';
function Logosection() {
    return (
        <div className='logosection'>
            <div className="container">
                <div className="logosection__wrapper">
                    <h3 className='logosection__title'>Нам доверяют</h3>
                    <div className='logosection__partners'>
                        <div className='logosection__partner'>
                            <img src={Dostavista} alt='Dostavista' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Lamonda} alt='Lamonda' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Joom} alt='Joom' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Lazada} alt='Lazada' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Binomo} alt='Binomo' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Stoloto} alt='Stoloto' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={BetBoom} alt='BetBoom' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={BlackStar} alt='BlackStar' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={LigaStavok} alt='LigaStavok' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Root} alt='Root' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Psafe} alt='Psafe' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Flowwow} alt='Flowwow' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Hill} alt='Hill' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Email} alt='Email' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={Fonbet} alt='Fonbet' />
                        </div>
                        <div className='logosection__partner'>
                            <img src={AliExpress} alt='AliExpress' />
                        </div>
                    </div>
                    <p className='logosection__text'>и десятки других популярных компаний</p>
                </div>
            </div>
        </div>
    )
}

export default Logosection
