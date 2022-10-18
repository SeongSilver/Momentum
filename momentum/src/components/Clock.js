import React, { useEffect, useState } from 'react'
import './Clock.css';

function Clock() {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

    const getTime = () => {
        const date = new Date();
        setHour(String(date.getHours()).padStart(2, "0"));
        setMinute(String(date.getMinutes()).padStart(2, "0"));
        setSecond(String(date.getSeconds()).padStart(2, "0"));
    }
    useEffect(() => {
        const id = setInterval(getTime, 1000);
        return (() => clearInterval(id))
    }, [])
    return (
        <div className='clock'>
            <span>{hour} : {minute} : {second}</span>
        </div>
    )
}

export default Clock