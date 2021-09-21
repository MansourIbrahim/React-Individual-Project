import React, { useState, useContext } from "react";
import { HomePageEventsContext } from "../HomePageEventsContext";

export const SearchForm = () => {
  const [eventKeyword, setEventKeyword] = useState("");
  const [eventClassification, setClassification] = useState("");
  const [noParameters, setNoParameters] = useState(true);
  const [searchedEvents, setSearchedEvents] = useState([]);
  const [homePageEvents, setHomePageEvents] = useContext(HomePageEventsContext);

  const allParametersURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENTSSEARCH_API_KEY}&keyword=${eventKeyword}&locale=*&size=5&classificationName=${eventClassification}`;
  const keywordURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENTSSEARCH_API_KEY}&keyword=${eventKeyword}&locale=*&size=5`;
  const classificationNameURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENTSSEARCH_API_KEY}&locale=*&size=5&classificationName=${eventClassification}`;

  function onSubmit(e, eventKeyword, eventClassification) {
    e.preventDefault();
    if (eventClassification.length === 0 && eventKeyword.length === 0) {
      setNoParameters(true);
    } else if (eventKeyword.length === 0) {
      setNoParameters(false);
      fetch(`${classificationNameURL}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchedEvents(data);
          data._embedded && setHomePageEvents(data._embedded.events);
        })
        .catch((error) => console.log(error));
    } else if (eventClassification.length === 0) {
      setNoParameters(false);
      fetch(`${keywordURL}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchedEvents(data);
          data._embedded && setHomePageEvents(data._embedded.events);
        })
        .catch((error) => console.log(error));
    } else {
      setNoParameters(false);
      fetch(`${allParametersURL}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchedEvents(data);
          data._embedded && setHomePageEvents(data._embedded.events);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => onSubmit(e, eventKeyword, eventClassification)}>
        <div className="form-text-input">
          <input
            type="text"
            value={eventKeyword}
            onChange={(event) => setEventKeyword(event.target.value)}
            placeholder="Type Event Keyword"
          />

          <input
            type="text"
            value={eventClassification}
            onChange={(event) => setClassification(event.target.value)}
            placeholder="Type Event Classification"
          />
        </div>

        {noParameters === true ? (
          <p>Please, Type related keyword or Classification</p>
        ) : (
          searchedEvents.page?.totalElements === 0 &&
          !searchedEvents._embedded && <p>Can not find related events</p>
        )}

        <div className="form-submit-input">
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};
