import React, { useState } from "react";
import Hero from "../components/ui/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import ArticleCard from "../components/ui/ArticleCard";
import { allArticles } from "../data/mockData";
import { Search, X } from "lucide-react";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Extract all unique categories
  const categories = [
    "Все",
    ...Array.from(new Set(allArticles.map((article) => article.category))),
  ].filter(Boolean) as string[];

  // Filter articles based on search and category
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      searchTerm === "" ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "Все" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Hero
        title="Блог о косплее"
        subtitle="Статьи, уроки и инсайты от сообщества косплееров"
        imageUrl="https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Последние статьи"
            subtitle="Будьте в курсе последних трендов, техник и историй из мира косплея"
          />

          {/* Search and Categories */}
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск по статьям..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category === "Все" ? "" : category)
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (category === "Все" && selectedCategory === "") ||
                    category === selectedCategory
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
            Показано {filteredArticles.length} из {allArticles.length} статей
          </p>

          {/* Featured Article */}
          {filteredArticles.length > 0 && (
            <div className="mb-12">
              <ArticleCard article={filteredArticles[0]} featured={true} />
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                Статьи по вашему запросу не найдены
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
