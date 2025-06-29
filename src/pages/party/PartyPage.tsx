import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import LeafletMapComponent from "../../components/LeafletMapComponent.tsx";



function PartyPage() {
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
                    >Reception Details</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 3 }}> More details soon</Typography>
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
                        <Typography variant="h3" > Reception</Typography>
                        <Typography variant="body1">
                            <strong>MOLENHOF - GILSEINDE 113, RAVELS </strong><br/>
                        </Typography>
                        <Typography variant="body1">
                            19.00 H
                        </Typography>
                        <Typography variant="body1" >
                            We look forward to celebrating with you in Ravels, Flanders, Belgium!
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>

                        <LeafletMapComponent
                            markers={[
                                {
                                    position: [51.3726241, 5.0101037],
                                    title: 'Reception Location',
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