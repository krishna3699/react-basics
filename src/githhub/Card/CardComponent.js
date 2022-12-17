import * as styles from './CardStyles.module.css'

const CardComponent = (props) => {
    const { login, id, url, avatar_url, name, location, public_repos } = props.data;
    return (
        <div className={styles.card}>
            <div className={styles.avatar}>
                <img src={avatar_url} />
            </div>
            <div className={styles.details}>
                <div>{name}</div>
                <div>{location}</div>
                <div>{public_repos}</div>
            </div>
        </div>
    )
}

export default CardComponent;