import * as React from 'react';
import { useContext, useEffect, useState } from 'react';

import {
    useHistory,

} from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LoginContext } from '../LoginContext'
import axios from 'axios';



const theme = createTheme();

export default function SignIn() {
    const { setUser } = useContext(LoginContext)
    const [users, setUsers] = useState([])
    const history = useHistory()


    // seEffect(() => {
    //     const fetchData = async () => {
    //        const data = await getData(1);
    //        setData(data);
    //     }

    //     fetchData();
    //   }, []);



    async function getUserData() {
        const url = "https://jsonplaceholder.typicode.com/users"
        try {
            const response = await axios.get(url);

            return response.data;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        // let isMounted=true
       
        const fetchData = async () => {
            const data = await getUserData();
            console.log(data);
                setUsers(data);
                
            }
            
            
            fetchData()
            



    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // const userData = {
        //     email: data.get('email'),
        //     password: data.get('password'),
        // }

        const found = users.find(element => element.email === data.get('email'));
        if (found) {
            setUser(found)
            history.push("/post")
        } else {
            console.log("abdullah from error");
            alert("incorrect email")
        }

    };




    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            data-testid="loginButton"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}