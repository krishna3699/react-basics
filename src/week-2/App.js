import React from "react";
import REACTDOM from "react-dom/client";
import HeaderComponent from "./Header/HeaderComponent.js"
import CardsListComponent from "./CardsList/CardsListComponent.js";

const title = 'Debuggrer\'s'
console.log(title);


const AppLayoutComponent = () => {
    return (
        <>
        <HeaderComponent title={title} />
        <CardsListComponent data={data}/>
        </>
    )
}

const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<AppLayoutComponent />);