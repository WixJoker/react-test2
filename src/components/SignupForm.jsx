import { useState } from 'react';
export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleEmailChange = event => {
    //     console.log(event.target.value)
    //     setEmail(event.target.value)
    // }

    // const handlePasswordChange = event => {
    //     console.log(event.target.value)
    //     setPassword(event.target.value)
    // }

    const handleNameChange = event => {
        console.log(event.target.name)
        switch (event.target.name) {
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
            return
        }
    }



    return (
        <form>
            <label>
                <h3>Email</h3>
                <input type='email'
                    name='email'
                    onChange={handleNameChange}
                value={email}></input>
            </label>
            <label>
                <h3>Password</h3>
                <input type='password'
                    name='password'
                    onChange={handleNameChange}
                value={password}></input>
            </label>

            <button type='submit'>Register</button>
        </form>
    )
}