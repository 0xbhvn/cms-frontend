import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';

//MaterialUI
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	body: {
		whiteSpace: 'pre-line',
		paddingTop: '60px',
	},
	image: {
		flex:1,
		resizeMode: 'contain',
	},
}));

export default function Single() {
	const { slug } = useParams();
	const classes = useStyles();

	const [data, setData] = useState({ articles: [] });

	useEffect(() => {
		axiosInstance.get('articles/' + slug + '/').then((res) => {
			setData({ articles: res.data });
		});
	}, [setData]);

	return (
		<Container component="main" maxWidth="lg">
			<CssBaseline />
			<div className={classes.paper}></div>
			<div className={classes.heroContent}>
				<Container maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="left"
						color="textPrimary"
						gutterBottom
					>
						{data.articles.title}
					</Typography>
					<img src={'http://localhost:8000' + data.articles.image} alt={data.articles.title} className={classes.image} />
					<Typography variant="subtitle1" color="inherit">
						Posted by {data.articles.author}
					</Typography>
					<Typography
						variant="h5"
						align="justify"
						color="textSecondary"
						className={classes.body}
						paragraph
					>
						{data.articles.body}
					</Typography>
				</Container>
			</div>
		</Container>
	);
}