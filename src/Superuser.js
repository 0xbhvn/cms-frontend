import React, { useEffect, useState } from 'react';
import './App.css';
import Users from './components/superuser/users';
import UsersLoadingComponent from './components/superuser/usersLoading';
import axiosInstance from './axios';

function Superuser() {
	const UsersLoading = UsersLoadingComponent(Users);
	const [appState, setAppState] = useState({
		loading: true,
		users: null,
	});

	useEffect(() => {
		axiosInstance.get('accounts/ ').then((res) => {
			const allUsers = res.data;
			setAppState({ loading: false, users: allUsers });
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>All Users</h1>
			<UsersLoading isLoading={appState.loading} users={appState.users} />
		</div>
	);
}

export default Superuser;