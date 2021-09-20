import React, { useState, createContext } from 'react'

export const HomePageEventsContext = createContext();

export const HomePageEventsProvider = (props) => {


    const [homePageEvents, setHomePageEvents] = useState([]);


    return (
        <HomePageEventsContext.Provider value={[homePageEvents, setHomePageEvents]}>
            {props.children}
        </HomePageEventsContext.Provider>
    )
}
