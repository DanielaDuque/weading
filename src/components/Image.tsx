// src/components/HomePage.tsx (create this new file for clarity)

import {Box} from '@mui/material'; // Import Box and Typography

type ImageProps = {
    src: any; // Path to the image
    alt: string; // Alt text for the image
    height: string; // Optional height prop
    width: string; // Optional width prop
}

function Image(props: ImageProps) {

    return (

        <Box
            sx={{
                width: props.width || '100%',
                maxHeight: props.height || 'auto',
                position: 'relative',
                display: 'flex',
                overflow: 'hidden'
            }}
        >
            <img
                src={props.src}
                alt={props.alt}
                style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'left top',
                    display: 'block',
                }}
            />
        </Box>

    );
}

export default Image;