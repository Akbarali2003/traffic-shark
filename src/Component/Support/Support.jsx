import React from 'react';
import './Support.scss';
function Support() {
    return (
        <section className='support'>
            <div className="container">
                <div className="support_package">
                    <h3 className='support__title'>Остались вопросы? Готовы ответить!</h3>
                    <form className='support__form'>
                        <input className='support__username' type="text" placeholder='Ваше имя' required />
                        <input className='support__contact' type="text" placeholder='Ваши контакты' required />
                        <input className='support__suggest' type="text" placeholder='Ваше предложение' required />
                        <button type='submit' className='support__btn'>написать нам</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Support
