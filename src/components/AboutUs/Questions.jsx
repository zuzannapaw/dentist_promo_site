import { Box, Typography } from "@mui/material"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PlaceIcon from '@mui/icons-material/Place';
import QuestionsElement from "./questionsElement/QuestionsElement";


const Questions = () => {
    return (
        <Box style={{ height: "45vh", width: "100%", backgroundColor: '#67C9CB', display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <Box style={{ height: "20%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", color: "white",marginBottom:"-40px" }}>
                <Typography style={{fontSize:"2rem",fontWeight:500, fontFamily:"QuickSand, sans-serif", marginBottom:"2%"}}>Any questions?</Typography>
                <Typography  style={{fontSize:"1.5rem",fontWeight:500, fontFamily:"QuickSand, sans-serif",}}>Contact with us!</Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <QuestionsElement title={"+976 666 222"} icon={<CallIcon style={{ color: "#516363" }} />} />
                <QuestionsElement title={"toothlesdent@dent.com"} icon={<EmailIcon style={{ color: "#516363" }} />} />
                <QuestionsElement title={"7:00 - 20:00"} icon={<HistoryToggleOffIcon style={{ color: "#516363" }} />} />
                <QuestionsElement title={"Broome Street 76-367 New York"} icon={<PlaceIcon style={{ color: "#516363" }} />} />
            </Box>
        </Box>

    )
}

export default Questions
