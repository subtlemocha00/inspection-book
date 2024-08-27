import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import { jobs } from './jobs'
import List from "./components/Search/List";
import { loadFromLocalStorage, saveToLocalStorage } from "./utils/storage";

const userList = [{ username: 'user', password: 'password' }, { username: 'subtlemocha', password: '12345' }, { username: '', password: '' }]

const App = () => {

	const [users, setUsers] = useState(userList);
	const [isMember, setIsMember] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [currentUser, setCurrentUser] = useState({});
	const [jobList, setJobList] = useState(() => loadFromLocalStorage('jobList', jobs));

	// set to true to work on
	const [showJobList, setShowJobList] = useState(true)

	useEffect(() => {
	}, [isLoggedIn]);

	useEffect(() => {
	}, [jobList]);

	useEffect(() => {
		setError('');
		setSuccess('');
	}, [isMember]);

	// saves list items to localStorage
	useEffect(() => {
		saveToLocalStorage('jobList', jobList)
	}, [jobList]);


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
		// successful login
		if (isValid) {
			setIsLoggedIn(true);
			setSuccess('Login Successful!');
			const user = userList.find(user => user.username === username && user.password === password);
			setCurrentUser(user);
			// failed login
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

	const removeFromList = (id) => {
		if (showJobList) setJobList(prevJobList => prevJobList.filter(item => item.id !== id));
		// if (currentListType === 'items') setItemList(prevChecklist => prevChecklist.filter(item => item.id !== id));
		// if (currentListType === 'appointments') setAppointmentList(prevChecklist => prevChecklist.filter(item => item.id !== id));
		// if (currentListType === 'cardList') setCardList(prevChecklist => prevChecklist.filter(item => item.id !== id));

	}

	return (
		<>
			{/* Uncomment for sign in/sign up form */}
			{/* {isMember && !isLoggedIn &&
				<SignIn handleLogin={handleLogin} setIsMember={setIsMember} error={error} success={success} />
			}
			{!isMember && !isLoggedIn &&
				<SignUp handleSignUp={handleSignUp} setIsMember={setIsMember} error={error} success={success} />
			} */}
			{isMember && isLoggedIn &&
				<Dashboard user={currentUser} />
			}
			{showJobList &&
				<List items={jobList} setItemList={setJobList} removeItem={removeFromList} />
			}
		</>
	);
};

export default App;
