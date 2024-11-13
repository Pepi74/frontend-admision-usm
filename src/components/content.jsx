import React from 'react';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import UsmLogo from '../assets/postulaciones.jpg';
import Button from '@mui/material/Button';

const style = {
  py: 0,
  borderRadius: "10px",
  border: '1px solid',
  borderColor: 'divider',
  background: '#F5F5F5',
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
  padding: 2,
};

const styleli = {
    border: '1px solid #000',
    borderRadius: '10px',
    background: '#FFF',
    marginTop: 1,
    color: 'black',
    textAlign: 'center'

}

const styleC = {
    border: '1px solid',
    borderColor: 'divider',
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.18%, #000 99.82%), url(${UsmLogo}) lightgray 50% / cover no-repeat`,
    textAlign: 'center',
    height: '265px', 
    borderRadius: "10px",
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
    display: 'flex',
    justifyContent: 'initial',
    alignItems: 'end',
}
const styleButtonPostular ={
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FFBF00',
    border: '1px solid #000',
    color: '#000',
    padding: '5px 35px',
    borderRadius: '20px',
    margin: '1cm',
}

const Informaciones = () => {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }} sx={styleC}>
                <Button variant="contained" sx={styleButtonPostular} component={Link} to="/postulaciones"> Postula aquí</Button>
            </Grid>
            
            <Grid size={{ xs: 12, md: 3 }}>
                <List sx={style}>
                    <ListItem sx={styleli} component={Link} to="https://usm.cl/categorias_noticias/admision/" target="_blank" rel="noopener noreferrer">
                        <ListItemText primary="Noticias admisión"/>
                    </ListItem>
                    <ListItem sx={styleli} component={Link} to="/beneficios">
                        <ListItemText primary="Beneficios" />
                    </ListItem>
                    <ListItem sx={styleli} component={Link} to="/aranceles">
                        <ListItemText primary="Aranceles" />
                    </ListItem>
                    <ListItem sx={styleli} component={Link} to="/oferta">
                        <ListItemText primary="Conoce nuestra oferta" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Informaciones;
