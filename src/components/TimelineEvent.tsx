// src/components/TimelineEvent.tsx (Notice the .tsx extension for TypeScript React components)
import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import {type SvgIconTypeMap, Typography, useMediaQuery} from '@mui/material';
import type {OverridableComponent} from '@mui/material/OverridableComponent';
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";

// Define the interface for your component's props
interface TimelineEventProps {
    date: string;
    // This type definition allows you to pass any Material-UI SvgIcon component.
    // It handles the common case where you import an icon like `FavoriteIcon`.
    icon: OverridableComponent<SvgIconTypeMap> & { muiName: string; };
    title: string;
    description?: string;
    imageUrl?: string; // This makes imageUrl an OPTIONAL prop
    imageAlt?: string; // This makes imageAlt an OPTIONAL prop
    imageHeight?: string; // This makes imageheight an OPTIONAL prop
    dotColor?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | "grey";
}

const TimelineEvent: React.FC<TimelineEventProps> = (
    {
        date,
        icon: IconComponent, // Destructure and rename 'icon' to 'IconComponent' for JSX rendering
        title,
        description,
        imageUrl, // Destructure imageUrl (it might be undefined if not passed)
        imageAlt = "Timeline event image",
        imageHeight = "auto",
        dotColor = "grey" // Default value for optional prop

    }) => {
    const theme = useTheme(); // Uncomment if you want to use theme-based media queries
    const isMedium = useMediaQuery(theme.breakpoints.down('md')); // Uncomment if you want to use media queries

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color={dotColor}>
                    {/* Ensure IconComponent is not null/undefined before rendering */}
                    {IconComponent && <IconComponent />}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='subtitle1' color="textSecondary">
                    {date} </Typography>
                <Typography variant='body1'>{description} </Typography>
                {/* Fallback for when no icon is provided */}
                {imageUrl && ( // ONLY render this <Box> (acting as <img>) if imageUrl exists
                    <Box
                    component="img"
                    src={imageUrl}
                    alt={imageAlt}
                    sx={{
                        maxWidth: isMedium? '100%' : '60%',
                        maxHeight: imageHeight,
                        borderRadius: '8px',
                        marginTop: 1,
                        boxShadow: 3,
                    }}
                />
                )}
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineEvent;