// src/Theme.tsx
import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';
import React from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

// Define the type for the Link component if you are using it with forwardRef
// This is crucial for Material-UI's component prop to correctly recognize React Router's Link
interface LinkBehaviorProps extends Omit<RouterLinkProps, 'to'> {
    href: RouterLinkProps['to'];
}

const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkBehaviorProps>(
    (props, ref) => {
        const { href, ...other } = props;
        // Map href to `to` prop internally
        return <RouterLink ref={ref} to={href} {...other} />;
    },
);

// You can directly use the hex codes here or import them if you have a JS/TS config for colors
const rawColors = {
    primaryPink: '#F2A2BA',
    secondaryPink: '#F9D0DF',
    greenAccent: '#8AA890',
    blueGreySky: '#B0C0C8',
    offWhite: '#F5F5F5',
    darkGreyText: '#4A4A4A',
};
const typography = {
    fontFamily: "'Sour Gummy', sans-serif"
}
let theme = createTheme({
    palette: {
        primary: {
            main: rawColors.primaryPink,
            light: rawColors.secondaryPink,
            dark: '#E0809C',
            contrastText: rawColors.offWhite,
        },
        secondary: {
            main: rawColors.blueGreySky,
            // You'd ideally use a color utility for lighten/darken here or pre-calculate
            light: '#C7D7E0', // Example lightened
            dark: '#93A4AC',  // Example darkened
            contrastText: rawColors.offWhite,
        },
        error: {
            main: '#f44336',
        },
        text: {
            primary: rawColors.darkGreyText,
            secondary: rawColors.blueGreySky,
        },
        background: {
            default: rawColors.offWhite,
            paper: rawColors.offWhite,
        },
    },
    typography: {
        fontFamily: typography.fontFamily,
        h1: {
            fontFamily: typography.fontFamily,
        },
        h2: {
            fontFamily: typography.fontFamily,
        },
        h3: {
            fontFamily: typography.fontFamily,
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior, // Use our LinkBehavior for MuiLink
            } as any, // Cast to any to suppress type errors due to complex generic inference, or configure Module Augmentation
        },
        MuiButtonBase: { // For Buttons, ListItems, etc., that might also use links
            defaultProps: {
                LinkComponent: LinkBehavior, // Use our LinkBehavior for other components
            } as any,
        },
    },
});

theme = responsiveFontSizes(theme);

interface AppThemeProps {
    children: React.ReactNode;
}

export default function AppTheme({ children }: AppThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}