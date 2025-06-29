import '../../styles/main.scss'
import weddingCoupleImage from '../../assets/wedding-couple.jpg'; // Import the image
import './Home.scss'
import {Typography, useMediaQuery} from '@mui/material';
import {useTheme} from "@mui/material/styles";

function HomePage() {
    const theme = useTheme();
    // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMiniMobile = useMediaQuery('(max-width:375px)');

    let variant: 'h1' | 'h2' | 'h3' | 'h4' = 'h1'; // Default variant
    if (isTablet) variant = 'h2';
    if (isMobile) variant = 'h3';
    if (isMiniMobile) variant = 'h4';

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
                    Welcome to Our Wedding!
                </Typography>
            </section>

            <section className=" wedding-section-info">
                <Typography variant="h5" sx={{ mb: 2 }}>
                    We are so excited to celebrate with you.
                </Typography>
                <Typography variant="body1">
                    Current date and time: {new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
                </Typography>
            </section>
        </div>
    )
}

export default HomePage