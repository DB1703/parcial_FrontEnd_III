import styles from '../card/card.module.css'

function Card(props) {

    console.log("render");
    return (
        <>
            <div className={styles.father}>
                <p>Nombre: {props.nombre}</p>
                <p>Raza: {props.raza}</p>
            </div>
        </>
    )
}

export default Card