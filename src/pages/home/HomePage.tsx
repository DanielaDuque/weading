import '../../styles/main.scss'
import weddingCoupleImage from '../../assets/wedding-couple.webp'; // Import the image
import './Home.scss'
import {Typography, useMediaQuery} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import CountdownTimer from "../../components/CountdownTimer.tsx";

function HomePage() {
    const { t , i18n } = useTranslation('home');


    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMiniMobile = useMediaQuery('(max-width:375px)');

    let variant: 'h1' | 'h2' | 'h3' | 'h4' = 'h1'; // Default variant
    if (isTablet) variant = 'h2';
    if (isMobile) variant = 'h3';
    if (isMiniMobile) variant = 'h4';

    const weddingDate = new Date(2025, 8, 27, 0, 0, 0);


    return (
        <div className="wedding-hero" >
            <section className="wedding-hero__image"
                style={{
                    backgroundImage: `url(${weddingCoupleImage})`
                }}  >
                <Typography
                    variant={variant}
                    className="wedding-hero__title"
                    sx={{
                        mt: 2,
                        width : '50%',
                        textAlign: 'center',
                }}>
                    {t('titlePage')}
                </Typography>
            </section>

            <section className=" wedding-section-info">
                <section className=" wedding-section-info">
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        {t('introText')}
                    </Typography>
                    <Typography variant="body1" sx={{mb:1}}>
                        {t('weddingDateLabel')} {' '}
                        {weddingDate.toLocaleDateString(i18n.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Typography>
                    {/* Use the new CountdownTimer component */}
                    <CountdownTimer
                        date={weddingDate}
                        nowMessage={t('todayIsWeddingDay')}
                        nameSpace={'home'}
                    /> {/* <--- New component here */}
                </section>
            </section>
        </div>
    )
}

export default HomePage