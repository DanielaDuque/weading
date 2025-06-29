import {Grid, Link, Paper, Typography} from "@mui/material";
import ImageComponent from "./ImageComponent.tsx";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface ContactCardProps {
    photo: any;
    name: string;
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
                    <ImageComponent
                        borderRadius={'50%'}
                        src={props.photo}
                        alt="Card's photo"
                        height="auto"
                        width="100%">
                    </ImageComponent>
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