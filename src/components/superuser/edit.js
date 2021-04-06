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

export default function EditUser() {
	const history = useHistory();
	const { username } = useParams();

	const initialFormData = Object.freeze({
		email: '',
		username: '',
	});

	const initialStatusData = Object.freeze({
		is_staff: false,
		is_superuser: false,
	})

	const [formData, updateFormData] = useState(initialFormData);
	const [statusData, updateStatusData] = useState(initialStatusData);

	useEffect(() => {
		axiosInstance.get('accounts/' + username + '/').then((res) => {
			updateFormData({
				...formData,
				['email']: res.data.email,
				['username']: res.data.username,
			});
		});
	}, [updateFormData]);

	
	const handleCheck = (e) => {
		if ([e.target.name] == 'is_staff') {
			updateStatusData({
				is_staff: e.target.checked,
				is_superuser: false,
			});
		}
		else if ([e.target.name] == 'is_superuser') {
			updateStatusData({
				is_staff: true,
				is_superuser: e.target.checked,
			});
		}
	}

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance.put(`accounts/` + username + '/', {
			email: formData.email,
			username: formData.username,
			is_staff: statusData.is_staff,
			is_superuser: statusData.is_superuser,
		});
		
		history.push({
			pathname: '/superuser/',
		});
		window.location.reload();
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit User
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								value={formData.username}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<label>Is Staff?: 
								<input
									name="is_staff"
									type="checkbox"
									checked={statusData.is_staff}
									onChange={handleCheck} 
								/>
							</label>
						</Grid>
						<Grid item xs={12}>
						<label>Is Superuser?: 
							<input
								name="is_superuser"
								type="checkbox"
								checked={statusData.is_superuser}
								onChange={handleCheck} 
							/>
						</label>
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
						Update User
					</Button>
				</form>
			</div>
		</Container>
	);
}