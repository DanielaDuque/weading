
import { Box, Typography, Container, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

function Footer() {
    const { t } = useTranslation('footer'); // Use the 'footer' namespace
    const theme = useTheme(); // Access the theme for consistent styling

    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.primary.dark, // Use a darker shade of primary color
                color: theme.palette.primary.contrastText, // White text for contrast
                py: 3, // Padding top and bottom
                mt: 'auto', // Push footer to the bottom if content is short
                borderTop: `1px solid ${theme.palette.divider}`, // Subtle border at the top
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                    {t('copyright', { year: currentYear, names: 'Stef & Daniela' })}
                </Typography>
                <Typography variant="body2" align="center">
                    {t('allRightsReserved')}
                </Typography>
                {/* Optional: Add social media links or other useful links here */}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    {/* Example Link: You might remove this or add your own */}
                    <Link href="#" color="inherit" underline="hover">
                        {t('privacyPolicy')}
                    </Link>
                    <Link href="#" color="inherit" underline="hover">
                        {t('termsOfService')}
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;