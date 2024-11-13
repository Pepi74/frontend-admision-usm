import React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '../assets/tiktok.svg';
import { Link } from 'react-router-dom';

const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    }
}));

const styleBoxYT = {
    backgroundColor: '#FF0000',
};
const styleBoxFB = {
    backgroundColor: "#3B5998",
};
const styleBoxIG = {
    backgroundColor: '#990099',
};
const styleBoxTT = {
    backgroundColor: 'black',
};

const iconoStyle = {
    filter: 'invert(1)',
    padding: '2em 4em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const JumboRedes = () => {
    return (
        <>
            <h1 style={{ paddingTop: '50px' }}>REDES SOCIALES</h1>
            <Grid container spacing={4} justifyContent={'center'}>
                {/* Facebook */}
                <Grid item xs={12} sm={6} md={3}>
                    <Item sx={styleBoxFB}>
                        <div style={iconoStyle}>
                            <FacebookIcon style={{ fontSize: '80px', color: '#000' }} />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <h4 style={{ color: '#fff', marginTop: '-15px' }}>@admisionusm</h4>
                            <a href="https://www.facebook.com/AdmisionUSM/" style={{ color: '#fff' }}>Ir a Facebook</a>
                        </div>
                    </Item>
                </Grid>
                {/* Instagram */}
                <Grid item xs={12} sm={6} md={3}>
                    <Item sx={styleBoxIG}>
                        <div style={iconoStyle}>
                            <InstagramIcon style={{ fontSize: '80px', color: '#000' }} />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <h4 style={{ color: '#fff', marginTop: '-15px' }}>@admisionusm</h4>
                            <a href="https://www.instagram.com/admisionusm/" style={{ color: '#fff' }}>Ir a Instagram</a>
                        </div>
                    </Item>
                </Grid>
                {/* YouTube */}
                <Grid item xs={12} sm={6} md={3}>
                    <Item sx={styleBoxYT}>
                        <div style={iconoStyle}>
                            <YouTubeIcon style={{ fontSize: '80px', color: '#000' }} />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <h4 style={{ color: '#fff', marginTop: '-15px' }}>@usmadmision</h4>
                            <a href="https://www.youtube.com/usmadmision" style={{ color: '#fff' }}>Ir a Youtube</a>
                        </div>
                    </Item>
                </Grid>
                {/* TikTok */}
                <Grid item xs={12} sm={6} md={3}>
                    <Item sx={styleBoxTT}>
                        <div style={iconoStyle}>
                            <img src={TikTokIcon} width='80px' />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <h4 style={{ color: '#fff', marginTop: '-15px' }}>@usmadmision</h4>
                            <a href="https://www.tiktok.com/@admisionusm" style={{ color: '#fff' }}>Ir a TikTok</a>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default JumboRedes;
