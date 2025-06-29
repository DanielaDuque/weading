import Box from "@mui/material/Box";
import {Typography, useMediaQuery} from "@mui/material";
import LeafletMapComponent from "../../components/LeafletMapComponent.tsx";
import {useTranslation} from "react-i18next";
import './PartyPage.scss'
import {useTheme} from "@mui/material/styles";
import ComingSoon from "../../components/ComingSoon.tsx";


function PartyPage() {

    const { t } = useTranslation('party');
    const theme = useTheme();
    const isTabletOrMobile = useMediaQuery(theme.breakpoints.down( 'md'));


    return(
        <div className="PartyPage">
            <section className="section">
                <Box>
                    <Typography variant="h2" gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                    >{t('receptionDetailsTitle')}</Typography>
                    <ComingSoon height='100%'/>
                </Box>

            </section>
            <section className="section section--hero">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        gap: isTabletOrMobile? 1 : 2,
                    }}
                >
                    <Box className="party-details">
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
                    </Box>
                    <Box sx={{ flex: 1 }}>
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

                    </Box>
                </Box>

            </section>
        </div>

    );
}

export default PartyPage;