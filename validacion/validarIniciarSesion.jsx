export default function validarIniciarSesion(valores) {

    let errores = {}

    //Validar el email
    if (!valores.email) {
        errores.email = "El email es obligatorio"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = "Email no válido"
    }

    //Validar password
    if (!valores.password) {
        errores.password = "La contraseña es obligatoria"
    } else if (valores.password.length < 6) {
        errores.password = "La contraseña debe tener al menos 6 caracteres"
    }

    return errores;
}