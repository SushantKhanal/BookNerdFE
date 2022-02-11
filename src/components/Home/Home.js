import { CssBaseline, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import SignIn from '../../screens/Authentication/SignIn/SignIn';
import SignOut from '../../screens/Authentication/SignOut/SignOut';
import { updateLocalStorageUserData } from '../../utils/localStorageService';
import AddPostFAB from '../AddPost/AddPostFAB/AddPostFAB';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/RightBar';

const Home = () => {

    // let [isLoggedIn, setLoggedIn] = useState();

    // const changeLoggedInStateHandler = (data, state) => {
    //   updateLocalStorageUserData(data, state);
    //   setLoggedIn(state);
    // }

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
