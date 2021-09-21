import React from 'react'

export const EventCard = ({props, saveEvent, deleteEvent, isMyEvent}) => {
    return (
        <div className="event-card">
            <div className="text-img-container">
                <div className="text-container">
                        <h2>{props.name}</h2>
                        <h5>{props.sales.public.startDateTime}</h5>
                        <h4>{props._embedded.venues[0].country.name}</h4>
                        <h4>{props._embedded.venues[0].city.name}</h4>
                        <h4>{props._embedded.venues[0].address.line1}</h4>
                        <p><span>{props.classifications[0].segment.name}</span> &nbsp; 
                        <span>{props.classifications[0].genre.name}</span>
                        </p>
                        
                </div>
                <div className="img-container">
                        <img src={props.images[0].url} alt="Event Img"/>
                </div>
            </div>
           
           <div className="save-btn-container">
               {isMyEvent? <button onClick={deleteEvent} id={props.id}>Delete</button> : <button onClick={saveEvent} id={props.id}><img onClick={saveEvent} id={props.id} src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-67-512.png" alt="My Events" />Save</button>}
               <button  id={props.id}><img src="https://cdn2.iconfinder.com/data/icons/facebook-ui/48/Jee-18-512.png" alt="share" />Share</button>
           </div>
        </div>
    )
}
