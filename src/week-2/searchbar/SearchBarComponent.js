import { useState } from "react"

export default SearchBarComponent = (props) => {
    const fullData = props.fullData;
    const [searchKey, setSearchKey] = useState('');
    let count = 0;
    // let timeOut = false;
    // let searchValue = '';
    // setResult = () => {
    //     timeOut = false;
    //     const filteredData = fullData.filter((member) => {
    //         return member.role.includes(searchValue);
    //     })
    //     props.setFunction(filteredData);
    // };

    // deBounce = (e) => {
    //     searchValue = e.nativeEvent.data || '';
    //     if(timeOut) {
    //     } else {
    //         timeOut = true;
    //         setTimeout(setResult, 10000);
    //     }
    // }

    serachFunction = (e) => {
        console.log(e);
        setSearchKey(count);
        const val = e.value || '';
        console.log(val);
        const filteredData = fullData.filter((memeber) => {
            return memeber.role.includes(val);
        });
        props.setFunction(filteredData);
    }
    return (
        <div>
            <input id="search" placeholder="search" value={searchKey} onChange={serachFunction}>
            </input>
        </div>
    )
}