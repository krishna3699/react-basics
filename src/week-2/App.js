import React, { useEffect } from "react";
import REACTDOM from "react-dom/client";
import HeaderComponent from "./Header/HeaderComponent.js"
import CardsListComponent from "./CardsList/CardsListComponent.js";

const title = 'Debuggrer\'s'

const BodyComponent = () => {


    return (
        <>
        <HeaderComponent title={title} />
        <CardsListComponent />
        </>
    )
}

const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<BodyComponent />);