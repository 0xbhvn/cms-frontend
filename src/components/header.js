import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.css';

// MaterialUI
import { Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';

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

  let history = useHistory();
	const [data, setData] = useState({ search: '' });

  const { sections, title } = props;

  const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});

		window.location.reload();
	};

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
        <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
				/>
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