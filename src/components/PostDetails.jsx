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

import { getPostComment ,getSinglePost } from '../services/PostService';


import {
    useParams
} from "react-router-dom";

export default function PostDetails() {
    const { user } = useContext(LoginContext)
    const [post, setpost] = useState({})  
    const [comments, setComments] = useState([])    

    const theme = createTheme();
    
    const {id} =useParams()

    useEffect(async () => {


        const singlePostData = await getSinglePost(id)
        const postComment = await getPostComment(id)
        
        console.log(singlePostData);
        
        setpost(singlePostData)
        setComments(postComment)
        console.log(postComment);
        

    }, [])



    return (
        <>
        <ThemeProvider theme={theme}>
     
      
      <main>
       
        <Container sx={{ py: 16 }} maxWidth="md">
          <Grid container spacing={6}>
            {/* {posts.map((item) => ( */}
              <Grid xs={12} sm={6} md={4}>
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
                     {post.title}
                    </Typography>
                    <Typography>
                     {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
        
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </>

    );

}




