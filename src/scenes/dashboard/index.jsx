import Box from '@mui/material/Box';
import Header from '../../components/Header';

const Dashboard = () => {
    return (
        <Box sx={{m: "20px"}}>
            <Box 
                sx={{display: "flex"
                    , justifyContent: "space-between"
                    , alignItems: "center"}}>
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
        </Box>
    )
}

export default Dashboard;