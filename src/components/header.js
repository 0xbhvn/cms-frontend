import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.css';

import HeaderMenu from './menu';

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

  const { title } = props;

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
        <HeaderMenu></HeaderMenu>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};