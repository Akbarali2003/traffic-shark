import React, { Fragment } from 'react'
import Header from '../../Component/Header/Header'
import Main from '../../Component/About/Main/Main'
import Footer from './../../Component/Footer/Footer';

function About() {
    return (
        <Fragment>
            <Header borderColorAbout={'#55B570'} />
            <Main />
            <Footer />
        </Fragment>
    )
}

export default About
