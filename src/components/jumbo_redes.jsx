import React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
    border: '2'
}));

const JumboRedes = () => {
    return (
        <>
            <h1 style={{paddingTop:'50px'}}>REDES SOCIALES</h1>
            <Grid container spacing={4} justifyContent={'center'}>
                <Grid size={{ xs: 12, s: 8, md: 2 }}>
                    <Item>size=8</Item>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2 }}>
                    <Item>size=8</Item>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2 }}>
                    <Item>size=8</Item>
                </Grid>
                <Grid size={{ xs: 12, s: 8, md: 2 }}>
                    <Item>size=8</Item>
                </Grid>
            </Grid>
        </>
    );
}

export default JumboRedes;
