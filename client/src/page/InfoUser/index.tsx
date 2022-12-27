import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import {
    FaBuilding,
    FaCalendarAlt,
    FaFemale,
    FaMale,
    FaMapMarkerAlt
} from "react-icons/fa";
const InfoUser = () => {


    return (
        <Box margin={"10px 2px 10px 10px"} >


            <Grid container spacing={1}>
                <Grid item xl={1} md={2}>
                    <Avatar
                        alt="avatar"
                        className="avatar"
                    />
                </Grid>
                <Grid item xl={11} md={10}>
                    <Grid className="full-name color-primary">

                    </Grid>
                    <Grid item xl={12} md={12} xs={12} alignItems="flex-end">
                        <span className="emailAddress">
                            <EmailIcon />
                            mail
                        </span>
                    </Grid>
                    <Grid item xl={12} md={12} xs={12}>
                        <PhoneAndroidIcon />
                        phone
                    </Grid>
                    <Grid item xl={12} md={12} xs={12} className="staffid">
                        <RememberMeIcon />
                        <span>Mã số nhân viên: </span>
                    </Grid>
                </Grid>
                <Grid item xl={12}>
                    <Divider variant="fullWidth" />
                    <Grid marginTop={"10px"} container spacing={2}>
                        <Grid item xl={3} md={6}>
                            <Box alignItems={"center"} display={"flex"}>
                                <Box
                                    className="flex-center"
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "rgba(80, 161, 255, 0.1)",
                                    }}
                                >
                                    <FaMapMarkerAlt color="var(--mscb-primary)" />

                                </Box>
                                <Box marginLeft={"8px"}>
                                    <Typography fontSize={14} component={"p"}>
                                        Đơn vị công tác
                                    </Typography>
                                    <Typography
                                        fontSize={14}
                                        fontWeight={"bold"}
                                        component={"p"}
                                    >
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Chức danh */}

                        <Grid item xl={3} md={6}>
                            <Box alignItems={"center"} display={"flex"}>
                                <Box
                                    className="flex-center"
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "rgba(80, 161, 255, 0.1)",
                                    }}
                                >
                                    <FaBuilding color="var(--mscb-primary)" />

                                </Box>
                                <Box marginLeft={"8px"}>
                                    <Typography fontSize={14} component={"p"}>
                                        Chức danh
                                    </Typography>
                                    <Typography
                                        fontSize={14}
                                        fontWeight={"bold"}
                                        className="text-primary"
                                        component={"p"}
                                    >
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Cap quan li tt */}
                        <Grid item xl={3} md={6}>
                            <Box alignItems={"center"} display={"flex"}>
                                <Box
                                    className="flex-center"
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "rgba(80, 161, 255, 0.1)",
                                    }}
                                >
                                </Box>
                                <Box marginLeft={"8px"}>
                                    <Typography fontSize={14} component={"p"}>
                                        Cấp quản lý trực tiếp
                                    </Typography>
                                    <Typography
                                        fontSize={14}
                                        fontWeight={"bold"}
                                        component={"p"}
                                    >
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={3} md={6}>
                            <Box alignItems={"center"} display={"flex"}>
                                <Box
                                    className="flex-center"
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "rgba(80, 161, 255, 0.1)",
                                    }}
                                >
                                </Box>
                                <Box marginLeft={"8px"}>
                                    <Typography fontSize={14} component={"p"}>
                                        Số điện thoại nội bộ
                                    </Typography>
                                    <Typography
                                        fontSize={14}
                                        fontWeight={"bold"}
                                        className="text-primary"
                                        component={"p"}
                                    >
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
};
export default InfoUser;
