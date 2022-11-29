import { Box, Typography } from "@mui/material"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Footer = () => {

    return (
        <Box style={{ width: "100%", height: "10vh", display: "flex", flexDirection: "row", alignItems: "end", color: "white", backgroundColor: "#67C9CB" }}>
            <Box style={{width: "30%" ,display: "flex", marginBottom:"1%",marginLeft:"1%" }}>
                <LocalLibraryIcon></LocalLibraryIcon>
                <Typography style={{ fontFamily: "Quicksand,sans-serif", marginLeft:"1%" }}>
                    &copy; Toothless Copyright 2022
                </Typography>
            </Box>
        </Box>
    )

}

export default Footer