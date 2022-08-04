import React, { Fragment } from 'react';
import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
import Footer from './../../Component/Footer/Footer';

function Home() {
    return (
        <Fragment>
            <Header borderColorHome={'#2E9ADB'} />
            <Main />
            <Footer />
        </Fragment>
    )
}

export default Home;
