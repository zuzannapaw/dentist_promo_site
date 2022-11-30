import {Box, Typography } from "@mui/material"

const QuestionsElement = (props) => {
    return (
        <Box style={{ textAlign: "center" }}>
            {props.icon}
            <Typography style={{ color: "white", fontSize: "1.3rem", fontFamily: "QuickSand, sans-serif" }}>{props.title}</Typography>
        </Box>

    )
}

export default QuestionsElement