

import axios from "axios";

export const getPost =async ()=>{

    const url = "https://jsonplaceholder.typicode.com/posts"
    try {
        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        console.log(error);
    }

}
 


export const getSinglePost =async (info)=>{

    const url = `https://jsonplaceholder.typicode.com/posts/${info}`
    try {
        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        console.log(error);
    }

}


export const getPostComment =async (info)=>{

    const url = `https://jsonplaceholder.typicode.com/posts/${info}/comments`
    try {
        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        console.log(error);
    }

}