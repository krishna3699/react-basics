import CardComponent from "../Card/CardComponent.js"


data = [
    {
        img: "https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/2d54832dbf7c5cb77f0c44314840b1e9.gif",
        role: 'dcsd',
        organisation: 'saCDKSNC',
        experience: '1',
    },
    {
        img: "https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/2d54832dbf7c5cb77f0c44314840b1e9.gif",
        role: 'dcsd',
        organisation: 'saCDKSNC',
        experience: '1',
    },
    {
        img: "https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/2d54832dbf7c5cb77f0c44314840b1e9.gif",
        role: 'dcsd',
        organisation: 'saCDKSNC',
        experience: '1',
    },
];

const CardsListComponent = (props) => {
    const { data } = props
    return (
        <div className="cards-list-container">
            {data.map((person) => {
                return <CardComponent data={person}/>
            })}
        </div>
    )
}

export default CardsListComponent;