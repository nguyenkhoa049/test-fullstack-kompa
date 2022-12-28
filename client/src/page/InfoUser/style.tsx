import { makeStyles } from "@mui/styles";

const userStyle = makeStyles(() => ({
    root: {
        '& .sibar':{
            justifyContent: 'space-between',
            boxShadow: '0px 2px 0px 0px #141fef21',
            padding: '0px 5px',
            display: 'flex',
            '& .imageLogo':{
                margin: '10px', 
                height: '50px' 
            },
            '& .toolBar':{
                paddingRight: '10px', display: 'flex',
                alignItems: 'center', fontSize: '13px',
                width: '170px', justifyContent: 'space-between',
                '& .btnLogout':{
                    fontWeight: 'bold',
                    border: 'none',
                    textTransform: 'unset',
                    backgroundColor: '#3e12ec08',
                    fontSize: '13px',
                    '&:hover': {
                        border: 'none',
                        backgroundColor: 'rgb(25 118 210 / 12%)'
                    }
                }
            }
        },
        '& .infoUser':{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            fontSize: '14px',
            fontFamily: 'Euclid Circular AE',
            fontWeight: 'bold',
            '& .details':{
                width: '450px',
                boxShadow: 'rgba(0, 30, 43, 0.3) 0px 4px 10px -4px',
                borderRadius: '24px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(232, 237, 235)',
                padding: '24px',
                '& .title':{
                    width: '100%',
                },
                '& .MuiInput-root, & .MuiSelect-select, & .MuiInputBase-root': {
                    display: 'flex',
                    width: '100%' ,
                    
                    '& input': {
                        fontSize: '14px',
                        borderRadius: '6px',
                        transition: 'border-color 150ms ease-in-out 0s, box-shadow',
                        
                    },
                    '&:hover::before': {
                        borderBottom: 'none'
                    },
                    '&:hover::after': {
                        borderBottom: 'none'
                    },
                    '&::before': {
                        borderBottom: 'none!important'
                    },
                    '&::after': {
                        borderBottom: 'none'
                    },
                    '& .MuiIconButton-edgeEnd': {
                        marginRight: 0,
                        padding: '0 10px',
                        backgroundColor: 'transparent'
                    },
                },

                '& .MuiFormLabel-asterisk': {
                    color: 'var(--mscb-danger)'
                },
                '& .MuiInputBase-root': {
                    padding: '0!important',
                    borderRadius: 0,
                    backgroundColor: 'var(--secondary)'
                },
                '& .MuiAutocomplete-inputRoot': {
                    '& .MuiOutlinedInput-input': {
                        paddingRight: '50px !important',
                    }
                },
                '& fieldset': {
                    border: 'none'
                },
                '& .Mui-disabled': {
                    color: 'rgb(136, 147, 151)',
                    backgroundColor: 'rgb(232, 237, 235)',
                    borderColor: 'rgb(193, 199, 198)',
                }
            }
        }
       

    }
}));

export default userStyle;