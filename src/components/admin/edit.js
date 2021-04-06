import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';

//MaterialUI
import { Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	const history = useHistory();
	const { slug } = useParams();
	const initialFormData = Object.freeze({
		title: '',
		body: '',
		category: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('articles/' + slug + '/').then((res) => {
			updateFormData({
				...formData,
				['title']: res.data.title,
				['body']: res.data.body,
				['category']: res.data.category,
			});
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance.put(`articles/update/` + slug + '/', {
			title: formData.title,
			body: formData.body,
			category: formData.category,
		});

		history.push({
			pathname: '/admin/',
		});

		window.location.reload();
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Article
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Article Title"
								name="title"
								autoComplete="title"
								value={formData.title}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="body"
								label="Article Body"
								name="body"
								autoComplete="body"
								value={formData.body}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="category"
								label="category"
								name="category"
								autoComplete="cateogry"
                                value={formData.category}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Article
					</Button>
				</form>
			</div>
		</Container>
	);
}