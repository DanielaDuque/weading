// src/components/Header.tsx
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// Define a type for navigation items for better type safety
interface NavItem {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Party', path: '/party' },
    { name: 'Ceremony Info', path: '/ceremony' },
];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false); // Inferring boolean type
    const theme = useTheme(); // theme type is inferred from useTheme
    const navigate = useNavigate(); // navigate type is inferred
    const location = useLocation(); // location type is inferred

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogoClick = () => {
        navigate('/');
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{ my: 2, fontFamily: theme.typography.h3.fontFamily, cursor: 'pointer' }}
                onClick={handleLogoClick}
            >
                Wedding Site
            </Typography>
            <List>
                {navItems.map((item: NavItem) => ( // Explicitly type item
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            sx={{
                                textAlign: 'center',
                                backgroundColor: location.pathname === item.path ? theme.palette.primary.light : 'inherit',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.light,
                                },
                            }}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    zIndex: 10,
                    boxShadow: theme.shadows[4],
                }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        fontFamily: theme.typography.h1.fontFamily,
                        cursor: 'pointer',
                    }}
                    onClick={handleLogoClick}
                >
                    Daniela & Stef
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {navItems.map((item: NavItem) => ( // Explicitly type item
                        <Button
                            key={item.name}
                            component={RouterLink}
                            to={item.path}
                            sx={{
                                color: theme.palette.primary.contrastText,
                                backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.2)' : 'transparent',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                },
                                ml: 2,
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                            backgroundColor: theme.palette.background.paper,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </AppBar>
    );
}

export default Header;