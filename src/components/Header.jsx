import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({title, subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{mb: "30px" }}
    >
      <Typography variant="h2" 
        sx={{
          color: `${colors.grey[100]}`,
          fontWeight: "bold",
          margin: "0 0 5px 0",
        }} 
      >
        {title}
      </Typography>
      <Typography variant="h3"
        sx={{color: `${colors.greenAccent[400]}`}}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;