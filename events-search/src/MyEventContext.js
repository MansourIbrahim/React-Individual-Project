import React, { useState, useEffect, createContext } from 'react'

export const EventContext = createContext();

export const EventProvider = (props) => {

    const [myEventsIds, setMyEventsIds] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("ids");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });

    useEffect(() => {
        localStorage.setItem("ids", JSON.stringify(myEventsIds));
      }, [myEventsIds]);

    return (
        <EventContext.Provider value={[myEventsIds, setMyEventsIds]}>
            {props.children}
        </EventContext.Provider>
    )
}
