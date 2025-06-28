import '../styles/main.scss'
import Image from "../components/Image.tsx";
import weddingCoupleImage from '../assets/wedding-couple.jpg'; // Import the image
import './Home.scss'
import {Typography, useMediaQuery} from '@mui/material';
import {useTheme} from "@mui/material/styles";

function Home() {
    const theme = useTheme();
    const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMiniMobile = useMediaQuery('(max-width:359px)');

    let variant: 'h1' | 'h2' | 'h3' | 'h4' = 'h1'; // Default variant
    if( isLaptop) variant = 'h1';
    if (isTablet) variant = 'h2';
    if (isMobile) variant = 'h3';
    if (isMiniMobile) variant = 'h4';
    console.log(variant)

    return (
        <div className="wedding-hero">
            <Image src={weddingCoupleImage} alt="Daniela" />
            <Typography variant={variant} className="wedding-hero__title">
                Welcome to Our Wedding!
            </Typography>
        </div>
    )
}

export default Home