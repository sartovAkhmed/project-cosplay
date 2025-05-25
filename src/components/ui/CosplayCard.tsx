import React, { useState } from 'react';
import { Heart, Share2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Cosplay } from '../../types';

interface CosplayCardProps {
  cosplay: Cosplay;
  featured?: boolean;
}

const CosplayCard: React.FC<CosplayCardProps> = ({ cosplay, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pb-[100%] overflow-hidden">
        <img
          src={cosplay.imageUrl}
          alt={`${cosplay.character} cosplay by ${cosplay.cosplayer}`}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white text-xl font-bold truncate">{cosplay.character}</h3>
              <p className="text-white/80 text-sm">by {cosplay.cosplayer}</p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'text-pink-500 fill-pink-500' : 'text-white'}`} />
              </button>
              <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <Share2 className="w-4 h-4 text-white" />
              </button>
              <Link to={`/gallery/${cosplay.id}`} className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <Eye className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {!isHovered && (
        <div className="p-4">
          <h3 className="font-bold text-gray-900 dark:text-white">{cosplay.character}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">by {cosplay.cosplayer}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {cosplay.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CosplayCard;