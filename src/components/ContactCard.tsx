import {Grid, Link, Paper, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from "@mui/material/Box";

interface ContactCardProps {
    photo: string;
    name: string;
    alt: string; // This prop is not used in the component, but you can keep it if needed for future use
    email: string;
    phone: string;
    whatsapp: string;
    role: string;
}

function ContactCard(props: Readonly<ContactCardProps>) {
    return (
        <Paper
            elevation={4}
            square={false}
            sx={{
                p: 2,
            }}
        >
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid sx={{
                    p: 2
                }}>
                    <Box
                        component="img"
                        src={props.photo}
                        alt={props.alt}
                        sx={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px',
                            marginTop: 1,
                            boxShadow: 3,
                        }}
                    />
                </Grid>
                <Grid container
                      spacing={2}
                      direction={'column'}
                >
                    <Grid container
                          direction={'column'}
                          spacing={0}
                          alignItems={'center'}
                    >
                        <Typography variant="h5" > <strong>{props.role} </strong> - {props.name} </Typography>
                    </Grid>


                    <Grid container
                          alignItems={'center'}
                          spacing={1}
                          direction="column"
                    >
                        <Grid container spacing={0} alignItems={'center'} justifyContent={'center'} >
                            <EmailIcon sx={{mr: 1}}/>
                            <Link href="mailto:stef.example@email.com" color="inherit" underline="hover">
                                {props.email}
                            </Link>
                        </Grid>
                        <Grid container  spacing={0}  alignItems={'center'} justifyContent={'center'} >
                            <PhoneIcon sx={{mr: 1}}/>
                            <Link href="tel:+32470123456" color="inherit" underline="hover">
                                {props.phone}
                            </Link>
                        </Grid>
                        <Grid container  spacing={0}  alignItems={'center'} justifyContent={'center'} >
                            <WhatsAppIcon sx={{mr: 1}}/>
                            <Link
                                href="https://wa.me/32470123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                underline="hover"
                            >
                                {props.whatsapp}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

    )
        ;
}

export default ContactCard;