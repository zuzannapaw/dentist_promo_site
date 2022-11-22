import { Grid,Paper,Typography,Button } from "@mui/material"

const GridElement= (props)=>{
    return(
        <Grid item xs={4}>
        <Paper elevation={24} style={{ display:"flex", flexDirection:"column", height: "40em", width: "80%",justifyContent:"space-between" , alignItems: "center"}}>
            <img className="card-image" src={props.source} alt="dentist"></img>
            <Typography style={{ fontSize:"1.5em", textAlign:"center",fontFamily:"QuickSand,sans-serif"}}>
                {props.title}
            </Typography>
            <Typography  style={{ fontSize:"1em", lineHeight:"2.3em", padding: "10px", marginTop: "-15%",marginLeft:"6%",fontFamily:"QuickSand,sans-serif",alignJustify:"justify"}}>
                {props.description}
            </Typography>
            <Button variant="contained" style={{ marginBottom: "10%", width: "80%", backgroundColor:"#67C9CB",fontFamily:"QuickSand,sans-serif",letterSpacing:"3px"}} >More</Button>
        </Paper>
    </Grid>
    )

}

export default GridElement