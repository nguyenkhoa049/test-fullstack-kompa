import { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { InputLabel } from "@mui/material";
import Logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";


const LoginPage: FC = () => {


    return (
        <Grid container sx={{
            height: '100vh',
            backgroundColor: '#f0f8ff',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid item sx={{
                height: 'fit-content',
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '2%'
            }}>
                <img src={Logo} alt='Kompa Group' style={{ margin: '10px' }} />
                <Box component="div">
                    <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold' }} >Tên đăng nhập</InputLabel>
                    <Input sx={{
                        backgroundColor: '#e8f0fe',
                        margin: '5px 0px',
                        padding: '0px 10px',
                        width: '100%',
                        '&::after': {
                            borderBottom: 'unset'
                        },
                        '&::before': {
                            borderBottom: 'unset'
                        }
                    }} />
                </Box>
                <Box component="div" >
                    <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold' }} >Mật khẩu</InputLabel>
                    <Input type="password"
                        sx={{
                            backgroundColor: '#e8f0fe',
                            margin: '5px 0px',
                            padding: '0px 10px',
                            width: '100%',
                            '&::after': {
                                borderBottom: 'unset'
                            },

                            '&::before': {
                                borderBottom: 'unset'
                            }

                        }} />
                </Box>

                <Link to="/user" style={{
                     textDecoration:'none'
                }}>
                    <Box component="div" sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5px'
                    }}>
                        <Button variant="outlined" sx={{
                            width: '100%',
                            fontWeight: 'bold',
                           
                        }}>
                            Đăng nhập
                        </Button>
                    </Box>
                </Link>


            </Grid>
        </Grid>
    );
};

export default LoginPage;