import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import EventCard from '../components/ui/EventCard';
import { allEvents } from '../data/mockData';
import { Calendar, MapPin, Filter, X } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  
  // Extract unique regions, months, and types
  const regions = Array.from(new Set(allEvents.map(event => event.region))).sort();
  
  const eventTypes = Array.from(new Set(allEvents.map(event => event.type))).sort();
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Filter events based on selected criteria
  const filteredEvents = allEvents.filter(event => {
    const matchesRegion = selectedRegion === '' || event.region === selectedRegion;
    const matchesType = selectedType === '' || event.type === selectedType;
    
    let matchesMonth = true;
    if (selectedMonth !== '') {
      const eventDate = new Date(event.date);
      const eventMonthName = months[eventDate.getMonth()];
      matchesMonth = eventMonthName === selectedMonth;
    }
    
    return matchesRegion && matchesType && matchesMonth;
  });
  
  // Sort events by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  
  // Separate upcoming and past events
  const today = new Date();
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= today);
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < today);
  
  const clearFilters = () => {
    setSelectedRegion('');
    setSelectedMonth('');
    setSelectedType('');
  };

  return (
    <div>
      <Hero 
        title="Cosplay Events"
        subtitle="Find conventions, competitions, and meetups for cosplay enthusiasts around the world"
        imageUrl="https://images.pexels.com/photos/9582298/pexels-photo-9582298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading 
            title="Find Events" 
            subtitle="Discover cosplay events near you and around the world"
          />
          
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              <span>Filter Events</span>
            </button>
            
            {(selectedRegion || selectedMonth || selectedType) && (
              <button
                onClick={clearFilters}
                className="flex items-center px-4 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                <span>Clear Filters</span>
              </button>
            )}
            
            {/* Active Filters Display */}
            <div className="flex flex-wrap gap-2">
              {selectedRegion && (
                <div className="flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{selectedRegion}</span>
                  <button
                    onClick={() => setSelectedRegion('')}
                    className="ml-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {selectedMonth && (
                <div className="flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{selectedMonth}</span>
                  <button
                    onClick={() => setSelectedMonth('')}
                    className="ml-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {selectedType && (
                <div className="flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                  <span>{selectedType}</span>
                  <button
                    onClick={() => setSelectedType('')}
                    className="ml-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Filter Panel */}
          {filterOpen && (
            <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filter Events</h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Region</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">All Regions</option>
                    {regions.map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Month</label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">All Months</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Event Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">All Types</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {/* Results Count */}
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Showing {filteredEvents.length} of {allEvents.length} events
          </p>
          
          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          )}
          
          {/* Past Events */}
          {pastEvents.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Past Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          )}
          
          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">No events found matching your filters</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Submit Event */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Host a Cosplay Event?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Submit your event to our calendar and reach thousands of cosplay enthusiasts.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Event Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your event name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Select event type</option>
                    <option value="Convention">Convention</option>
                    <option value="Competition">Competition</option>
                    <option value="Meetup">Meetup</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="City, Country"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Event Description</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  placeholder="Describe your event"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Contact Information</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  Submit Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;