import React from 'react'
import './CountNum.scss';
function CountNum({ num, marTop }) {
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
        <div className='countnum' style={{ marginTop: `${marTop}px` }}>
            <ul className="countnum__num-list">
                <li className="countnum__num-item">
                    <span className="countnum__num-count" num={num[0].count}>{num[0].count}+</span>
                    <p className="countnum__num-text">{num[0].text}</p>
                </li>
                <li className="countnum__num-item">
                    <span className="countnum__num-count" num={num[1].count}>{num[1].count}+</span>
                    <p className="countnum__num-text">{num[1].text}</p>
                </li>
                <li className="countnum__num-item">
                    <span className="countnum__num-count" num={num[2].count}>{num[2].count}+</span>
                    <p className="countnum__num-text">{num[2].text}</p>
                </li>
                <li className="countnum__num-item">
                    <span className="countnum__num-count" num={num[3].count}>{num[3].count}+</span>
                    <p className="countnum__num-text">{num[3].text}</p>
                </li>
            </ul>
        </div>
    )
}

export default CountNum
