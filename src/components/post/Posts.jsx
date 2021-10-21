import * as React from 'react';
import { useContext, useEffect, useState } from 'react';

import {
    useHistory,

} from "react-router-dom";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LoginContext } from '../LoginContext'
import { getPost, getSinglePost } from '../../services/PostService';


export default function Posts() {
    const { user } = useContext(LoginContext)
    const [posts, setposts] = useState([])

    const theme = createTheme();
    const history = useHistory()

    useEffect(() => {

        

        let allPosts 
        let userPosts = []

        const fetchData = async () => {
            allPosts = await getPost();
            userPosts = allPosts.filter((item) => {
                return item.userId === user.id
    
            })
            setposts(userPosts)
            
        }


        fetchData()


    }, [user.id])


    const handleSubmit = (item) => {
        history.push(`/posts/${item.id}`)

    };


    return (
        <>
            <ThemeProvider theme={theme}>


                <main>

                        <Grid  container spacing={6} sx={{pt: '3%'}} >
                            {posts.map((item) => (
                                <Grid item key={item.id} xs={12} sm={6} md={3}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                           
                                            image="https://source.unsplash.com/random"
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2" data-testid="title of the post" >
                                                {item.title}
                                            </Typography>
                                            <Typography>
                                                {item.body}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => handleSubmit(item)} size="small">View</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                </main>
            </ThemeProvider>
        </>

    );

}




