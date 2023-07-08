import axios from "axios"
import { useEffect, useState } from "react"

export const UsuariosPage = () => {
    
    const [ usuarios, setUsuarios ] = useState([])

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const {data} = await axios.get('https://randomuser.me/api/?results=10');
                setUsuarios(data.results)
                console.log('petición')
            } catch (error) {
                console.error('Error al obtener los usuarios: ', error)
            }
        }

        fetchUsuarios();
    }, [])


    return (
        <>
            <h2>Usuarios</h2>

            <ul>
                {usuarios.map((usuario, index)=> (
                    <li key={index}>{usuario.name.first}</li>
                ))}
            </ul>
        </>
    )
}