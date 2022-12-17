import CardComponent from "../Card/CardComponent.js"
import * as styles from './CardsListStyles.module.css'
import { useState, useEffect } from "react"
import { usernames } from '../constants/data.js'
import NavBarComponent from "../Navbar/NavBarComponent.js"

let fullData = [];
const CardsListComponent = (props) => {
    useEffect(() => {
        fetchData(usernames).then((res) => {
            fullData = res;
            setCardsData(res);
        });
    }, [])

    async function fetchData(usernames) {
        const reqUrls = []
        usernames.forEach((name) => {
            reqUrls.push(fetch(`https://api.github.com/users/${name}`));
        });
        const response = await Promise.all(reqUrls);
        const userData = await Promise.all(response.map((res) => res.json()));
        return userData;
    }
    const [cardsData, setCardsData] = useState('');
    return (
        <>
            <NavBarComponent fullData={fullData} setCardsData={setCardsData}/>
            <div className={styles.cardsContainer}>
                {cardsData !== '' ? cardsData.map((person) => {
                    return <CardComponent data={person} key={person.id}/>
                }): <h1>not rendered</h1>}
            </div>
        </>
    )
}

export default CardsListComponent;