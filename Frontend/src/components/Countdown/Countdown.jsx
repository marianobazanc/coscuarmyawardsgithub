import React, { useState, useEffect } from 'react'
import moment from "moment"
import "./Countdown.css"

const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [showSemicolon, setShowSemicolon] = useState(false);

    useEffect(() => {
		setInterval(() => {
			const now = moment();
			const then = moment('2022-12-26 00:00:00', 'YYYY-MM-DD hh:mm:ss');
			const countdown = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);
    return (
        <div className='clock'>
            <h2 className='title'>Proxima entrega de premios</h2>
            <div className="timer-container">
                <div className="timer">
                    {days}
                    <span className='text-gold'>Dias</span>
                </div>
                {showSemicolon ? <div className='semicolon'>:</div> : null}

                <div className="timer">
					{hours}
					<span className='text-gold'>Horas</span>
				</div>
				{showSemicolon ? <div className="semicolon">:</div> : null}
				<div className="timer">
					{minutes}
					<span className='text-gold'>Minutos</span>
				</div>
				{showSemicolon ? <div className="semicolon">:</div> : null}
				<div className="timer">
					{seconds}
					<span className='text-gold'>Segundos</span>
				</div>
            </div>
        </div>
    )
}

export default Countdown