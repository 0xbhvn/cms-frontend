import React from 'react';

// MaterialUI
import { Container, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	userTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	userText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Users = (props) => {
	const { users } = props;
	const classes = useStyles();
	if (!users || users.length === 0) return <p>Could not find any users.</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Email</TableCell>
									<TableCell align="left">Username</TableCell>
									<TableCell align="left">Staff</TableCell>
                                    <TableCell align="left">Superadmin</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users.map((user) => {
									return (
										<TableRow>
											<TableCell component="th" scope="row">
												{user.email}
											</TableCell>
											<TableCell align="left">
                                            <Link
													color="textPrimary"
													href={'/user/' + user.username}
													className={classes.link}
												>			
                                                    {user.username}								
												</Link>
                                            </TableCell>

											<TableCell>
												<input
													name="is_staff"
													type="checkbox"
													checked={user.is_staff}
													disabled
												/>
											</TableCell>
                                            <TableCell>
												<input
													name="is_superuser"
													type="checkbox"
													checked={user.is_superuser}
													disabled
												/>
                                            </TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/superuser/edit/' + user.username}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/superuser/delete/' + user.username}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}		
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default Users;