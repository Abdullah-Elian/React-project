import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useContext } from 'react';

import { LoginContext } from './LoginContext'
import LogOut from './LogOut';

import {
    useHistory,
} from "react-router-dom";

export default function Header() {
    const { user } = useContext(LoginContext)

    const history = useHistory()
    
    const changeUrl = (url) => {
        history.push(url)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {user ? <LogOut /> : <Button onClick={() =>history.push('/')} color="inherit">Login</Button>}
                    {user && <Button onClick={() => changeUrl("/post")} color="inherit">Post</Button>}
                    {user && <Avatar>{user.email.charAt(0)}</Avatar>}               
                    </Toolbar>
            </AppBar>
        </Box>
    );
}