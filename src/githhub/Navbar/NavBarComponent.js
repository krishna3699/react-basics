import SearchBarComponent from "../searchbar/SearchBarComponent";
import SelectComponent from "../select/SelectComponent";
import * as styles from './NavBarStyles.module.css'

const NavBarComponent = (props) => {
    const fullData = props.fullData;
    const setCardsData = props.setCardsData;
    
    return (
        <div className={styles.navbar}>
            <SearchBarComponent fullData={fullData} setFunction={setCardsData} />
            <SelectComponent options={[1,2,3,4]}/>
        </div>
    )
}

export default NavBarComponent;