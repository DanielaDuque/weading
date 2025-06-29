import {useState, useEffect, type JSX} from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles'; // Import useTheme for styling

interface CountdownTimerProps {
    date: Date;
    nowMessage: string;
    nameSpace:string
}

function CountdownTimer(props: CountdownTimerProps) {
    const { t } = useTranslation(props.nameSpace); // Assuming countdown keys are in 'home' namespace
    const theme = useTheme(); // Get theme for styling

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // Only set up timer if wedding date is in the future
        if (+props.date > +new Date()) {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearTimeout(timer);
        }
    }); // No dependency array to re-run every second

    function calculateTimeLeft() {
        const difference = +props.date - +new Date();
        let time: { days?: number; hours?: number; minutes?: number; seconds?: number } = {};

        if (difference > 0) {
            time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return time;
    }

    const timerComponents: JSX.Element[] = [];

    // Logic to build the timer display string based on time left
    if (timeLeft.days !== undefined && timeLeft.days > 0) {
        timerComponents.push(<span key="days">{t('countdownDays', { days: timeLeft.days })}</span>);
    }
    if (timeLeft.hours !== undefined && timeLeft.hours >= 0) {
        if (timerComponents.length > 0 && timeLeft.hours < 1 && timeLeft.days === 0 && (timeLeft.minutes || 0) > 0) {
            // Do nothing if hours are 0, days are 0, and minutes are present
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
        } else if (timerComponents.length > 0 && (timeLeft.days > 0 || timeLeft.hours > 0)) {
            timerComponents.push(<span key="hours" style={{marginLeft: '8px'}}>{t('countdownHours', { hours: timeLeft.hours })}</span>);
        } else if (timerComponents.length === 0) {
            timerComponents.push(<span key="hours">{t('countdownHours', { hours: timeLeft.hours })}</span>);
        }
    }
    if (timeLeft.minutes !== undefined && timeLeft.minutes >= 0) {
        if (timerComponents.length > 0 && timeLeft.minutes < 1 && timeLeft.hours === 0 && timeLeft.days === 0 && (timeLeft.seconds || 0) > 0) {
            // Do nothing if minutes are 0, hours are 0, days are 0, and seconds are present
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
        } else if (timerComponents.length > 0 && (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0)) {
            timerComponents.push(<span key="minutes" style={{marginLeft: '8px'}}>{t('countdownMinutes', { minutes: timeLeft.minutes })}</span>);
        } else if (timerComponents.length === 0 || (timeLeft.days === 0 && timeLeft.hours === 0)) {
            timerComponents.push(<span key="minutes" style={{marginLeft: '8px'}}>{t('countdownMinutes', { minutes: timeLeft.minutes })}</span>);
        }
    }
    if (timeLeft.seconds !== undefined && timeLeft.seconds >= 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (timerComponents.length > 0 && (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0)) {
            timerComponents.push(<span key="and-seconds" style={{marginLeft: '8px'}}>{t('and')} {t('countdownSeconds', { seconds: timeLeft.seconds })}</span>);
        } else if (timerComponents.length === 0) {
            timerComponents.push(<span key="seconds">{t('countdownSeconds', { seconds: timeLeft.seconds })}</span>);
        }
    }

    return (
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            {timerComponents.length ? (
                timerComponents
            ) : (
                props.nowMessage
            )}
        </Typography>
    );
};

export default CountdownTimer;