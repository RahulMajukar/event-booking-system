import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import { AuthContext } from '../contexts/AuthContext';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleBooking = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (event.availableSeats > 0) {
      setEvent(prevEvent => ({
        ...prevEvent,
        availableSeats: prevEvent.availableSeats - 1
      }));
      alert('Ticket booked successfully!');
    } else {
      alert('Sorry, this event is fully booked.');
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
          {event.category}
        </span>
        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
          {event.date}
        </span>
      </div>
      <p className="mb-2">Available Seats: {event.availableSeats}</p>
      <p className="text-xl font-bold mb-4">Price: ${event.price}</p>
      <button 
        onClick={handleBooking}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={event.availableSeats === 0}
      >
        {event.availableSeats > 0 ? 'Book Ticket' : 'Fully Booked'}
      </button>
    </div>
  );
};

export default EventDetails;