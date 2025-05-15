import React, {useEffect} from "react";
import {DateTime} from "luxon";


export const Clock: React.FC = (): React.ReactElement => {
    const [time, setTime] = React.useState(DateTime.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(DateTime.now());
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return (<span className='clock-component'>
        {time.toISOTime()}
    </span>)
}