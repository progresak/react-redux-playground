import React from 'react';
import './Container.css';

const Container = props => {

    const getBgColor = (x, y) => {
        let xxx = (x * y).toString(16);
        if (xxx.length % 3 !== 0) {
            const refill = xxx.length % 3;
            for (let i = 1; i < refill; i++) {
               xxx += Math.floor(Math.random() * Math.floor(16)).toString(16);
            }
        }
        return xxx;
    };

    const getRandomPercent = () => {
        return Math.random() * 100;
    }

    return (
        <div className={'container'}
             onClick={props.onMouseMove}>
            <div
                style={{
                    backgroundColor: '#'+ getBgColor(props.x, props.y),
                    width: getRandomPercent() + '%',
                    height: getRandomPercent() + '%',
                    borderRadius: getRandomPercent() + "%"
                }}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Container;