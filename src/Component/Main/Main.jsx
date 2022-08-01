import React from 'react'
import Offers from '../Offers/Offers';
import Payment from '../Payment/Payment';
import Subscribe from '../Subscribe/Subscribe';
import Works from '../Works/Works';
import Advertising from './../Advertising/Advertising';
import Settings from '../Settings/Settings';
import Logosection from '../Logosection/Logosection';
import Support from '../Support/Support';
function Main() {
    return (
        <main>
            <Advertising />
            <Subscribe />
            <Works />
            <Offers />
            <Payment />
            <Settings />
            <Logosection />
            <Support />
        </main>
    )
}

export default Main
