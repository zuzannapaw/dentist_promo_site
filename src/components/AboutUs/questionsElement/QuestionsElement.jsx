import {IconButton ,Box, Typography} from "@mui/material"

const QuestionsElement = (props) => {
    return (
        <Box style={{textAlign:"center"}}>
            <IconButton style={{fontSize: "2rem",fontFamily:"QuickSand, sans-serif"}}>{props.icon}</IconButton>
            <Typography style={{color:"white",fontSize: "1.3rem",fontFamily:"QuickSand, sans-serif"}}>{props.title}</Typography>
        </Box>

    )
}

export default QuestionsElement