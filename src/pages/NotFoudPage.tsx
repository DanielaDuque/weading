// src/components/NotFoundPage.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; // Import useTheme to access palette

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme(); // Access the theme

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 64px)', // Adjust for AppBar height
                backgroundColor: theme.palette.background.default, // Use a theme background color
                color: theme.palette.text.primary, // Use a theme text color
                p: 4, // Padding
                textAlign: 'center',
            }}
        >
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, mb: 2 }}>
                404
            </Typography>
            <Typography variant="h4" sx={{ mb: 3, color: theme.palette.secondary.main }}>
                Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoHome}
                sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    textTransform: 'none', // Prevent uppercase
                }}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFoundPage;