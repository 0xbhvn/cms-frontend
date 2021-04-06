import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

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
	const initialFormData = Object.freeze({
		title: '',
		body: '',
		category: '',
	});

	const [articleData, updateFormData] = useState(initialFormData);
	const [articleImage, setArticleImage] = useState(null);

	const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setArticleImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		} else {
			updateFormData({
				...articleData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		let formData = new FormData();

		formData.append('title', articleData.title);
		formData.append('body', articleData.body);
		formData.append('category', articleData.category);
		formData.append('image', articleImage.image[0]);

		axiosInstance.post(`articles/create/`, formData);
		history.push({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Create New Article
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
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="body"
								label="Article Excerpt"
								name="body"
								autoComplete="body"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="category"
								label="Category"
								name="category"
								autoComplete="cateogry"
								onChange={handleChange}
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="image"
							onChange={handleChange}
							name="image"
							type="file"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Article
					</Button>
				</form>
			</div>
		</Container>
	);
}