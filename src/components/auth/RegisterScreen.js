import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import {useDispatch, useSelector} from 'react-redux'
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export default function RegisterScreen() {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    console.log(msgError);

    const [formValues, handleInputChange] = useForm({
        name: 'manuel',
        email: 'manuel@gmail.com',
        password2: '123456',
        password: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () =>{

        if (name.trim().length === 0) {
            dispatch(setError('name is requerid'))
            return false;
        }else if (!validator.isEmail(email)){
            dispatch(setError('email is not valid'))
            return false
        }else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false
        }
        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form 
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth_input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />

                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth_input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    className="auth_input"
                    value={password}
                />

                <input 
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    onChange={handleInputChange}
                    className="auth_input"
                    value={password2}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>            

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
