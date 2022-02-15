import { CssBaseline, Grid } from '@mui/material';
import React from 'react';
import AddPostFAB from '../AddPost/AddPostFAB';
import Feed from '../Feed';
import Navbar from '../Navbar';
import Rightbar from '../Rightbar';

const Home = () => {

    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <Grid container>
                <Grid item md={8} xs={12}>
                    <Feed/>
                </Grid>
                <Grid item md={4}>
                    <Rightbar/>
                </Grid>
            </Grid>
            <AddPostFAB/>
        </>
        );
    }

export default Home;
