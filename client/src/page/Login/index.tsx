import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { InputLabel } from "@mui/material";
import Logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../graphql/query/login";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/query/get-user";


const LoginPage: FC = () => {

    const {  data} = useQuery(GET_CURRENT_USER);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [login, _] = useMutation(LOGIN_USER);
    const onLogin = async () => {
        const res = await login({ variables: { username, password } })
        if (res.data.loginUser.success) {
            document.cookie = `accessToken=${res.data.loginUser.accessToken}`;
            navigate('/')
        } else {
            if (res.data?.loginUser.message) setError(res.data.loginUser.message)
        }
    }

    useEffect(()=>{
        if(data && data.currentUser){
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

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
                <Box sx={{
                    height: '10px',
                    margin: '15px 0px'
                }}>
                    {error && <label style={{ color: 'red' , fontStyle: 'italic'}}>{error}</label>}
                </Box>
                <Box component="div">
                    <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold' }} >Tên đăng nhập</InputLabel>
                    <Input
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        sx={{
                            backgroundColor: '#e8f0fe',
                            margin: '5px 0px',
                            padding: '0px 10px',
                            width: '100%',
                            '&::after': {
                                borderBottom: 'none'
                            },
                            '&::before': {
                                borderBottom: 'none !important'
                            }
                        }} />
                </Box>
                <Box component="div" >
                    <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold' }} >Mật khẩu</InputLabel>
                    <Input type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        sx={{
                            backgroundColor: '#e8f0fe',
                            margin: '5px 0px',
                            padding: '0px 10px',
                            width: '100%',
                            '&::after': {
                                borderBottom: 'none'
                            },

                            '&::before': {
                                borderBottom: 'none !important'
                            }

                        }} />
                </Box>

                <Box onClick={onLogin} component="div" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '5px'
                }}>
                    <Button variant="outlined" sx={{
                        width: '100%',
                        fontWeight: 'bold',

                    }}>
                        Log in
                    </Button>
                </Box>


            </Grid>
        </Grid>
    );
};

export default LoginPage;