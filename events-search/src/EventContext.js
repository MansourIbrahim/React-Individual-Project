import React, { useState, createContext } from 'react'

export const EventContext = createContext();

export const EventProvider = (props) => {


    const [myEventsIds, setMyEventsIds] = useState(["0", "1","2", "3"]);


    return (
        <EventContext.Provider value={[myEventsIds, setMyEventsIds]}>
            {props.children}
        </EventContext.Provider>
    )
}
