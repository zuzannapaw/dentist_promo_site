
import { Grid,Box,Stack, Typography } from "@mui/material"
import GridElement from "./gridElement/GridElement"


const WhatWeDo = () => {
    return (
        <>
            <Stack style={{ height: "25vh", width: "100%", backgroundColor: "#67C9CB", justifyContent:"space-evenly", alignItems:"center" }}>
                <Typography style={{color:"white", fontSize:"4em", fontWeight: "100" , fontFamily:"QuickSand, sans-serif"}}>We are here for You</Typography>
                <Typography style={{color:"white", fontSize:"1.5em", fontFamily:"QuickSand, sans-serif" }} >We invite you to familiarize yourself with the offert</Typography>
            </Stack>
            <Box style={{ height: "auto", width: "90%" }}>
                <Stack gap={7} mt={8} ml={28}  >
                    <Grid container spacing={24}>
                        <GridElement source={"https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg"} title={"Implants"} description={"Specialized doctors will help you choose the right implants and crowns for your type of bite to enjoy full teeth again."}/>
                        <GridElement source={"https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg"} title={"Hygienization"} description={"Proper hygiene allows you to maintain the proper condition of your teeth, take care of the whiteness of your teeth and protect them from the attacks of caries." }/>
                        <GridElement source={"https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg"} title={"Stomatology"} description={"A healthy bite has not only aesthetic but also health benefits. An improperly developed bite can lead to many serious consequences." }/>
                        <GridElement source={"https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg"} title={"Prosthetics"} description={"Prosthetics is designed to rebuild lost or very damaged teeth. Modern dentistry offers a lot of restorative possibilities in the form of fixed and mobile solutions. " }/>
                        <GridElement source={"https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg"} title={"Tooth removal"} description={"Quick appointments for the extraction of a sore tooth, specialized surgeons caring for the patient's comfort during even a serious procedure. " }/>
                        <GridElement source={"https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg"} title={"Drilling"} description={"The latest equipment allows you to perform painless treatment using the thinnest drills on the market." }/>

                    </Grid>
                </Stack>
            </Box>
        </>
    )
}

export default WhatWeDo