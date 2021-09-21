import React, { useEffect, useContext } from "react";
import { SearchForm } from "./SearchForm";
import { EventCard } from "./EventCard";
import { EventContext } from "../MyEventContext";
import { HomePageEventsContext } from "../HomePageEventsContext";

export const HomePage = () => {
  const URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=3&apikey=${process.env.REACT_APP_EVENTSSEARCH_API_KEY}`;
  const [homePageEvents, setHomePageEvents] = useContext(HomePageEventsContext);
  const [myEventsIds, setMyEventsIds] = useContext(EventContext);

  useEffect(() => {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => setHomePageEvents(data._embedded.events))
      .catch((error) => console.log(error));
  }, []);

  const saveEvent = (e) => {
    e.preventDefault();
    if (myEventsIds.indexOf(e.target.id) === -1) {
      setMyEventsIds([...myEventsIds, e.target.id]);
    }
  };

  return (
    <div className="events-container">
      <SearchForm />
      {homePageEvents.length === 0 ? (
        <p>Loading..</p>
      ) : (
        homePageEvents.map((event) => {
          return (
            <EventCard props={event} saveEvent={saveEvent} key={event.id} />
          );
        })
      )}
    </div>
  );
};
