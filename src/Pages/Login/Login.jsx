import React, { Fragment } from 'react';
import './Login.scss';
import useToken from '../../Hooks/useToken';
import { ArrowRight } from '../../Assets/Images/index'
import Header from '../../Component/Header/Header';
function Login() {
    const [, setToken] = useToken();
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { username, password } = evt.target.elements;

        if (username.value.length > 2 && password.value.length >= 8) {
            setToken({
                username: username.value,
                password: password.value,
            });
        } else {
            alert('username yoki password xato!');
        }
    };
    return (
        <Fragment>
            <Header />
            <div className='login'>
                <div className="container">
                    <div className="login__package">
                        <h2 className='login__title'>авторизоваться</h2>
                        <form onSubmit={handleSubmit} className='login__form'>
                            <input type="emmail" name='username' className='login__email' placeholder='E-mail' />
                            <input type="password" name='password' className='login__password' placeholder='Пароль' />
                            <button type='submit' className='login__btn'>войти <ArrowRight /></button>
                        </form>
                        <span className='login__check'><input className='login__check-checkbox' type="checkbox" /><p className='login__check-text'>Запомнить меня</p></span>
                        <span className='login__parole'><p>Забыли пароль?</p><p>Создать аккаунт</p></span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login