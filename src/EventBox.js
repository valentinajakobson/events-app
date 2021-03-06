import React from 'react';
import './EventBox.css';

function EventBox(props) {
    return (
      <div className="event-box" onClick={props.onClick} id={props.id}>
        <div className="image-holder">
          <img src={props.image} alt="event-img"  />
        </div>
          <p className='name'>{props.name}</p>
          <p className="date-n-time"><i className="fas fa-calendar-alt"></i><br></br>{props.date} {props.time}</p>
          <p className="address" ><i className="fas fa-map-marker-alt"></i><br></br>{props.address} {props.postcode} {props.city}</p>
          <p className="intro"><i className="fas fa-info-circle"></i><br></br>{props.intro}</p>
          <p className="event-url"><i className="fas fa-link"></i> <a href={props.url} target="_blank" rel="noopener noreferrer"> More details</a></p>
      </div>
    );
  }
export default EventBox;
