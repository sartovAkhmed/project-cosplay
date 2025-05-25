import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import CosplayCard from '../components/ui/CosplayCard';
import { allCosplays } from '../data/mockData';
import { Filter, Search, X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Extract all unique tags from cosplays
  const allTags = Array.from(
    new Set(allCosplays.flatMap(cosplay => cosplay.tags))
  ).sort();
  
  // Filter cosplays based on search term and selected tags
  const filteredCosplays = allCosplays.filter(cosplay => {
    const matchesSearch = searchTerm === '' || 
      cosplay.character.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cosplay.cosplayer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cosplay.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => cosplay.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div>
      <Hero 
        title="Cosplay Gallery"
        subtitle="Browse our collection of amazing cosplay creations from around the world"
        imageUrl="https://images.pexels.com/photos/7234322/pexels-photo-7234322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading 
            title="Explore Cosplays" 
            subtitle="Find inspiration and appreciate the artistry of cosplayers"
          />
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by character, cosplayer or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              <span>Filter</span>
            </button>
            
            {selectedTags.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center px-4 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>
          
          {/* Filter Panel */}
          {filterOpen && (
            <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filter by Tags</h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Selected Tags Display */}
          {selectedTags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2 items-center">
              <span className="text-gray-700 dark:text-gray-300 text-sm">Active filters:</span>
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                >
                  {tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          )}
          
          {/* Results Count */}
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Showing {filteredCosplays.length} of {allCosplays.length} cosplays
          </p>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCosplays.map((cosplay) => (
              <CosplayCard key={cosplay.id} cosplay={cosplay} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredCosplays.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">No cosplays found matching your filters</p>
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
    </div>
  );
};

export default GalleryPage;