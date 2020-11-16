import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Notification.css';

export default function Notification(props) {
    const { isGameComplete, winMessage, setIsGameRestarting } = props;
    const [notificationClass, setNotificationClass] = useState('');
    const [gameResult, setGameResult] = useState('');

    useEffect(() => {
        if (isGameComplete) {
            setGameResult(winMessage);
            setNotificationClass('visable');
        }
    }, [isGameComplete, winMessage]);

    function startGameRestart() {
        setNotificationClass('');
        setIsGameRestarting(true);
    }

    return (
        <div className={`notification-container ${notificationClass}`}>
            <div className="message">{ gameResult }</div>
            <button className="button" onClick={() => startGameRestart()}>Restart</button>
        </div>
    );
}