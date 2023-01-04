import { Box, Button, IconButton, Input,  } from "@mui/material";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Logo from '../../assets/images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import userStyle from "./style";
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from "../../graphql/query/get-user";
import Cookies from 'js-cookie'
import { useEffect } from "react";

const InfoUser = () => {
    const {  data, refetch, loading} = useQuery(GET_CURRENT_USER);
    console.log("loading", loading);
    
    const classes = userStyle();
    const basicClass = clsx(classes.root);
    const navigate = useNavigate()

    useEffect(()=>{
        refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if(data && !data.currentUser){
            navigate('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    const onLogout = ()=>{
        Cookies.remove('accessToken') 
        refetch()
    }

    return (
        <Box  className={basicClass} >
            <Box component='div' className="sibar">
                <Box component='div' >
                    <img src={Logo} alt='Kompa Group' className="imageLogo"/>
                </Box>
                <Box component='div' className="toolBar">
                    <label>Hi, {data?.currentUser?.name ?? ''}</label>
                    <IconButton>
                        <CircleNotificationsIcon sx={{ color: '#b6b9dccc' }} />
                    </IconButton>
                    <Link to="/" style={{
                        textDecoration: 'none',
                    }}>
                        <Box onClick={onLogout} component="div" sx={{
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
                        <Input value={data?.currentUser?.name ?? ''} disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Giới tính
                            </label>
                        </Box>
                        <Input value={data?.currentUser?.sex === true ? 'Nam' :'Nữ' ?? ''} disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Số điện thoại
                            </label>
                        </Box>
                        <Input value={data?.currentUser?.phone ?? ''} disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                               Email
                            </label>
                        </Box>
                        <Input value={data?.currentUser?.email ?? ''} disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Địa chỉ
                            </label>
                        </Box>
                        <Input value={data?.currentUser?.address ?? ''}  disabled ></Input>
                    </Box>
                    <Box className="info">
                        <Box className="title">
                            <label >
                                Phòng Ban
                            </label>
                        </Box>
                        <Input value={data?.currentUser?.department ?? ''} disabled ></Input>
                    </Box>
                </Box>
            </Box>
        </Box >

    );
};
export default InfoUser;
