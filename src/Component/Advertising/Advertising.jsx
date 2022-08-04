import React, { useState, useEffect, useRef } from "react";
import CountNum from "../CountNum/CountNum";
// import Waves from "vanta/dist/vanta.waves.min.js";
// import * as THREE from "three";
import './Advertising.scss';

function Advertising() {

    const advNum = [
        { count: '300', text: 'офферов по всему миру' },
        { count: '70', text: 'активных рекламодателей' },
        { count: '6', text: 'в аффилейт маркетинге' },
        { count: '10000', text: 'конверсий в день' },
    ]
    const marTop = '100';
    // const [vantaEffect, setVantaEffect] = useState(0);
    // const vantaRef = useRef(null);

    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(
    //             Waves({
    //                 el: vantaRef.current,
    //                 THREE: THREE,
    //                 mouseControls: true,
    //                 touchControls: true,
    //                 gyroControls: false,
    //                 minHeight: 600.0,
    //                 minWidth: 600.0,
    //                 scale: 1.0,
    //                 scaleMobile: 1.0,
    //                 color1: "#ff0000",
    //                 color2: "#00ff00",
    //                 vertexColor: true,
    //             })
    //         );
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy();
    //     };
    // }, [vantaEffect]);

    return (
        <section className="advertising">
            <div className="container">
                <div className="advertising__package">
                    <h1 className="advertising__title">Мобильная партнерская сеть</h1>
                    <p className="advertising__text">Только рабочие офферы от прямых рекламодателей</p>
                    <CountNum num={advNum} marTop={marTop} />
                </div>
            </div>
        </section>
    );
};

export default Advertising
