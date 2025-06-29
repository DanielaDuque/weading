// src/components/LeafletMapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import {type LatLngExpression, Icon } from 'leaflet'; // Import LatLngExpression, Icon, divIcon for custom markers
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// --- Custom Icon Setup (Optional but recommended for better visuals) ---
// Default Leaflet icons often break in bundlers without this fix
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

// Fix for default Leaflet marker icons in Webpack/Vite
// This sets the default icon path
Icon.Default.mergeOptions({
    iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
    iconUrl: 'leaflet/dist/images/marker-icon.png',
    shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});

// Create custom icons if you want to differentiate
// const ceremonyIcon = new Icon({
//     iconUrl: '/icons/wedding-bell-icon.png', // Path to your custom icon in public folder
//     iconSize: [38, 38], // size of the icon
//     iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
//     popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
// });
//
// const receptionIcon = new Icon({
//     iconUrl: '/icons/champagne-toast-icon.png', // Path to your custom icon in public folder
//     iconSize: [38, 38],
//     iconAnchor: [19, 38],
//     popupAnchor: [0, -38],
// });


// Fallback for custom icons if you don't have images yet
const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});


// Helper component to adjust map bounds after markers are added
interface FitBoundsComponentProps {
    locations: LatLngExpression[];
}



const FitBoundsComponent: React.FC<FitBoundsComponentProps> = ({ locations }) => {
    const map = useMap(); // Get the Leaflet map instance
    React.useEffect(() => {
        if (locations && locations.length > 0) {
            // @ts-ignore
            map.fitBounds(locations.filter(Boolean) as LatLngExpression[], { padding: [50, 50] }); // Add padding
        }
    }, [map, locations]);
    return null; // This component doesn't render anything
};

interface MarkerInfo {
    position: LatLngExpression;
    icon?: Icon;
    title: string;
    address: string;
    time: string;
}

interface LeafletMapComponentProps {
    markers: MarkerInfo[]
    // You could pass props if you want to make it reusable for different locations
}


const LeafletMapComponent: React.FC<LeafletMapComponentProps> = (
    props : LeafletMapComponentProps
) => {
    const theme = useTheme();

    // Coordinates for Ravels, Belgium (approximate center)
    const initialCenter: LatLngExpression = [51.326, 4.965]; // Lat, Lng

    // // Coordinates for Ceremony Location (example, update with actual)
    // const ceremonyPos: LatLngExpression = [51.325, 4.970]; // JACHTWEG 11, RAVELS
    // // Coordinates for Reception Location (example, update with actual)
    // const receptionPos: LatLngExpression = [51.330, 4.960]; // MOLENHOF - GILSEINDE 113, RAVELS

    const allLocations = props.markers.map(marker => marker.position);


    return (
        <Box sx={{
            width: '100%',
            maxWidth: '800px', // Max width for the map container
            mx: 'auto', // Center the map
            mt: 4,
            mb: 4,
            borderRadius: '8px',
            overflow: 'hidden', // Ensure corners are rounded
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
            <MapContainer
                center={initialCenter}
                zoom={13} // Initial zoom, will be overridden by FitBoundsComponent
                scrollWheelZoom={true} // Enable scroll zoom
                style={{ height: '500px', width: '100%' }} // Map container dimensions
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Component to fit bounds to markers */}
                <FitBoundsComponent locations={allLocations} />

                {
                    props.markers.map((marker, index) => (
                        <Marker key={index} position={marker.position} icon={marker.icon? marker.icon : defaultIcon}>
                            <Popup>
                                <Typography variant="body2" sx={{fontWeight: 'bold', color: theme.palette.text.primary}}>{marker.title}</Typography>
                                <Typography variant="caption">{marker.address}</Typography>
                                <Typography variant="caption" display="block">{marker.time}</Typography>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
            <Typography variant="caption" sx={{ mt: 2, display: 'block', textAlign: 'center', color: theme.palette.text.secondary }}>
                Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>.
            </Typography>
        </Box>
    );
};

export default LeafletMapComponent;