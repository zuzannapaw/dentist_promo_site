import { Box, Typography, IconButton } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const doctor1 = {
    name: "dr. Julian Goor",
    description: "Best doctor in your city. Call him when you need help with tooth ache.",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*",
}


const Team = () => {
    return (
        <Box style={{ width: "100%", height: "70vh" }}>
            <Typography style={{ textAlign: "center", marginTop: "5%", fontSize: "2.7rem", color: "#516363" }}>This is our team</Typography>
            <Box style={{ height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "-50px" }}>
                <IconButton><KeyboardArrowLeftIcon style={{ fontSize: "50px" }} /></IconButton>
                <Box style={{ width: "35vh", height: "35vh", borderRadius: "50%", border: "3px solid #67C9CB", background: `url(${doctor1.image})`, backgroundPosition: "40% 5%" }}/>
                <IconButton><KeyboardArrowRightIcon style={{ fontSize: "50px" }} /></IconButton>

            </Box>
            <Box style={{ height: "20%", display:"flex",flexDirection:"column", justifyContent: "space-around", alignItems: "center",marginTop:"-120px"}}>
                <Typography style={{fontFamily:"QuickSand,sans-serif", color: "#516363", fontSize:"2.1rem",fontWeight:500}}>{doctor1.name}</Typography>
                <Typography style={{fontFamily:"QuickSand,sans-serif", color: "#516363", fontSize:"1.1rem",fontWeight:500}}>{doctor1.description}</Typography>
            </Box>
        </Box>

    )
}

export default Team