import { Box, ImageList, ImageListItem, Typography } from "@mui/material"

const Gallery = () => {
    const itemData = [


        {
            img: 'https://cdn.pixabay.com/photo/2016/11/28/12/22/dentist-1864921_960_720.jpg',
            title: 'Bed',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2016/06/05/14/16/dentist-1437430_960_720.jpg',
            title: 'Kitchen',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/02/26/04/15/woman-2099474_960_720.jpg',
            title: 'Sink',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/08/06/07/12/dentist-2589771_960_720.jpg',
            title: 'Books',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2014/12/10/21/01/doctor-563429_960_720.jpg',
            title: 'Chairs',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2014/08/26/21/55/dentist-428649_960_720.jpg',
            title: 'Candle',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530994_960_720.jpg',
            title: 'Laptop',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2016/06/05/14/11/dentist-1437413_960_720.jpg',
            title: 'Doors',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2015/08/13/18/35/teeth-887338_960_720.jpg',
            title: 'Coffee',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2020/07/14/18/13/dentist-5405156_960_720.jpg',
            title: 'Storage',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/07/23/10/43/sterilisation-room-2530987_960_720.jpg',
            title: 'Coffee table',
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/06/28/14/05/dental-2450766_960_720.jpg',
            title: 'Blinds',
        },
    ];

    return (
        <Box style={{ width: "100%", height: "100vh", color: "black", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Box style={{ height: "10vh", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginBottom: "3%", marginTop: "3%" }}>
                <Typography style={{ fontSize: "2.7rem", fontFamily: "QuickSand,sans-serif", }}>Our patients,office and smiles</Typography>
                <Typography style={{ fontSize: "1.5rem", fontFamily: "QuickSand,sans-serif", }}>Gallery of Toothless Dental Office</Typography>
            </Box>
            <ImageList sx={{ width: 1200, height: 800 }} variant="woven" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default Gallery