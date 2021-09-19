import React, {useState} from 'react'
import { EventCard } from './EventCard'

export const SearchForm = () => {
    //https://app.ticketmaster.com/discovery/v2/events.json?size=3&apikey=p6lQXkkPswZELjgtvGGtf39Sw0tNuZP5
    const [eventKeyword, setEventKeyword] = useState('')
    const [eventClassification, setClassification] = useState('')
    const [noParameters , setNoParameters] = useState(true)
   // const [noEvents, setNoEvents] = useState(false)
    const [searchedEvents, setSearchedEvents] = useState([])
    const allParametersURL =`https://app.ticketmaster.com/discovery/v2/events?apikey=p6lQXkkPswZELjgtvGGtf39Sw0tNuZP5&keyword=${eventKeyword}&locale=*&size=5&classificationName=${eventClassification}`
    const keywordURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=p6lQXkkPswZELjgtvGGtf39Sw0tNuZP5&keyword=${eventKeyword}&locale=*&size=5`
    const classificationNameURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=p6lQXkkPswZELjgtvGGtf39Sw0tNuZP5&locale=*&size=5&classificationName=${eventClassification}`



    function onSubmit(e, eventKeyword, eventClassification){
        e.preventDefault();
        if(eventClassification.length === 0 && eventKeyword.length === 0){
            setNoParameters(true);
        } else if (eventKeyword.length === 0) {
            setNoParameters(false);
            fetch(`${classificationNameURL}`)
                .then((response) => response.json())
                .then((data) => setSearchedEvents(data))
        }  else if (eventClassification.length === 0) {
            setNoParameters(false);
            fetch(`${keywordURL}`)
                .then((response) => response.json())
                .then((data) => setSearchedEvents(data));
        } else {
            setNoParameters(false);
            fetch(`${allParametersURL}`)
                .then((response) => response.json())
                .then((data) => setSearchedEvents(data));
        }
       

        console.log(eventKeyword)
        console.log(eventClassification.length)
        console.log(searchedEvents)
        console.log(noParameters)

    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e, eventKeyword, eventClassification)}>
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

                <input type="submit" value="Search" />
                
            </form>

            {noParameters === true ?
            <p>Please, Type related keyword or Classification</p> :
            searchedEvents.page?.totalElements !== 0  && searchedEvents._embedded?
            searchedEvents._embedded.events.map((event) => {return <EventCard props={event} key={event.id} />}) :
            <p>Can not find related events</p> 
            
            }

            {/* <label for="cars">Choose a car:</label>
            <select id="cars" name="carlist" form="carform">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select> */}
        </div>
    )
}
