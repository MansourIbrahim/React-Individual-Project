import React, {useState, useEffect, useContext} from 'react'
import { EventCard } from './EventCard';
import { EventContext } from '../EventContext';

export const HomePage = () => {

    
    const URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=3&apikey=p6lQXkkPswZELjgtvGGtf39Sw0tNuZP5`;
    const [homePageEvents, setHomePageEvents] = useState([]);
    const [myEventsIds, setMyEventsIds] = useContext(EventContext);


    useEffect(()=>{
        fetch(`${URL}`)
        .then((response) => response.json())
        .then((data) => setHomePageEvents(data._embedded.events));
    }, [])
    console.log(homePageEvents)

    const saveEvent = (e) => {
        e.preventDefault();
        if(myEventsIds.indexOf(e.target.id) === -1){
        setMyEventsIds([...myEventsIds, e.target.id])}
        console.log("myEventsIds")
    }

    console.log(myEventsIds)
    return (
        <div>
            {homePageEvents.length ===0 ? <p>Loading..</p> : 
            homePageEvents.map((event) =>{
                return <EventCard props={event} saveEvent={saveEvent} key={event.id}/>
            })
            }
        </div>
    )
}
