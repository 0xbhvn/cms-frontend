import React from 'react';
import PropTypes from 'prop-types';

// MaterialUI
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    stackLink: {
      color: theme.palette.primary.main,
    },
  }));

export default function Copyright(props) {
    const { title } = props;
    const classes = useStyles();

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="https://www.twitter.com/thisisbhaven">
          { title }
        </Link>{' '}
        {new Date().getFullYear()}
        {', Powered by '}
        <Link className={classes.stackLink} href="https://www.djangoproject.com">Django</Link>
        {' \u2022 '}
        <Link className={classes.stackLink} href="https://reactjs.org">React</Link>
      </Typography>
    );
}

Copyright.propTypes = {
    title: PropTypes.string,
};