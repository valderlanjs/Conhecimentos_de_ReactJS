import styles from "./style.module.css"

export default function Profile(props) {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.avatar} src="" alt="" />
            <h2 className={styles.name}>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
        </div>
        <div className={styles.links}>
            <a href={props.githubUrl} target="_blank">Github</a>
            <a href={props.linkedinUrl} target="_blank">Linkedin</a>
            <a href={props.twiterUrl} target="_blank">Twiter</a>
        </div>
        </>
    )
}