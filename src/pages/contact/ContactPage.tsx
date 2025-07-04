
import {Typography, Grid} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ContactCard from "../../components/ContactCard.tsx";
import stefImage from '../../assets/stef.webp'; // Import the image
import danielaImage from '../../assets/daniela.webp'; // Import the image


function ContactPage() {
    const { t } = useTranslation('contact'); // Use the 'contact' namespace

    return (
        <section className="section">
            <Typography variant="h2"  sx={{
                mb: 6,
                textAlign: 'center',
            }}>
                {t('contactTitle')}
            </Typography>
            <Grid container
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"

            >
                <Grid size={{sm: 12, md: 5}}>
                    <ContactCard
                        photo={stefImage}
                        name='Stef Aerts'
                        alt='Stef Aerts'
                        email='stef.aerts123@gmail.com'
                        phone='+32 494 68 75 66'
                        whatsapp='+32 494 68 75 66'
                        role={t('stefRole')}
                    ></ContactCard>
                </Grid>

                <Grid size={{sm: 12, md: 5}}>
                    <ContactCard
                        photo={danielaImage}
                        name='Daniela Duque'
                        alt='Daniela Duque'
                        email='daniela_0708@outlook.com'
                        phone='+32 466 34 07 37'
                        whatsapp='+33 773 80 86 39'
                        role={t('danielaRole')}
                    ></ContactCard>
                </Grid>
            </Grid>
        </section>

    );
}

export default ContactPage;