import { Box, Button, IconButton, Input,  } from "@mui/material";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import clsx from "clsx";
import userStyle from "./style";
import { useQuery } from '@apollo/client';
import { GET_USER } from "../../graphql/query/get-user";

const InfoUser = () => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: '63aaba2200d92b803b05e00d' },
    });
    
    const classes = userStyle();
    const basicClass = clsx(classes.root);
    return (
        <Box  className={basicClass} >
            <Box component='div' className="sibar">
                <Box component='div' >
                    <img src={Logo} alt='Kompa Group' className="imageLogo"/>
                </Box>
                <Box component='div' className="toolBar">
                    <label>Hi, Khoa</label>
                    <IconButton>
                        <CircleNotificationsIcon sx={{ color: '#b6b9dccc' }} />
                    </IconButton>
                    <Link to="/login" style={{
                        textDecoration: 'none',
                    }}>
                        <Box component="div" sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Button variant="outlined" className="btnLogout">
                                Log out
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Box className="infoUser">
                <Box className="details">
                    <Box> Profile</Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Họ và tên
                            </label>
                        </Box>
                        <Input disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Giới tính
                            </label>
                        </Box>
                        <Input disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Số điện thoại
                            </label>
                        </Box>
                        <Input disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                               Email
                            </label>
                        </Box>
                        <Input disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Địa chỉ
                            </label>
                        </Box>
                        <Input disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Phòng Ban
                            </label>
                        </Box>
                        <Input disabled ></Input>
                    </Box>
                </Box>
            </Box>
        </Box >

    );
};
export default InfoUser;
