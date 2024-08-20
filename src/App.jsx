import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

const userList = [{ username: 'user', password: 'password' }, { username: 'subtlemocha', password: '12345' }]

const App = () => {

	const [users, setUsers] = useState(userList);
	const [isMember, setIsMember] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
	}, [isLoggedIn])

	useEffect(() => {
		setError('');
		setSuccess('');
	}, [isMember])

	const validateUser = (username, password) => {
		const user = userList.find(user => user.username === username && user.password === password);
		return user ? true : false;
	};

	const validatePassword = (password, confirmPassword) => {
		return password !== '' && password === confirmPassword ? true : false;
	};

	const handleLogin = (username, password) => {
		setError('');
		setSuccess('');


		const isValid = validateUser(username, password)
		if (isValid) {
			setIsLoggedIn(true);
			setSuccess('Login Successful!');
		} else {
			setIsLoggedIn(false);
			if (!username && !password) {
				setError('Please enter a username and password.');
			}
			if (username && !password) {
				setError('Please enter a password.');
			}
			if (!username && password) {
				setError('Please enter a username.');
			} else {
				setError('Incorrect password or username');
			}
		}
	};

	const handleSignUp = (username, email, password, confirmPassword) => {
		setError('');
		setSuccess('');
		const isExistingUser = validateUser(username, password);
		if (isExistingUser) {
			return setError('User already exists');
		} else {
			if (password === '') setError('Please enter a password.');
			else validatePassword(password, confirmPassword) ? setSuccess('Welcome, newbie.') : setError('Passwords do not match.');
		}
	};

	return (
		<>
			{isMember && !isLoggedIn &&
				<SignIn handleLogin={handleLogin} setIsMember={setIsMember} error={error} success={success} />
			}
			{!isMember && !isLoggedIn &&
				<SignUp handleSignUp={handleSignUp} setIsMember={setIsMember} error={error} success={success} />
			}
			{isMember && isLoggedIn &&
				<Dashboard username='JohnJacobJingleheimerSchmidt' />
			}
		</>
	);
};

export default App;
