import React, { Fragment } from 'react'
import Header from '../../Component/Header/Header'
import './Register.scss';
function Register() {
    return (
        <Fragment>
            <Header />
            <div className="register">
                <div className="container">
                    <div className="register__package">
                        <h2 className='register__title'>Регистрация</h2>
                        <form className='register__form'>
                            <input type="text" className='register__form-email' placeholder='E-mail' />
                            <input type="password" className='register__form-parole' placeholder='Пароль' />
                            <input type="text" className='register__form-parole' placeholder='Повторите пароль' />
                            <input type="text" className='register__form-skype' placeholder='Skype' />
                            <input type="text" className='register__form-telegram' placeholder='Telegram' />
                        </form>
                        <h3 className='register__subtitle'>С чем вы работаете:</h3>
                        <div className='register__checks'>
                            <label className='register__checks-label' htmlFor="cpi"><input className='register__checks-checkbox' type={'checkbox'} id={'cpi'} />CPI</label>
                            <label className='register__checks-label' htmlFor="gambling"><input className='register__checks-checkbox' type={'checkbox'} id={'gambling'} />Gambling</label>
                            <label className='register__checks-label' htmlFor="betting"><input className='register__checks-checkbox' type={'checkbox'} id={'betting'} />Betting</label>
                            <label className='register__checks-label' htmlFor="crypto"><input className='register__checks-checkbox' type={'checkbox'} id={'crypto'} />Crypto</label>
                            <label className='register__checks-label' htmlFor="datinges"><input className='register__checks-checkbox' type={'checkbox'} id={'dstinges'} />Datinges</label>
                            <label className='register__checks-label' htmlFor="sweepstakes"><input className='register__checks-checkbox' type={'checkbox'} id={'sweepstakes'} />Sweepstakes</label>
                            <label className='register__checks-label' htmlFor="cc-submits"><input className='register__checks-checkbox' type={'checkbox'} id={'cc-submits'} />CC-submits</label>
                            <label className='register__checks-label' htmlFor="other"><input className='register__checks-checkbox' type={'checkbox'} id={'other'} />Other</label>
                        </div>
                        <div className='register__traffic'>
                            <input className='register__traffic-commit' type="text" placeholder='Какой трафик вы используете? ' />
                            <label className='register__traffic-label' htmlFor="agree"><input className='register__traffic-checkbox' type={'checkbox'} id={'agree'} />I agree with terms and conditions</label>
                        </div>
                        <button className='register__btn'>зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
