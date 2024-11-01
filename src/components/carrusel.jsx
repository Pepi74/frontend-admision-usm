import React, {useState} from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import {useNavigate} from 'react-router-dom';
import InformacionesImg from '../assets/carrusel/informaciones.jpg';
import SimuladorImg from '../assets/carrusel/simulador.jpg';
import TourVirtualImg from '../assets/carrusel/tour-virtual.jpg';
import ConsultaImg from '../assets/carrusel/consulta-adm.jpg';
import CulturaUSM from '../assets/carrusel/cultura-usm.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';

const styleC = {
    border: '2',
    paddingLeft: '20px',
    paddingRight: '15px',
    borderColor: 'divider',
    backgroundColor: '#fff',
    textAlign: 'initial',
    height: '165px', 
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

const NextArrow = ({ onClick }) => (
    <ArrowForwardIos
        style={{ color: 'black', fontSize: 30, right: -20, position: 'absolute', top: '65px', cursor: 'pointer' }}
        onClick={onClick}
    />
);

const PrevArrow = ({ onClick }) => (
    <ArrowBackIos
        style={{ color: 'black', fontSize: 30, left: -15, position: 'absolute', bottom: '65px', cursor: 'pointer' }}
        onClick={onClick}
    />
);


const Carrusel = () => {
    const navigate = useNavigate();
    const [clickStart, setClickStart] = useState(0);
    
    const clickAbajo = () => {
        setClickStart(Date.now());
    };

    const clickArriba = (path, val) => {
        const duracionClick = Date.now() - clickStart;
        if(duracionClick < 200){
            if(val == 2){
                window.location.href = 'https://usm.cl/';
                return
            }
            else if(val == 3){
                window.location.href = 'https://usm.cl/admision/';
                return
            }
            else if(val == 4){
                window.location.href = 'https://tour360.usm.cl/';
                return
            }
            else if(val == 5){
                window.location.href = 'https://cultura.usm.cl/';
                return
            }
            else {
                navigate(path)
            }
            
        }
    };

    const items = [
        { title: "Simulación de postulación PAES", image: SimuladorImg, path: '/simulador', value: 1 },
        { title: "Universidad", image: InformacionesImg, path: '/universidad', value: 2 },
        { title: "Informaciones Admisión", image: ConsultaImg, path: '/admision', value: 3 },
        { title: "Tour Virtual", image: TourVirtualImg, path: '/tour-virtual', value: 4 },
        { title: "Cultura USM", image: CulturaUSM, path: '/cultura-usm', value: 5 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                    <Grid sx={styleC} key={index} onMouseDown={clickAbajo} onMouseUp={() => clickArriba(item.path,item.value)}>
                        <Box sx={{ ...styleC, backgroundImage: `url(${item.image})`}}>
                            <h3 className='titulo-recuadro'>{item.title}</h3>
                        </Box>
                    </Grid>
                ))}
            </Slider>
        </>
    );
}

export default Carrusel;
