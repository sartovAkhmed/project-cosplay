import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import { allArticles } from '../data/mockData';
import SectionHeading from '../components/ui/SectionHeading';
import ArticleCard from '../components/ui/ArticleCard';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(allArticles.find(a => a.id.toString() === id));
  const [relatedArticles, setRelatedArticles] = useState(allArticles.filter(a => a.id.toString() !== id).slice(0, 3));
  
  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo(0, 0);
    
    // Update article when ID changes
    const currentArticle = allArticles.find(a => a.id.toString() === id);
    setArticle(currentArticle);
    
    // Update related articles
    if (currentArticle) {
      const related = allArticles
        .filter(a => a.id !== currentArticle.id && a.category === currentArticle.category)
        .slice(0, 3);
      setRelatedArticles(related.length > 0 ? related : allArticles.filter(a => a.id !== currentArticle.id).slice(0, 3));
    }
  }, [id]);
  
  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[50vh] min-h-[400px] relative">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <Link 
              to="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80">
              <div className="flex items-center">
                <img 
                  src={article.author.avatarUrl} 
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-white" 
                />
                <span>{article.author.name}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime} min read</span>
              </div>
              
              {article.category && (
                <span className="px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full">
                  {article.category}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Bookmark className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Cosplay is an art form that combines creativity, craftsmanship, and performance. Creating a successful cosplay requires attention to detail, patience, and a deep understanding of the character you're portraying. In this article, we'll explore the essential steps to bring your favorite character to life through cosplay.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Understanding Your Character</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Before you start crafting your costume, it's crucial to research and understand the character you want to cosplay. Look at reference images from multiple angles, study their personality traits, and note any unique features or accessories. The more familiar you are with the character, the more authentic your cosplay will be.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Consider watching episodes, reading comics, or playing games featuring your character to get a better sense of how they move, speak, and interact with others. This research will not only help with costume accuracy but also with your performance as the character.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Planning Your Costume</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Once you've thoroughly researched your character, it's time to plan your costume. Break down the outfit into individual components and decide which pieces you'll make yourself and which you might purchase. Consider your budget, timeline, and skill level when making these decisions.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Create a materials list for each component, including fabric types, paints, foam, wigs, and any specialty items you'll need. Having a comprehensive plan before you start will save you time and prevent costly mistakes later on.
            </p>
            
            <div className="my-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/6942634/pexels-photo-6942634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cosplay materials" 
                className="rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Costume patterns" 
                className="rounded-lg"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Crafting Techniques</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Depending on your character, you might need to learn various crafting techniques. For armor pieces, EVA foam is a popular choice due to its flexibility, durability, and ease of use. For clothing, you'll need basic sewing skills or the ability to modify existing garments.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Don't be afraid to experiment with different materials and techniques. The cosplay community is incredibly supportive, and there are countless tutorials available online for almost any crafting method you might need to learn.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Bringing It All Together</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As you complete each component of your costume, regularly try everything on together to ensure proper fit and appearance. Make adjustments as needed before final assembly. Remember that comfort is important, especially if you'll be wearing your cosplay for extended periods at conventions.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Once your costume is complete, practice posing and moving in character. Take some test photos to see how your cosplay looks on camera and make any final adjustments based on these images.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Conclusion</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Creating a cosplay is a rewarding journey that allows you to express your creativity and passion for the characters you love. Remember that cosplay is for everyone, regardless of skill level, body type, or experience. The most important aspect is having fun and enjoying the process.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Don't be discouraged by challenges or mistakes—they're all part of the learning process. Each cosplay you create will help you develop new skills and techniques for future projects. So gather your materials, embrace your creativity, and start bringing your favorite character to life!
            </p>
          </article>
          
          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="flex items-start">
              <img 
                src={article.author.avatarUrl} 
                alt={article.author.name}
                className="w-16 h-16 rounded-full mr-4 object-cover" 
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  About {article.author.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {article.author.bio || `${article.author.name} is a passionate cosplayer and content creator with over 5 years of experience in the cosplay community. They specialize in character design, prop making, and sharing knowledge with fellow cosplay enthusiasts.`}
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                    Twitter
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                    Instagram
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Related Articles" 
            subtitle="Explore more content about cosplay techniques and inspiration"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;