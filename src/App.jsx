import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";

const userList = [{ username: 'user', password: 'password' }, { username: 'subtlemocha', password: '12345' }]

const App = () => {

	const [users, setUsers] = useState(userList);
	const [isMember, setIsMember] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
	}, [isLoggedIn])

	useEffect(() => {
	}, [isMember])

	const validateUser = (username, password) => {
		const user = userList.find(user => user.username === username && user.password === password);
		return user ? true : false;
	};

	const validatePassword = (password, confirmPassword) => {
		return password === confirmPassword ? true : false;
	};

	const handleLogin = (username, password) => {
		setError('')
		setSuccess('')
		const isValid = validateUser(username, password)
		if (isValid) {
			setIsLoggedIn(true);
			setSuccess('Login Successful!')
		} else {
			setIsLoggedIn(false);
			setError('Nice try, hacker!')
		}
	};

	const handleSignUp = (username, password, confirmPassword) => {
		setError('')
		setSuccess('')
		const isExistingUser = validateUser(username, password);
		if (isExistingUser) {
			return setError('User already exists')
		} else {
			validatePassword(password, confirmPassword) ? setSuccess('Welcome, newbie.') : setError('Passwords do not match.');
		}
	};

	return (
		<>
			{isMember &&
				<SignIn handleLogin={handleLogin} setIsMember={setIsMember} error={error} success={success} />
			}
			{!isMember &&
				<SignUp handleSignUp={handleSignUp} setIsMember={setIsMember} error={error} success={success} />
			}
		</>
	);
};

export default App;
