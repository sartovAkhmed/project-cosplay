import React from 'react';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import CosplayCard from '../components/ui/CosplayCard';
import ArticleCard from '../components/ui/ArticleCard';
import EventCard from '../components/ui/EventCard';
import { featuredCosplays, featuredArticles, upcomingEvents } from '../data/mockData';
import { ArrowRight, Sparkles, Palette, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Discover the Art of Cosplay"
        subtitle="Join our community of creators bringing fictional characters to life through costume, makeup, and performance"
        imageUrl="https://images.pexels.com/photos/6469334/pexels-photo-6469334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        buttonText="Explore Gallery"
        buttonLink="/gallery"
      />
      
      {/* Featured Cosplays */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Cosplays" 
            subtitle="Extraordinary transformations from talented cosplayers around the world"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCosplays.slice(0, 6).map((cosplay) => (
              <CosplayCard key={cosplay.id} cosplay={cosplay} featured={cosplay.id === 1} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/gallery"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Cosplay Culture */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What is Cosplay?
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Cosplay, a blend of "costume" and "play," is the art of dressing up as characters from movies, TV shows, video games, comics, and other media. It's a form of creative expression and a celebration of fandom.
                </p>
                <p>
                  More than just wearing costumes, cosplay often involves embodying a character's personality, creating elaborate props, and performing for photography or at conventions.
                </p>
                <p>
                  This global phenomenon brings together people from all walks of life, fostering creativity, community, and appreciation for the characters and stories that inspire us.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  to="/about"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Learn More About Cosplay
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5586515/pexels-photo-5586515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cosplayer at convention" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/10353821/pexels-photo-10353821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cosplay prop making" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Costume detail" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/6373792/pexels-photo-6373792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Group cosplay" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Cosplay */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading 
            title="Why People Love Cosplay" 
            subtitle="Discover the many reasons why cosplay has become a beloved form of self-expression"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Creativity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Express yourself through costume design, prop making, makeup, and performance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with fellow fans who share your passion for characters and stories.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-6">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Skill Building</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Develop crafting, sewing, makeup, and performance skills through practice.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Storytelling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bring characters to life and celebrate the stories that inspire you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Tips, tutorials, and stories from the cosplay community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} featured={article.id === 1} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              Read More Articles
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Conventions, competitions, and meetups for cosplay enthusiasts"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/events"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              View All Events
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Cosplay Community
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest cosplay tips, event updates, and inspiration delivered to your inbox.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;