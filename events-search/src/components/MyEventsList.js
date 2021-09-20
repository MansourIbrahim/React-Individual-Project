import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from '../MyEventContext';
import { EventCard } from './EventCard';

export const MyEventsList = () => {

    const [myEventsIds, setMyEventsIds] = useContext(EventContext);
    const [myEvents, setMyEvents] = useState([]);
    const isMyEvent =true;


    console.log(myEvents);
    console.log(myEventsIds);

    const deleteEvent = (e) => {
        e.preventDefault();
        setMyEventsIds((myEventsIds) =>
        myEventsIds.filter((myEventId) => myEventId !== e.target.id)
      );
        console.log("deleteEvent")
    }



    useEffect(()=>{



            const promises = myEventsIds.map((myEventId) => 
                fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=RyPPLe0Rw96TWyPQdWFlQ3LFIkgS1mhZ&id=${myEventId}&locale=*`)
                .then((response) => response.json())
                .then((data) =>  data._embedded.events)
            )

            Promise.all(promises).then((res) => {setMyEvents(res.map((r) => r[0]))})
        
    }, [myEventsIds])

    
    console.log(myEvents);

    return (
        <div className="events-container">
             {myEvents.length === 0 ? <p>You didn't save any event</p> : 
              myEvents.map((event) =>{
                return (
                 <EventCard props={event} deleteEvent={deleteEvent} isMyEvent={isMyEvent} key={event.id}/>
            )})
            }
        </div>
    )
}
