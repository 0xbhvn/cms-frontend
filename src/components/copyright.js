import React from 'react';
import PropTypes from 'prop-types';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
        <Link color="inherit" href="/">
          { title }
        </Link>{' '}
        {new Date().getFullYear()}
        {', Powered by '}
        <Link className={classes.stackLink} href="https://www.djangoproject.com">Django</Link>
        {' \u2022 '}
        <Link className={classes.stackLink} href="https://reactjs.org">React</Link>
        {' \u2022 '}
        <Link className={classes.stackLink} href="https://www.netlify.com">Hosted on Netlify</Link>
      </Typography>
    );
}

Copyright.propTypes = {
    title: PropTypes.string,
};