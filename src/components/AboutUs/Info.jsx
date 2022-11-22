import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"


const Info = () => {
    return (
        <Box style={{ height: "60vh", width: "100%", backgroundColor: '#67C9CB', marginTop: "7%" }}>
            <Typography component="div" style={{ fontFamily: "QuickSand,sans-serif", color: "white", fontSize: "2.7rem", fontWeight: "400", paddingTop:"2%",marginLeft: "2.5%" }}> Certified dental office</Typography>
            <Stack direction="row" spacing={2}>
                <Typography component="div" style={{ width: "45%", height: "70%", fontFamily: "QuickSand,sans-serif", color: "white", fontSize: "1.5rem", lineHeight: "50px", padding: "10px", marginTop: "3%", marginLeft: "2.5%" }} >Since 2020, we have been members of an international network of dental offices offering their patients professional dental prophylaxis treatments at the highest possible standards. We work based on the GBT (Guided Biofilm Therapy) protocol, which consists in the complete removal of harmful bacterial plaque (biofilm), plaque and tartar combined with fluoridation and hygiene instructions.</Typography>
                <Box style={{ background: `url("https://nbccert.org/img/show-pride/CDT%20Sample%20Certificate%20Image.PNG")`, backgroundSize: "contain", width: "18.5vw", height: "30vh", backgroundColor: "white",marginLeft: "3%" }} />
                <Box style={{ background: `url("https://www.idocdentallab.com/img/main/award_19.jpg")`, backgroundSize: "contain", width: "18vw", height: "28vh", backgroundColor: "white" ,marginLeft: "2.5%"}} />
            </Stack>
        </Box>

    )
}

export default Info