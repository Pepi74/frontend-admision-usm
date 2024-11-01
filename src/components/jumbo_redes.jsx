import React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '../assets/tiktok.svg';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
    border: '2'
}));

const styleBoxYT = {
    backgroundColor: 'red',
    borderRadius: '10px',
};
const styleBoxFB = {
    backgroundColor: 'blue',
    borderRadius: '10px',
};
const styleBoxIG = {
    backgroundColor: 'purple',
    borderRadius: '10px',
};
const styleBoxTT = {
    backgroundColor: 'black',
    borderRadius: '10px',
};

const iconoStyle= {
    filter: 'invert(1)',
    padding: '30px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
};

const JumboRedes = () => {
    return (
        <>
            <h1 style={{paddingTop:'50px'}}>REDES SOCIALES</h1>
            <Grid container spacing={4} justifyContent={'center'}>
            <Grid size={{ xs: 12, s: 8, md: 2 }} sx={styleBoxFB}>
                    <div style={iconoStyle}>
                        <FacebookIcon style={{ fontSize: '60px' }}/>
                    </div>
                    
                    <div className='contenedor-redes'>
                        @admisionusm
                        <a className='contenedor-redireccion' href='https://www.facebook.com/AdmisionUSM/'>Ir a Facebook</a>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2 }} sx={styleBoxIG}>
                    <div style={iconoStyle}>
                        <InstagramIcon style={{ fontSize: '60px' }}/>
                    </div>
                    
                    <div className='contenedor-redes'>
                        @admisionusm
                        <a className='contenedor-redireccion' href='https://www.instagram.com/admisionusm/'>Ir a Instagram</a>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2 }} sx={styleBoxYT}>
                    <div style={iconoStyle}>
                        <YouTubeIcon style={{ fontSize: '60px' }}/>
                    </div>
                    
                    <div className='contenedor-redes'>
                        @usmadmision
                        <a className='contenedor-redireccion' href='https://www.youtube.com/usmadmision'>Ir a Youtube</a>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2 }} sx={styleBoxTT}>
                    <div style={iconoStyle}>
                        <img src={TikTokIcon} width='60px' />
                    </div>
                    
                    <div className='contenedor-redes'>
                        @usmadmision
                        <a className='contenedor-redireccion' href='https://www.tiktok.com/@admisionusm'>Ir a TikTok</a>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default JumboRedes;
