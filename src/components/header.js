import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/header.css';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: '"Dela Gothic One", cursive',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link component={NavLink} to='/' color="inherit">{ title }</Link>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link component={NavLink} to='/signup' variant="button" color="textPrimary" className={classes.link}>
          Sign Up
        </Link>
        <Link component={NavLink} to='/login' variant="button" color="textPrimary" className={classes.link}>
          Login
        </Link>
        <Link component={NavLink} to='/logout' variant="button" color="textPrimary" className={classes.link}>
          Logout
        </Link>
      </Toolbar>
      {/* 
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        { sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            { section.title }
          </Link>
        ))}
      </Toolbar>
      */}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};