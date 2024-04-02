import { useState } from "react"
import styles from "./style.module.css"



export default function Card(props) {
    //função modificadora
    const [comprarAgora, setcomprarAgora ] = useState('Comprar')
    

    function handleClick(ev) {
        alert("Clicou no botão");
       setcomprarAgora('Comprado')
    }


    return (
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam molestiae magnam ipsam fugit iure, reprehenderit consequatur repudiandae ullam aliquam perspiciatis, odit nisi atque doloribus ipsum vitae sequi, culpa ad?</p>
                <button onClick={handleClick}
                >{comprarAgora}</button>
            </div>
        </div>
    )
}