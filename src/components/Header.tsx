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
import {useTranslation} from "react-i18next";

// Import Material Icons for language switcher
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Import Material UI components for language switcher
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Define a type for navigation items for better type safety
interface NavItem {
    name: string;
    path: string;
}

function Header() {
    const { t , i18n} = useTranslation('header');
    const [mobileOpen, setMobileOpen] = useState(false); // Inferring boolean type
    const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null); // State for language menu anchor
    const [languageCollapseOpen, setLanguageCollapseOpen] = useState(false);


    const openLanguageMenu = Boolean(anchorElLanguage);

    const theme = useTheme(); // theme type is inferred from useTheme
    const navigate = useNavigate(); // navigate type is inferred
    const location = useLocation(); // location type is inferred

    const navItems: NavItem[] = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
        { name: t('nav.party'), path: '/party' },
        { name: t('nav.ceremony'), path: '/ceremony' },
    ];

    const supportedLanguages = ['en', 'es', 'nl'];


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogoClick = () => {
        navigate('/');
        setMobileOpen(false);
    };

    // --- Language Switcher Handlers ---
    const handleLanguageMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElLanguage(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setAnchorElLanguage(null);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        handleLanguageMenuClose(); // Close menu after selection
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{ my: 2, fontFamily: theme.typography.h3.fontFamily, cursor: 'pointer' }}
                onClick={handleLogoClick}
            >
                {t('drawerTitle')}
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
                {/* Language Switcher in Drawer - optional, could be a separate section/button */}
                <ListItem disablePadding>
                    <ListItemButton onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLanguageCollapseOpen((open) => !open)
                    }}>
                        <ListItemText primary={t('language.title')} sx={{ pl: 2 }} />
                        {languageCollapseOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={languageCollapseOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {supportedLanguages.map((lng) => (
                            <ListItemButton
                                key={lng}
                                selected={i18n.language === lng}
                                onClick={() => {
                                    changeLanguage(lng);
                                    setLanguageCollapseOpen((open) => !open)
                                }}
                                sx={{ pl: 4, textAlign: 'left' }}
                            >
                                <ListItemText primary={t(`language.${lng}`)} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
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
                    {t('siteTitle')}
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
                    {/* Language Switcher for Desktop View (Right Corner) */}
                    <Button
                        aria-controls={openLanguageMenu ? 'language-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openLanguageMenu ? 'true' : undefined}
                        onClick={handleLanguageMenuClick}
                        sx={{
                            color: theme.palette.primary.contrastText,
                            ml: 2,
                        }}
                    >
                        <LanguageIcon sx={{ mr: 0.5 }} />
                        {i18n.language.toUpperCase()} {/* Display current language code */}
                        <ArrowDropDownIcon />
                    </Button>
                    <Menu
                        id="language-menu"
                        anchorEl={anchorElLanguage}
                        open={openLanguageMenu}
                        onClose={handleLanguageMenuClose}
                        aria-labelledby="language-menu-button"
                    >
                        { supportedLanguages.map((lng) => (
                                <MenuItem
                                    key={lng}
                                    selected={i18n.language === lng}
                                    onClick={() => changeLanguage(lng)}>
                                    {t(`language.${lng}`)}
                                </MenuItem>

                            ))}
                    </Menu>
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