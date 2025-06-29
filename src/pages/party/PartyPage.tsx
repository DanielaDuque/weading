import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import LeafletMapComponent from "../../components/LeafletMapComponent.tsx";
import {useTranslation} from "react-i18next";



function PartyPage() {

    const { t } = useTranslation('party');


    return(
        <>
            <section className="section">
                <Box
                    sx={{
                        px : 2,
                    }}
                >
                    <Typography variant="h2" gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                    >{t('receptionDetailsTitle')}</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 3 }}>{t('moreDetailsSoon')} </Typography>
                </Box>

            </section>
            <section className="section">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        gap: 4,
                        mb: 4,
                        px : 2,
                    }}
                >
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end', // Align left
                        justifyContent: 'center', // Vertically center
                    }}>
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
                        />

                    </Box>
                </Box>

            </section>
        </>

    );
}

export default PartyPage;