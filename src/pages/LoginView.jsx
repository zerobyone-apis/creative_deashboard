import React from 'react'
import { Login } from '../components/login/Login'

export const LoginView = () => {
    return (
        <>
            <Login/>
            {/* Contenedor de modals*/}

            {/* Nuestro login modal -> Inicio de session*/}
            {/* reseteo de contraseña -> por email que exista en db, y codigo para Auth en dos pasos */}

            {/* Validacion de tipo de usuario -> Solo admin, supervisor o user */}

            {/* Nuestro register modal -> Crear un usuario*/}
            {/* Routeo hacia el dashboard*/}
        </>
    )
}
