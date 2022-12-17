import * as styles from './SelectStyles.module.css';

const SelectComponent = (props) => {
    const { options } = props;
    return (
        <>
            <select name="select" className={styles.select}>
                {options.map((val) => <option value={val}>{val}</option>)}
            </select>
        </>
    )
}

export default SelectComponent;