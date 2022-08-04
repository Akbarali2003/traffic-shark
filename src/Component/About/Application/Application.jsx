import React from 'react';
import './Application.scss';
import CountNum from '../../CountNum/CountNum'

function Application() {

    const appNum = [
        { count: '100', text: 'успешных кейсов' },
        { count: '2', text: 'медиабаинговые команды' },
        { count: '6', text: 'в аффилейт маркетинге' },
        { count: '300000', text: 'конверсий в месяц' },
    ]
    const marTop='56';
    return (
        <section className='application'>
            <div className="container">
                <div className="application__package" >
                    <h2 className='application__title'>разработка и продвижение мобильных приложений</h2>
                    <p className='application__text'>Более 100 успешных кейсов по всему миру</p>
                    <CountNum num={appNum} marTop={marTop} />
                </div>
            </div>
        </section>
    )
}

export default Application
