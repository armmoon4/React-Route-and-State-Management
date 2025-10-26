import React, { useState } from 'react';

const ControlledField = () => {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('')

    const handlePasswordOnChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)


        if(password.length < 6){
            setError('Password must be 6 Charcter or Longer')
        }
        else{
            setError('')
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

    }

// 46-4 custom hook
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Email' required onChange={handleEmailChange} defaultValue={email} />
                <br />
                <input type="pasword" name='password' placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} required />
                <br />
                <input type="submit" value='Submit' />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;