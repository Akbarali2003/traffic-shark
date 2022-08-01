import React, { useState, useEffect, useRef } from "react";
// import Waves from "vanta/dist/vanta.waves.min.js";
// import * as THREE from "three";
import './Advertising.scss';

function Advertising() {
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

    const valueDisplays = document.querySelectorAll('.advertising__num-count')
    const interval = 3000;
    valueDisplays.forEach((valueDisplay) => {
        const startValue = 0;
        const endValue = parseInt(valueDisplay.getAttribute("num"));
        const duration = Math.floor(interval / endValue)
        const counter = setInterval(() => {
            startValue += 1
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter)
            }
        }, duration);
    })
    return (
        <div className="advertising">
            <div className="container">
                <div className="advertising__package">
                    <h1 className="advertising__title">Мобильная партнерская сеть</h1>
                    <p className="advertising__text">Только рабочие офферы от прямых рекламодателей</p>
                    <ul className="advertising__num-list">
                        <li className="advertising__num-item">
                            <span className="advertising__num-count" num="300">000</span>
                            <p className="advertising__num-text">офферов по всему миру</p>
                        </li>
                        <li className="advertising__num-item">
                            <span className="advertising__num-count" num="70">000</span>
                            <p className="advertising__num-text">активных рекламодателей</p>
                        </li>
                        <li className="advertising__num-item">
                            <span className="advertising__num-count" num="6">000</span>
                            <p className="advertising__num-text">в аффилейт маркетинге</p>
                        </li>
                        <li className="advertising__num-item">
                            <span className="advertising__num-count" num="10000">000</span>
                            <p className="advertising__num-text">конверсий в день</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Advertising
