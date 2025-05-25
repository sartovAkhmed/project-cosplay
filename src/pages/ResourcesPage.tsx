import React from "react";
import Hero from "../components/ui/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import { Link } from "react-router-dom";
import {
  Scissors,
  Palette,
  ShoppingBag,
  Book,
  Wand2,
  Camera,
  HeartHandshake,
} from "lucide-react";

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: "Гид для начинающих",
      description:
        "Всё, что нужно знать для начала пути в косплее: базовые материалы и простые техники.",
      icon: <Book className="w-8 h-8" />,
      color:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      link: "/resources/beginners-guide",
    },
    {
      id: 2,
      title: "Гид по материалам",
      description:
        "Подробная информация о различных материалах для косплея, их свойствах и где их найти.",
      // icon: <Swatch className="w-8 h-8" />,
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
      link: "/resources/materials",
    },
    {
      id: 3,
      title: "Техники создания костюмов",
      description:
        "Изучите шитьё, создание выкроек и работу с тканями для создания впечатляющих костюмов.",
      icon: <Scissors className="w-8 h-8" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      link: "/resources/costume-techniques",
    },
    {
      id: 4,
      title: "Создание реквизита",
      description:
        "Уроки по созданию оружия, аксессуаров и реквизита из фоама, 3D-печати и других материалов.",
      icon: <Wand2 className="w-8 h-8" />,
      color:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      link: "/resources/prop-making",
    },
    {
      id: 5,
      title: "Техники макияжа",
      description:
        "Преобразите лицо с помощью макияжа персонажей, спецэффектов и уроков по протезированию.",
      icon: <Palette className="w-8 h-8" />,
      color:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      link: "/resources/makeup",
    },
    {
      id: 6,
      title: "Гид по покупкам",
      description:
        "Где найти лучшие материалы, инструменты и готовые товары для косплея.",
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      link: "/resources/shopping-guide",
    },
    {
      id: 7,
      title: "Советы по фотосъёмке",
      description:
        "Сделайте профессиональные фото своих косплеев с помощью советов по фотографии и позированию.",
      icon: <Camera className="w-8 h-8" />,
      color:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      link: "/resources/photography",
    },
    {
      id: 8,
      title: "Правила сообщества",
      description:
        "Этикет, инклюзивность и как быть позитивным участником косплей-сообщества.",
      icon: <HeartHandshake className="w-8 h-8" />,
      color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
      link: "/resources/community",
    },
  ];

  return (
    <div>
      <Hero
        title="Ресурсы для косплея"
        subtitle="Гайды, уроки и материалы, которые помогут вам создавать потрясающие косплеи"
        imageUrl="https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Библиотека ресурсов"
            subtitle="Всё, что нужно для создания невероятных косплеев, в одном месте"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={resource.link}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full"
              >
                <div
                  className={`${resource.color} p-4 rounded-lg inline-flex mb-4`}
                >
                  {resource.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center font-medium text-purple-600 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300 transition-colors">
                    Подробнее
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorial */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Избранный урок: Основы брони из фоама
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Узнайте, как создавать легкие и прочные элементы брони из
                EVA-фоама. В этом пошаговом уроке вы освоите всё: от создания
                выкроек до покраски и техники состаривания.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      1
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Научитесь создавать и переносить выкройки с цифровых
                    шаблонов
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      2
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Освойте резку, формовку и термообработку EVA-фоама
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      3
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Откройте для себя профессиональные техники герметизации,
                    покраски и состаривания
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1 mr-3">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      4
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Создайте удобные системы крепления для ношения брони
                  </p>
                </li>
              </ul>

              <a
                href="/resources/tutorials/foam-armor-basics"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Смотреть полный урок
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5586526/pexels-photo-5586526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Элемент брони из EVA-фоама"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3802668/pexels-photo-3802668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Покраска брони из фоама"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/5417682/pexels-photo-5417682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Вырезание выкроек"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2573605/pexels-photo-2573605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Готовый элемент брони"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Бесплатные материалы"
            subtitle="Шаблоны, выкройки и справочники для ваших косплей-проектов"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Scissors className="w-16 h-16 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Шаблоны выкроек
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Базовые выкройки для брони и аксессуаров, чтобы вы могли
                  начать свой проект.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Скачать PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <Palette className="w-16 h-16 text-pink-600 dark:text-pink-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Справочник по цветам
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Формулы смешивания красок и цветовые референсы для популярных
                  персонажей и материалов.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Скачать PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Чек-лист материалов
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Полный список материалов и инструментов для разных видов
                  косплей-проектов.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Скачать PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
