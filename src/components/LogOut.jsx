import React from "react"

import {useContext} from 'react';
import {
    useHistory,
    
  } from "react-router-dom";

import { LoginContext } from './LoginContext'

import Button from '@mui/material/Button';

export default function LogOut() {
    const { setUser,user } = useContext(LoginContext)
    const history = useHistory() 

    const handleSubmit = () => {
            console.log(user);
            setUser(null)

            console.log(user);

            history.push("/")
     
    };
    
    return (
    <Button onClick={handleSubmit} color="inherit">LogOut</Button>
    );
}