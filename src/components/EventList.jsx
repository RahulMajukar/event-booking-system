import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import EventCard from './EventCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const EventList = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  useEffect(() => {
    let result = events;
    if (searchTerm) {
      result = result.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category) {
      result = result.filter(event => event.category === category);
    }
    setFilteredEvents(result);
  }, [searchTerm, category]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} setCategory={setCategory} />
      {currentEvents.map(event => (
        <Link to={`/event/${event.id}`} key={event.id}>
          <EventCard event={event} />
        </Link>
      ))}
      <Pagination 
        eventsPerPage={eventsPerPage}
        totalEvents={filteredEvents.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default EventList;