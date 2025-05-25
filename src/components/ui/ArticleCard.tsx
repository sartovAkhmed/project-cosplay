import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  return (
    <Link 
      to={`/blog/${article.id}`}
      className={`group block rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 ${
        featured ? 'grid md:grid-cols-2 gap-0' : 'flex flex-col'
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-full' : 'h-48'}`}>
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {article.category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full">
              {article.category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>{article.readTime} min read</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="mt-auto flex items-center">
          <img 
            src={article.author.avatarUrl} 
            alt={article.author.name}
            className="w-8 h-8 rounded-full mr-3 object-cover" 
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {article.author.name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;