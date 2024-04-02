import posterImg from "../../assets/star-wars.jpg"
import styles from "./style.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Star Wars Poster" />
            <div>
                <h2>Pôster do filme Star Wars</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam molestiae magnam ipsam fugit iure, reprehenderit consequatur repudiandae ullam aliquam perspiciatis, odit nisi atque doloribus ipsum vitae sequi, culpa ad?</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}