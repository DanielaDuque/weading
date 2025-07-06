import Timeline from '@mui/lab/Timeline';
import TimelineEvent from "../../components/TimelineEvent.tsx";

// Import all the icons you'll use
import FavoriteIcon from '@mui/icons-material/Favorite';
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlightIcon from '@mui/icons-material/Flight';

import {Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {timelineItemClasses} from "@mui/lab";
import firstPicture from "../../assets/firstPicture.webp"; // Import your image if needed
import toColombia from "../../assets/toColombia.webp"; // Import your image if needed
import {useTranslation} from "react-i18next"; // Import your image if needed


function AboutPage() {

    const {t} = useTranslation('about');

    // isMobile
    const theme = useTheme(); // Uncomment if you want to use theme-based media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Uncomment if you want to use media queries


    return (
        <>
            <Typography variant="h2" gutterBottom
                        sx={{
                            textAlign: 'center',
                            mb: 4,
                            mt:4
                        }}
            >{t('title')}</Typography>
            <Timeline
                sx={{
                    // Only apply this style if it's a mobile screen
                    ...(isMobile && { // This is a common pattern to conditionally apply object properties
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }),
                }}
                position={isMobile ? "right" : "alternate"}
            >
                <TimelineEvent
                    date={t('firstSpark.date')} // Use translation for the date
                    icon={FavoriteIcon} // TypeScript will ensure this matches the 'icon' type
                    title={t('firstSpark.title')}
                    description={t('firstSpark.description')}
                />

                <TimelineEvent
                    dotColor="primary"
                    date={t('firstPicture.date')} // Use translation for the date
                    icon={CameraAltIcon} // TypeScript will ensure this matches the 'icon' type
                    title={t('firstPicture.title')}
                    description={t('firstPicture.description')}
                    imageUrl={firstPicture}
                    imageHeight={'20vh'}// Example image URL
                    imageAlt={'Stef & Daniela'} // Use translation for the alt text
                />

                <TimelineEvent
                    date={t('firstBelgium.date')}
                    icon={FlightIcon}
                    title={t('firstBelgium.title')}
                    description={t('firstBelgium.description')}
                />

                <TimelineEvent
                    date={t('MovingTogether.date')}
                    icon={HomeIcon}
                    title={t('MovingTogether.title')}
                    description={t('MovingTogether.description')}
                    dotColor="primary"
                />

                <TimelineEvent
                    date={t('toColombia.date')}
                    icon={PublicIcon}
                    title={t('toColombia.title')}
                    description={t('toColombia.description')}
                    imageUrl={toColombia}
                    imageHeight={'20vh'} // Example image URL
                    imageAlt={t('colombia')}
                />

                <TimelineEvent
                    date={t('engagement.date')}
                    icon={DiamondIcon}
                    title={t('engagement.title')}
                    description={t('engagement.description')}
                    dotColor="primary"
                />

                <TimelineEvent
                    date={t('bigDate.date')}
                    icon={CelebrationIcon}
                    title={t('bigDate.title')}
                    description={t('bigDate.description')}
                />
            </Timeline>
        </>
    );
}

export default AboutPage;