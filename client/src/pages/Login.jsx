import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Register from './Register';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:9000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            });
            const result = await response.json();
            if (result.success) {
                localStorage.setItem('userEmail', data.email);
                navigate('/main');
            } else {
                setError("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
            }
        } catch (error) {
            setError("Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.");
        }
    };

    return (
        <>
            <p className='title'>Iniciar sesion</p>
            <form className='App' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder='Correo Electronico' {...register("email", {required: true})}/>
                {errors.email && <span style={{color: 'red'}}>Email is required</span>}
                <input type="password" placeholder='Contraseña' {...register("password", {required: true})}/>
                {errors.password && <span style={{color: 'red'}}>Password is required</span>}
                <input type={"submit"} style={{backgroundColor: "#a1eafb"}} />
            </form>

            <p className='register-link'>
                No tienes cuenta? <Link to='/register'>Registrate</Link>
            </p>
        </>

    )
}

export default Login;
