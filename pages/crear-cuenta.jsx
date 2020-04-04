import React, { useState } from 'react'
import Router from 'next/router'
import { css } from '@emotion/core'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'

import firebase from '../firebase'


//Validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: '',
}
const CrearCuenta = () => {

    const [error, setError] = useState(false)

    const { valores, errores, handleChange, handleSubmit, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)

    const { nombre, email, password } = valores

    async function crearCuenta() {
        try {
            await firebase.registrar(nombre, email, password)
            Router.push('/')
        } catch (error) {
            // console.error('Hubo un error al crear el usuario', error.message)
            setError(error.message)
        }


    }

    return (
        <div>

            <Layout>
                <>
                    <h1
                        css={css`text-align: center; margin-top: 5rem`}>Crear Cuenta</h1>
                    <Formulario onSubmit={handleSubmit} noValidate>
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu nombre" name="nombre"
                                value={nombre} onChange={handleChange} onBlur={handleBlur}
                            />

                        </Campo>

                        {errores.nombre && <Error>{errores.nombre}</Error>}

                        <Campo>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Tu Email" name="email"
                                value={email} onChange={handleChange} onBlur={handleBlur} />

                        </Campo>
                        {errores.email && <Error>{errores.email}</Error>}

                        <Campo>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" placeholder="Tu contraseña" name="password"
                                value={password} onChange={handleChange} onBlur={handleBlur}
                            />

                        </Campo>
                        {errores.password && <Error>{errores.password}</Error>}

                        <InputSubmit type="submit" value="Crear Cuenta" />

                        {error && <Error>{error}</Error>}
                    </Formulario>
                </>
            </Layout>

        </div>
    )
}

export default CrearCuenta
