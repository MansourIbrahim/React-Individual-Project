import React, { useState, useEffect, useContext } from "react";
import { EventContext } from "../MyEventContext";
import { EventCard } from "./EventCard";

export const MyEventsList = () => {
  const [myEventsIds, setMyEventsIds] = useContext(EventContext);
  const [myEvents, setMyEvents] = useState([]);
  const isMyEvent = true;

  const deleteEvent = (e) => {
    e.preventDefault();
    setMyEventsIds((myEventsIds) =>
      myEventsIds.filter((myEventId) => myEventId !== e.target.id)
    );
  };

  useEffect(() => {
    const promises = myEventsIds.map((myEventId) =>
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENTSSEARCH_API_KEY}&id=${myEventId}&locale=*`
      )
        .then((response) => response.json())
        .then((data) => data._embedded.events)
    );

    Promise.all(promises)
      .then((res) => {
        setMyEvents(res.map((r) => r[0]));
      })
      .catch((error) => console.log(error));
  }, [myEventsIds]);

  return (
    <div className="events-container">
      {myEvents.length === 0 ? (
        <div className="no-Event">
          {" "}
          <p className>You didn't save any event</p>{" "}
        </div>
      ) : (
        myEvents.map((event) => {
          return (
            <EventCard
              props={event}
              deleteEvent={deleteEvent}
              isMyEvent={isMyEvent}
              key={event.id}
            />
          );
        })
      )}
    </div>
  );
};
