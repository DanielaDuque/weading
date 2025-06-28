// src/components/HomePage.tsx (create this new file for clarity)

import {Box} from '@mui/material'; // Import Box and Typography

type ImageProps = {
    src: any; // Path to the image
    alt: string; // Alt text for the image
}

function Image(props: ImageProps) {

    return (

        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                position: 'relative',
                overflow: 'hidden', // Ensures image respects border-radius
                boxShadow: 3, // Add a subtle shadow for depth
                mb: 4, // Margin bottom
            }}
        >
            <img
                src={props.src} // Adjust path if your image is elsewhere (e.g., /src/assets/wedding-couple.jpg and handled by Vite)
                alt={props.alt}
                style={{
                    width: '100%', // Image fills its container
                    height: 'auto', // Maintain aspect ratio
                    display: 'block', // Removes extra space below image
                }}
            />
        </Box>

    );
}

export default Image;