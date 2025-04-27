import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase.init";
import { useState } from 'react';

const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const handleSingUp= e => {
        e.preventDefault();
        const email = e. target. email. value;
        const password = e. target. password. value
        console.log(email, password)

        setSuccess(false)
        setErrorMessage('')

        //password validate
        const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6}$/;
        if(passwordRegExp.test(password) === true){
            setErrorMessage('password must have one lowercase, one uppercase, one digit and 6 characters onr longer.')
            return 
        }

        // create user 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
            setSuccess(true)
        })
        .catch(error =>{
            console.log(error)
            setErrorMessage(error.message)
        }
        )
    }
  return (
    
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Pliase sign up now!</h1>
                    <form onSubmit={handleSingUp}>
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label mt-5">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">sign Up</button>
                    </form>
                    {
                        errorMessage && <p className='text-red-500'>{errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-500'>User has created successfully</p>
                    }
            </div>
        </div>
  );
};

export default SignUp;
