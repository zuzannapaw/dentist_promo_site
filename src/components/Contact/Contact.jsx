import { Box, Typography } from "@mui/material"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from "leaflet";
import QuestionsElement from "../AboutUs/questionsElement/QuestionsElement";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PlaceIcon from '@mui/icons-material/Place';


const Contact = () => {

    const position = {
        data: {
            id: "map"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [40.719230, -73.993870]
        }
    }

    return (
        <>
            <Box style={{ width: "100%", height: "85.3vh", color: "black", display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Box style={{ height: "10vh", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginBottom: "3%", marginTop: "3%" }}>
                    <Typography style={{ fontSize: "2.7rem", fontFamily: "QuickSand,sans-serif", }}>Contact us!</Typography>
                </Box>
                <Box style={{ width: "100%", height: "50vh", display: "flex" }}>
                    <Box style={{ width: "50%", height: "100%", }}>
                        <MapContainer center={[position.geometry.coordinates[0], position.geometry.coordinates[1]]} zoom={12} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker
                                key={position.data.id}
                                position={[position.geometry.coordinates[0], position.geometry.coordinates[1]]}>
                                icon={Icon}
                            </Marker>
                        </MapContainer>
                    </Box>
                    <Box style={{ display: "flex",flexDirection:"column" ,width: "50%", backgroundColor: "#67C9CB", justifyContent:"space-around" }}>
                        <QuestionsElement title={"+976 666 222"} icon={<CallIcon style={{ color: "#516363" }} />} />
                        <QuestionsElement title={"toothlesdent@dent.com"} icon={<EmailIcon style={{ color: "#516363" }} />} />
                        <QuestionsElement title={"7:00 - 20:00"} icon={<HistoryToggleOffIcon style={{ color: "#516363" }} />} />
                        <QuestionsElement title={"Broome Street 76-367 New York"} icon={<PlaceIcon style={{ color: "#516363" }} />} />

                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Contact