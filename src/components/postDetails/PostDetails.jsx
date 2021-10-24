import * as React from 'react';
import { useEffect, useState } from 'react';

import {
    useParams
} from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { getPostComment, getSinglePost } from '../../services/PostService';
import Comment from '../comment/Comment'



export default function PostDetails() {
    const [post, setpost] = useState({})
    const [comments, setComments] = useState([])

    const { id } = useParams()

    useEffect( () => {


        const fetchData = async () => {
            const postComment = await getPostComment(id)
            const singlePostData = await getSinglePost(id)
            console.log(singlePostData);
            setpost(singlePostData)
            setComments(postComment)
        }


        fetchData()




    }, [])



    return (
        <>
            <Container sx={{ py: 16 }} maxWidth="md">
                <Grid container spacing={3}>
                    {/* {posts.map((item) => ( */}
                    <Grid item xs={12}>
                        <Card
                            sx={{ height: '100%' }}
                        >
                            <CardMedia
                                component="img"
                                image="https://source.unsplash.com/random"
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2" data-testid="title">
                                    {post.title}
                                </Typography>
                                <Typography>
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {comments && comments.map((item) => (
                        <Grid key={item.id} item xs={12} sm={4} >
                            <Comment  comments={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>





        </>

    );

}






