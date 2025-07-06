import {Grid, Typography, useMediaQuery} from "@mui/material";
import LeafletMapComponent from "../../components/LeafletMapComponent.tsx";
import {useTranslation} from "react-i18next";
import './PartyPage.scss'
import {useTheme} from "@mui/material/styles";
import CountdownTimer from "../../components/CountdownTimer.tsx";
import i18n from "i18next";
import {Timeline, timelineItemClasses} from "@mui/lab";
import TimelineEvent from "../../components/TimelineEvent.tsx";
import ChatIcon from "@mui/icons-material/Chat";
import CelebrationIcon from "@mui/icons-material/WineBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DoneIcon from "@mui/icons-material/ExitToApp";


function PartyPage() {

    const { t } = useTranslation('party');
    const theme = useTheme();
    const isTabletOrMobile = useMediaQuery(theme.breakpoints.down( 'md'));
    const partyDate = new Date(2025, 8, 27, 19, 0, 0); // September 27, 2025
    const isMobile = useMediaQuery(theme.breakpoints.down( 'sm' ));

    return(
        <div className="PartyPage">
            <section className="section">
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

                    <Typography variant="h2" gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                    >{t('receptionDetailsTitle')}</Typography>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        {t('introText')}
                    </Typography>
                    <Typography variant="body1" sx={{mb:1}}>
                        {t('partyDateLabel')}
                        {partyDate.toLocaleDateString(i18n.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                    <CountdownTimer
                        date={partyDate} // September 27, 2025 at 19:00
                        nowMessage={t('countdownNowMessage')}
                        nameSpace='party'
                    ></CountdownTimer>
                </Grid>

            </section>
            <section className="section section--hero">
                <Grid
                    container
                    direction={{xs: 'column', md: 'row'}}
                    spacing={{ xs: 1, md: 2 }}
                    justifyContent={'space-between'}
                >
                    <Grid size={{sm: 12, md: 6}} className="party-details">
                        <Typography variant="h3" > {t('receptionSectionTitle')}</Typography>
                        <Typography variant="body1">
                            <strong>MOLENHOF - GILSEINDE 113, RAVELS </strong><br/>
                        </Typography>
                        <Typography variant="body1">
                            19.00 H
                        </Typography>
                        <Typography variant="body1" >
                            {t('celebrationMessage')}
                        </Typography>
                    </Grid>
                    <Grid size={{sm: 12, md: 6}} >
                        <LeafletMapComponent
                            markers={[
                                {
                                    position: [51.3726241, 5.0101037],
                                    title: t('mapMarkerTitle'),
                                    address: 'MOLENHOF - GILSEINDE 113, RAVELS',
                                    time: '19.00 H'
                                }
                            ]}
                            height={isTabletOrMobile? '50vh' : '30vh'}
                            width={isTabletOrMobile ? '100%' : '80%'}
                        />

                    </Grid>
                </Grid>

            </section>
            <section className="section">
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h3" gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                    >{t('schedule.title')}</Typography>
                    <Typography variant="body1" sx={{mb:1}}>
                        {t('schedule.details')}
                    </Typography>
                    <Timeline
                        sx={{
                            width: '100%',
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
                            date={t('schedule.welcome')} // Use translation for the date
                            icon={CelebrationIcon} // TypeScript will ensure this matches the 'icon' type
                            title={"19.00"}
                        />
                        <TimelineEvent
                            date={t('schedule.words')} // Use translation for the date
                            icon={ChatIcon} // TypeScript will ensure this matches the 'icon' type
                            title={"19.30"}
                            dotColor="primary" // Example of using a different dot color
                        />
                        <TimelineEvent
                            date={t('schedule.buffet')} // Use translation for the date
                            icon={RestaurantIcon} // TypeScript will ensure this matches the 'icon' type
                            title={"19.45"}
                        />
                        <TimelineEvent
                            date={t('schedule.end')} // Use translation for the date
                            icon={DoneIcon} // TypeScript will ensure this matches the 'icon' type
                            title={"03.00"}
                            dotColor="primary" // Example of using a different dot color
                        />
                    </Timeline>
                </Grid>
            </section>
        </div>

    );
}

export default PartyPage;