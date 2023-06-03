import styles from '../form/form.module.css'
import { useState } from 'react'
import Card from '../card/card'

function Form() {
    const [name, setName] = useState('')
    const [raza, setRaza] = useState('')
    const [error, setError] = useState('')
    const [errorPerro, setErrorPerro] = useState('')
    const [nameValor, setNameValor] = useState('')
    const [razaValor, setRazaValor] = useState('')

    function handlerSubmit(e) {
        e.preventDefault()
        if (name.length <= 3) {
            setError('La longitud del nombre debe ser mayor a 3 caracteres')
        } else {
            setError()
            setNameValor(name)
        }
        
        if (raza.length < 6) {
            setErrorPerro('La longitud de la raza debe ser mayor a 6 caracteres')
        } else {
            setErrorPerro()
            setRazaValor(raza)
        }
    }

    function handlerChangeName(e) {
        setName(e.target.value)
        
    }

    function handlerChangeRaza(e) {
        setRaza(e.target.value)
        
    }

    
    return (
        <>
            <form className={styles.father} onSubmit={handlerSubmit}>

                <label htmlFor="nombre">Ingrese su nombre</label>

                <input type="text" id="nombre" placeholder='Nombre' value={name} onChange={handlerChangeName}/>

                {error ? <span>{error}</span> : undefined}

                <label htmlFor="razaPerro">Raza de perro preferida</label>

                <input type="text" id="razaPerro" placeholder='Raza de perro' value={raza} onChange={handlerChangeRaza}/>

                {errorPerro ? <span>{errorPerro}</span> : undefined}


                <button type="submit">Enviar</button>
            </form>

            {}
        </>
    )
}

export default Form