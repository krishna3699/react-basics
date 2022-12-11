import { useState } from "react"

export default SearchBarComponent = (props) => {
    console.log(props);
    const fullData = props.fullData;
    const [searchKey, setSearchKey] = useState('');
    let timeOut = false;
    let searchValue = '';

    /* reson for creating a seperate variable for search value instead of using the state variable is, 
    / setting the state varaibles is async and facing some issues with that 
    */

    deBounce = (e) => {
        searchValue = e.target.value || '';
        setSearchKey(searchValue);
        if(timeOut) {
        } else {
            timeOut = true;
            setTimeout(serachFunction, 1000);
        }
    }

    serachFunction = () => {
        const filteredData = fullData.filter((memeber) => {
            return memeber.name.includes(searchValue);
        });
        props.setFunction(filteredData);
        timeOut = false;
    }
    return (
        <div>
            <input id="search" placeholder="search" value={searchKey} onChange={deBounce}>
            </input>
        </div>
    )
}