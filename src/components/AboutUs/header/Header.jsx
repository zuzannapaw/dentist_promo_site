import { Box} from "@mui/material"
import styled,{keyframes} from "styled-components"

// const StyledImage = styled.img`
// width:100vw;
// `

const changeImg = keyframes`
    0%  {transform:translateX(0)}
    50% {transform:translateX(50vw)}
    100% {transform:translateX(100vw)}
    `

const Header = () => {


    // let activeElement = 0
    // let imageChangeHandler;

    // const changeImg= () => {
    //     activeElement++
    //     if (activeElement > 3) {
    //         activeElement = 0
    //     }

    //     imageChangeHandler = setImageSrc(images[activeElement])
    // }

    // useEffect(() => {
    //     setInterval(changeImg, 5000)
    //     return()=>{
    //         clearInterval(imageChangeHandler)
    //     }

    // }, [])



    return (
        <Box>
            <Box sx={{ display: "flex", height: '50%', alignItems: "space-between", transition: "5s",overflow: "hidden"}}>
                <image src="https://cdn.pixabay.com/photo/2020/09/09/12/18/dental-care-5557438_960_720.jpg" alt="dentist"></image>
                <image src="https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_960_720.jpg" alt="dentist"></image>
                <image src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_960_720.jpg" alt="dentist"></image>
            </Box>
        </Box>
    )
}

export default Header