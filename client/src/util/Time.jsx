import React, { useEffect } from 'react'
import { useTimer } from '../hooks/useTimer'

const Time = ({ createdAt }) => {
    const [timerDays, timerHours, timerMinutes, timerSeconds, startTimer] = useTimer()
    const time_stamp = new Date(createdAt).getTime()

    useEffect(() => {
        startTimer(Number(time_stamp))
    }, [startTimer, time_stamp])
    return (
        <>
            {
                timerDays > 0 ?
                    <span>
                        <span style={{ color: "#ea5a15" }}>{timerDays}</span>
                        <span style={{ color: "#f26522" }}>D-</span>
                    </span>
                    : null
            }
            {
                timerHours > 0 ?
                    <span>
                        <span style={{ color: "#ea5a15" }}>{timerHours}</span>
                        <span style={{ color: "#f26522" }}>H-</span>
                    </span>
                    : null
            }
            {
                timerMinutes > 0 ?
                    <span>
                        <span style={{ color: "#ea5a15" }}>{timerMinutes}</span>
                        <span style={{ color: "#f26522" }}>M-</span>
                    </span>
                    : null
            }
            <span>
                <span style={{ color: "#ea5a15" }}>{timerSeconds}</span>
                <span style={{ color: "#f26522" }}>S</span>
            </span>
        </>
    )
}

export default Time