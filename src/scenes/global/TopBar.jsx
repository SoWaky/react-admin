import { Box, IconButton, useTheme} from '@mui/material';
import { useContext } from 'react'; 
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens[theme.palette.mode];
    const colorMode = useContext(ColorModeContext);

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2,
                }}
            >
                {/* Search box */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: '3px',
                    }}
                >
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            borderRadius: '5px',
                            padding: '5px',
                            width: '200px',
                            ml: 2,
                            flex: 1
                        }}
                    />
                    <IconButton type="button" sx={{ ml: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                {/* Notification and profile icons */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >                    
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                    </IconButton>
                    <IconButton sx={{ mr: 1 }}>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    )
}

export default TopBar;