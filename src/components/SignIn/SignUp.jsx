import { useEffect, useState } from "react";

const SignUp = ({ handleSignUp, setIsMember, error, success }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleChange = (target) => {
        if (target.id === 'username') {
            setUsername(target.value);
        }
        if (target.id === 'email') {
            setEmail(target.value);
        }
        if (target.id === 'password') {
            setPassword(target.value);
        }
        if (target.id === 'confirmPassword') {
            setConfirmPassword(target.value);
        }
    }

    const signUpClick = (username, password, confirmPassword) => {
        handleSignUp(username, password, confirmPassword);
    }

    useEffect(() => {
    }, [error, success]);

    return (
        <div className="container col-11 col-md-8 col-lg-6 border bg-light my-5">
            <form action="" className="p-3 col-auto">
                <h3>Sign Up</h3>
                <div className="row justify-content-center py-1">
                    <label htmlFor="username" className="col text-end">Username: </label>
                    <input id="username" className="col-9" type="text" name="username" placeholder="Username..." value={username} onChange={(e) => handleChange(e.target)}></input>
                </div>
                <div className="row justify-content-center py-1">
                    <label htmlFor="email" className="col text-end">Email: </label>
                    <input id="email" className="col-9" type="text" name="email" placeholder="Email..." value={email} onChange={(e) => handleChange(e.target)}></input>
                </div>
                <div className="row justify-content-center py-1">
                    <label htmlFor="password" className="col text-end">Password: </label>
                    <input id="password" className="col-9" type="password" name="password" placeholder="Password..." value={password} onChange={(e) => handleChange(e.target)}></input>
                </div>
                <div className="row justify-content-center py-1">
                    <label htmlFor="confirmPassword" className="col-3 text-end text-wrap">Confirm Password: </label>
                    <input id="confirmPassword" className="col-9" type="password" name="confirmPassword" placeholder="Confirm Password..." value={confirmPassword} onChange={(e) => handleChange(e.target)}></input>
                </div>
                {error &&
                    <div className="text-danger text-center">{error}</div>
                }
                {success &&
                    <div className="text-success text-center">{success}</div>
                }
                <div className="row justify-content-center my-3">
                    <button type="button" className="btn btn-dark w-auto" onClick={() => signUpClick(username, password, confirmPassword)}>Sign Up</button>
                </div>
            </form>
            <hr></hr>
            <div className="row justify-content-center my-3">
                <span className="row justify-content-center my-2">Not a member?</span>
                <button type="button" className="btn btn-dark row w-auto" onClick={() => setIsMember(true)}>Sign In</button>
            </div>
        </div>
    )

}

export default SignUp;