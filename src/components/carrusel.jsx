import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import InformacionesImg from '../assets/informaciones.jpg';
import SimuladorImg from '../assets/simulador.jpg';
import TourVirtualImg from '../assets/tour-virtual.jpg';
import ConsultaImg from '../assets/consulta-adm.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styleC = {
    border: '2',
    paddingLeft: '20px',
    paddingRight: '15px',
    borderColor: 'divider',
    backgroundColor: '#fff',
    textAlign: 'initial',
    height: '170px', 
    borderRadius: 2,
    //boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
    backgroundSize: 'cover', 
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    alignContent: 'end',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.01)',
    },
}


const Carrusel = () => {
    const navigate = useNavigate();

    const items = [
        { title: "Simulación de postulación PAES", image: SimuladorImg, path: '/simulacion-paes' },
        { title: "Universidad", image: InformacionesImg, path: '/universidad' },
        { title: "Admisión", image: ConsultaImg, path: '/admision' },
        { title: "Tour Virtual", image: TourVirtualImg, path: '/tour-virtual' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <h1 style={{paddingTop:'50px'}}>INFORMACIONES</h1>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Grid sx={styleC} key={index} onClick={() => navigate(item.path)}>
                        <Box sx={{ ...styleC, backgroundImage: `url(${item.image})`}}>
                            <h3 className='titulo-recuadro'>{item.title}</h3>
                        </Box>
                    </Grid>
                ))}
            </Slider>

            {/*<Grid container spacing={2} justifyContent={'center'} paddingTop={'50px'}>
                <Grid size={{ xs: 12, s: 8, md: 2.5 }} sx={styleC}>
                    <Box sx={{ ...styleC, backgroundImage: `url(${SimuladorImg})`}}>
                        <h3 className='titulo-recuadro'>Simulación de postulación PAES</h3>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2.5 }} sx={styleC}>
                    <Box sx={{ ...styleC, backgroundImage: `url(${InformacionesImg})`}}>
                        <h3 className='titulo-recuadro'>Universidad</h3>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2.5 }} sx={styleC}>
                    <Box sx={{ ...styleC, backgroundImage: `url(${ConsultaImg})`, backgroundSize: 'cover', backgroundPosition: 'center', alignContent: 'end' }}>
                        <h3 className='titulo-recuadro'>Admisión</h3>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2.5 }} sx={styleC}>
                    <Box sx={{ ...styleC, backgroundImage: `url(${TourVirtualImg})`}}>
                        <h3 className='titulo-recuadro'>Tour Virtual</h3>
                    </Box>
                </Grid>
            </Grid>*/}
        </>
    );
}

export default Carrusel;
