import React from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';

//MaterialUI
import { Container, Button, Box } from '@material-ui/core';

export default function Create() {
	const history = useHistory();
	const { username } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete('accounts/' + username + '/')
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history.push({
						pathname: '/superuser/',
					});

					window.location.reload();
			});
	};

	return (
		<Container component="main" maxWidth="sm">
			<Box
				display="flex"
				justifyContent="center"
				m={1}
				p={1}
				bgcolor="background.paper"
			>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					onClick={handleSubmit}
				>
					Confirm Delete
				</Button>
			</Box>
		</Container>
	);
}