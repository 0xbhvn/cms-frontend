import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axiosInstance from '../axios';

// MaterialUI
import { Button, Menu, MenuItem, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function HeaderMenu(props) {

    const { logged_in } = props;

    const initialUserData = Object.freeze({
		email: '',
		username: '',
		is_staff: false,
        is_superuser: false,
	});

	const [userData, updateUserData] = useState(initialUserData);

	useEffect(() => {
        axiosInstance.get('accounts/current_user/').then((res) => {
            updateUserData({
                ...userData,
                ['email']: res.data.email,
                ['username']: res.data.username,
                ['is_staff']: res.data.is_staff,
                ['is_superuser']: res.data.is_superuser,
            });
        });
	}, [updateUserData]);
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let dash_button;
    if (userData.is_superuser) {    
        dash_button = 
        <div>
            <MenuItem onClick={handleClose}>
                <Link component={NavLink} to='/admin' variant="button" color="textPrimary">
                    Manage Articles
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link component={NavLink} to='/superuser' variant="button" color="textPrimary">
                    Manage Users
                </Link>
            </MenuItem>
        </div>
    } else if (userData.is_staff) {
        dash_button = 
        <div>
            <MenuItem onClick={handleClose}>
                <Link component={NavLink} to='/admin' variant="button" color="textPrimary">
                    Manage Articles
                </Link>
            </MenuItem>
        </div>
    }


    let auth_button;
    if (!logged_in) {    
        auth_button = 
        <div>
            <MenuItem onClick={handleClose}>
                <Link component={NavLink} to='/signup' variant="button" color="textPrimary">
                    Sign Up
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link component={NavLink} to='/login' variant="button" color="textPrimary">
                    Login
                </Link>
            </MenuItem>
        </div>
    } else {
        auth_button = 
        <div>
            <MenuItem onClick={handleClose}>
                <Link component={NavLink} to='/logout' variant="button" color="textPrimary">
                    Logout
                </Link>
            </MenuItem>
        </div>
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon></MenuIcon>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >   
                {dash_button}
                {auth_button}
            </Menu>
        </div>
    );
}

HeaderMenu.propTypes = {
    logged_in: PropTypes.bool
  };