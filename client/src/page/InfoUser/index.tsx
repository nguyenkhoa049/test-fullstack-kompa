import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import {
    FaBuilding,
    FaMapMarkerAlt
} from "react-icons/fa";
import Logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const InfoUser = () => {
    return (
        <Box margin={"10px 2px 10px 10px"} >
            <Grid container spacing={1} sx={{
                justifyContent: 'space-between',
                boxShadow: '0px 2px 0px 0px #141fef21'
            }}>
                <Grid >
                    <img src={Logo} alt='Kompa Group' style={{ margin: '10px', height: '50px' }} />
                </Grid>
                <Grid sx={{ padding: '10px', }}>
                    <Link to="/login" style={{
                        textDecoration: 'none',
                    }}>
                        <Box component="div" sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '5px'
                        }}>
                            <Button variant="outlined" sx={{
                                fontWeight: 'bold',
                            }}>
                                LOGOUT
                            </Button>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xl={10} md={8}>
                    asdasd
                </Grid>
                <Grid item xl={10} md={8}>
                    asdasd
                </Grid>
                <Grid item xl={10} md={8}>
                    asdasd
                </Grid>
            </Grid>
        </Box>

    );
};
export default InfoUser;
