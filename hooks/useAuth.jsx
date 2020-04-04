import React, { useEffect, useState } from 'react'
import firebase from '../firebase'

function useAuth() {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null)

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
            if (usuario) {
                setUsuarioAutenticado(usuario)
            } else {
                setUsuarioAutenticado(null)
            }
        })
        return () => unsuscribe()
    }, [])

    return usuarioAutenticado
}

export default useAuth