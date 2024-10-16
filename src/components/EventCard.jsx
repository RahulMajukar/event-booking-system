import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-600">{event.description}</p>
      <div className="mt-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          {event.category}
        </span>
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          {event.date}
        </span>
      </div>
      <p className="mt-2">Available Seats: {event.availableSeats}</p>
      <p className="font-bold mt-2">Price: ${event.price}</p>
    </div>
  );
};

export default EventCard;