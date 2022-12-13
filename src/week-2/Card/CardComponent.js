import * as styles from './CardStyles.module.css'

const CardComponent = (props) => {
    const { login, id, url, avatar_url, name, location, public_repos } = props.data;
    return (
        <div className={styles.card}>
            <img className="styles.avatar" src={avatar_url} />
            <div className="styles.details">{name}</div>
            <div className="styles.details">{location}</div>
            <div className="styles.details">{public_repos}</div>
        </div>
    )
}

export default CardComponent;