import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";

const userList = [{ username: 'user', password: 'password' }, { username: 'subtlemocha', password: '12345' }]

const App = () => {

	const [users, setUsers] = useState(userList);
	const [isMember, setIsMember] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
	}, [isLoggedIn])

	useEffect(() => {
	}, [isMember])

	const validateUser = (username, password) => {
		const user = userList.find(user => user.username === username && user.password === password);
		return user ? true : false;
	};

	const handleLogin = (username, password) => {
		console.log('Username: ', username, 'Password: ', password)
		const isValid = validateUser(username, password)
		if (isValid) {
			setIsLoggedIn(true);
			console.log('Login Successful!')
		} else {
			setIsLoggedIn(false);
			console.log('Nice try, hacker!')
		}
	}
	// left off here, need to finish up this function
	const handleSignUp = (username, password, confirmPassword) => {
		console.log('Username: ', username, 'Password: ', password, 'Confirmed Password: ', confirmPassword)
		const isExistingUser = validateUser(username, password);
		if (isExistingUser) {
			console.log('User already exists')
		} else {
			console.log('Welcome, newbie.')
		}
	}

	return (
		<>
			{isMember &&
				<SignIn handleLogin={handleLogin} setIsMember={setIsMember} />
			}
			{!isMember &&
				<SignUp handleSignUp={handleSignUp} setIsMember={setIsMember} />
			}
		</>
	);
};

export default App;
