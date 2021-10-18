import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginContext'

import { getPost ,getSinglePost } from '../services/PostService';

import {
    useHistory,
    
} from "react-router-dom";

export default function Posts() {
    const { user } = useContext(LoginContext)
    const [posts, setposts] = useState([]) 
    
    const theme = createTheme();
    const history = useHistory()
    useEffect(async () => {
        let allPosts = await getPost()
        let userPosts = []
        userPosts = allPosts.filter((item) => {
            return item.userId === user.id

        })

        setposts(userPosts)
        

    }, [])


    const handleSubmit = (item) => {
    //    console.log(item);
    getSinglePost(item.id)
    history.push(`/posts/${item.id}`)

    };


    return (
        <>
        <ThemeProvider theme={theme}>
     
      
      <main>
       
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={6}>
            {posts.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>
                    {item.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>handleSubmit(item)} size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </>

    );

}




