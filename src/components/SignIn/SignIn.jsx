import { useEffect, useState } from "react";

const SignIn = ({ handleLogin, setIsMember, error, success }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const handleChange = (target) => {
        if (target.id === 'username') {
            setUserName(target.value);
        }
        if (target.id === 'password') {
            setPassword(target.value);
        }
    }
    const signInClick = (username, password) => {
        handleLogin(username, password);
        setUserName('')
        setPassword('')
    }

    useEffect(() => {
    }, [error, success]);

    return (
        <div className="container col-11 col-md-8 col-lg-6 border bg-light my-5">
            <form action="" className="p-3 col-auto">
                <h3>Sign In</h3>
                <div className="row justify-content-center py-1">
                    <label htmlFor="username" className="col text-end">Username: </label>
                    <input id="username" className="col-9" type="text" name="username" placeholder="Username..." value={username} onChange={(e) => handleChange(e.target)}></input>
                </div>
                <div className="row justify-content-center py-1">
                    <label htmlFor="password" className="col text-end">Password: </label>
                    <input id="password" className="col-9" type="text" name="password" placeholder="Password..." value={password} onChange={(e) => handleChange(e.target)}></input>
                </div>
                <div className="row justify-content-center my-3">
                    <button type="button" className="btn btn-dark w-auto" onClick={() => signInClick(username, password)}>Sign In</button>
                </div>
                {error &&
                    <div className="text-danger text-center">{error}</div>
                }
                {success &&
                    <div className="text-success text-center">{success}</div>
                }
            </form>
            <hr></hr>
            <div className="row justify-content-center my-3">
                <span className="row justify-content-center my-2">Not a member?</span>
                <button type="button" className="btn btn-dark row w-auto" onClick={() => setIsMember(false)}>Sign Up</button>
            </div>
        </div>
    )

}

export default SignIn;