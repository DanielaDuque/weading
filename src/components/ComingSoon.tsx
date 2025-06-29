
import { Box, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction'; // Importa el icono
import { useTranslation } from 'react-i18next';


interface Props {
    height?: string;
}

function ComingSoon(props: Props) {
    const { t } = useTranslation('comingSoon'); // Usamos el nuevo namespace 'comingSoon'

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: props.height? props.height : '100vh',
                border: '1px dashed #ccc',
                borderRadius: '8px',
                textAlign: 'center',
                color: 'text.secondary',
                backgroundColor: 'action.hover',
            }}
        >
            <ConstructionIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
            <Typography variant="h5" component="h2" gutterBottom>
                {t('title')}
            </Typography>
            <Typography variant="body1">
                {t('message')}
            </Typography>
        </Box>
    );
}

export default ComingSoon;