import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect, useState } from 'react';

import { getPostComment ,getSinglePost } from '../services/PostService';
import Comment from './Comment';


import {
    useParams
} from "react-router-dom";

export default function PostDetails() {
    const [post, setpost] = useState({})  
    const [comments, setComments] = useState([])    

    const theme = createTheme();
    
    const {id} =useParams()

    useEffect(async () => {


        const singlePostData = await getSinglePost(id)
        const postComment = await getPostComment(id)
        
        
        setpost(singlePostData)
        setComments(postComment)
        

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
    

    {comments.map((item) => (
         
    <Comment key={item.id} comments={item} />
            ))}

    </>

    );

}






