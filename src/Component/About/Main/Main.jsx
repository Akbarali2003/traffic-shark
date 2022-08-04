import React from 'react'
import Logosection from '../../Logosection/Logosection';
import AboutUs from '../AboutUs/AboutUs';
import Application from '../Application/Application'
import Development from '../Development/Development';
import Optimization from '../Optimization/Optimization';
import Production from '../Production/Production';
import Subscribe from './../../Subscribe/Subscribe';
import Support from './../../Support/Support';
import Participation from './../Participation/Participation';
import Purchases from './../Purchases/Purchases';

function Main() {
    return (
        <main>
            <Application />
            <Subscribe />
            <AboutUs />
            <Purchases />
            <Logosection logoTitle={'клиенты'} />
            <Production />
            <Development />
            <Optimization />
            <Participation />
            <Support />
        </main>
    )
}

export default Main
