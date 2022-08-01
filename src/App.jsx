import React, { Fragment } from 'react';
import './App.scss';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default App;
