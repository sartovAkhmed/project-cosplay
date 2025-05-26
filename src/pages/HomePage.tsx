import React from "react";
import Hero from "../components/ui/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import CosplayCard from "../components/ui/CosplayCard";
import ArticleCard from "../components/ui/ArticleCard";
import EventCard from "../components/ui/EventCard";
import {
  featuredCosplays,
  featuredArticles,
  upcomingEvents,
} from "../data/mockData";
import { ArrowRight, Sparkles, Palette, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Откройте для себя искусство косплея"
        subtitle="Присоединяйтесь к нашему сообществу создателей, которые оживляют вымышленных персонажей с помощью костюмов, грима и выступлений. Посмотреть галерею"
        imageUrl="https://vdnh.ru/upload/resize_cache/iblock/3a8/1000_1000_1/3a8d56c4d48dee4bb10a28fb8decf8ae.jpg"
        buttonText="Исследуйте галерею"
        buttonLink="/gallery"
      />

      {/* Featured Cosplays */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Рекомендуемые косплеи"
            subtitle="Удивительные перевоплощения от талантливых косплееров со всего мира"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCosplays.slice(0, 6).map((cosplay) => (
              <CosplayCard
                key={cosplay.id}
                cosplay={cosplay}
                featured={cosplay.id === 1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              Смотреть всю галерею
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
                Что такое косплей?
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Косплей — это сочетание слов «костюм» и «игра», искусство
                  перевоплощения в персонажей из фильмов, сериалов, видеоигр,
                  комиксов и других медиа. Это форма творческого самовыражения и
                  празднование любимых фэндомов.
                </p>
                <p>
                  Косплей — это не только ношение костюмов, но и воплощение
                  характера персонажа, создание реквизита и выступления для
                  фотосессий или на фестивалях.
                </p>
                <p>
                  Это глобальное явление объединяет людей со всего мира,
                  способствует развитию творчества, формированию сообщества и
                  любви к персонажам и историям, которые нас вдохновляют.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Подробнее о косплее
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://cs7.pikabu.ru/post_img/big/2018/01/03/0/1514929146138799257.jpg"
                  alt="Косплеер на фестивале"
                  className="rounded-lg shadow-md h-72 w-full object-cover"
                />
                <img
                  src="https://ae04.alicdn.com/kf/S91095bbb2e0a4b90933f2e2f6c0eaed1B.png"
                  alt="Создание реквизита для косплея"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://site.kizhi.karelia.ru/media/thumbs/opr/87/88/kostum_.jpg"
                  alt="Детали костюма"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img
                  src="https://media.istockphoto.com/id/626610946/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BA%D0%BE%D1%81%D0%BF%D0%BB%D0%B5%D0%B5%D1%80%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%B9%D0%BE%D1%80%D0%BA%D1%88%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BA%D0%BE%D1%81%D0%BF%D0%BB%D0%B5%D0%B9-%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D0%BD%D1%86%D0%B8%D0%B8.jpg?s=1024x1024&w=is&k=20&c=Eai6_VmWOFYqER1VXUcFGMaNDy3JgP1q3UrHt_ZEB30="
                  alt="Групповой косплей"
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
            title="Почему люди любят косплей"
            subtitle="Узнайте, почему косплей стал любимой формой самовыражения"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Творчество
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Самовыражение через создание костюмов, реквизита, макияжа и
                выступлений.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Сообщество
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Общение с единомышленниками, которые разделяют вашу страсть к
                персонажам и историям.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-6">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Развитие навыков
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Развивайте навыки рукоделия, шитья, макияжа и выступлений на
                практике.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Истории
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Оживляйте персонажей и празднуйте истории, которые вас
                вдохновляют.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeading
            title="Последние статьи"
            subtitle="Советы, уроки и истории от сообщества косплея"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                featured={article.id === 1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              Читать больше статей
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Ближайшие события"
            subtitle="Фестивали, конкурсы и встречи для любителей косплея"
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
              Смотреть все события
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Присоединяйтесь к нашему сообществу косплея
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получайте свежие советы по косплею, новости о событиях и вдохновение
            на свою почту.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Подписаться
            </button>
          </form>

          <p className="text-sm text-white/70 mt-4">
            Мы уважаем вашу конфиденциальность. Вы можете отписаться в любой
            момент.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
