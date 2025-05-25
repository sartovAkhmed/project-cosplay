import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Calculate if the event is upcoming
  const eventDate = new Date(event.date);
  const today = new Date();
  const isUpcoming = eventDate >= today;

  // Format the date
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md text-center w-16">
            <div className="bg-purple-600 text-white py-1">
              <span className="text-xs font-medium">
                {eventDate.toLocaleDateString('en-US', { month: 'short' })}
              </span>
            </div>
            <div className="py-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {eventDate.getDate()}
              </span>
            </div>
          </div>
        </div>
        {isUpcoming && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
              Upcoming
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {event.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="mt-auto">
          <a 
            href={event.url} 
            className="inline-flex items-center font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;