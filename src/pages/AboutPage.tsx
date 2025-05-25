import React from "react";
import Hero from "../components/ui/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import { History, Sparkles, Users, Heart } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="О культуре косплея"
        subtitle="Празднуем искусство косплея и страстное сообщество, стоящее за ним"
        imageUrl="https://images.pexels.com/photos/10353827/pexels-photo-10353827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            title="Наша миссия"
            subtitle="Раскрываем творческий потенциал косплееров через образование и сообщество"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              CosplayCulture стремится быть всеобъемлющим ресурсом для
              косплееров любого уровня и происхождения. Наша миссия —
              вдохновлять на творчество, поддерживать сообщество и отмечать
              искусство косплея во всех его проявлениях.
            </p>

            <p>
              Мы верим, что косплей — для всех, независимо от опыта, возраста,
              типа фигуры, пола или происхождения. Через нашу платформу мы
              стремимся разрушать барьеры, делиться знаниями и вдохновлять новое
              поколение косплееров воплощать любимых персонажей в жизнь.
            </p>

            <p>
              Предлагая обучающие материалы, ресурсы, информацию о событиях и
              площадку для демонстрации работ, мы хотим способствовать развитию
              и эволюции косплей-сообщества по всему миру.
            </p>
          </div>
        </div>
      </section>

      {/* История косплея */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
                <History className="w-8 h-8" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                История косплея
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Термин «косплей» был введён в 1984 году Нобуюки Такахаси после
                  посещения Всемирной научно-фантастической конвенции в
                  Лос-Анджелесе. Он объединил слова «костюм» и «игра», чтобы
                  описать фанатов, переодевающихся в любимых персонажей.
                </p>

                <p>
                  Однако практика костюмированной игры появилась гораздо раньше.
                  В 1930-х годах поклонники научной фантастики посещали
                  конвенции в футуристических костюмах. К 1970-м на конвенциях
                  по Star Trek регулярно появлялись фанаты в образах героев
                  сериала.
                </p>

                <p>
                  В Японии косплей стал особенно популярен в 1980–1990-х годах с
                  ростом популярности аниме и манги. По мере распространения
                  японской поп-культуры по миру косплей также стал глобальным
                  явлением, превратившись в яркое и творческое сообщество.
                </p>

                <p>
                  Сегодня косплей — это мировое движение с профессиональными
                  косплеерами, международными конкурсами и развитой индустрией
                  костюмеров, фотографов и организаторов мероприятий.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/9582298/pexels-photo-9582298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ранний косплей на конвенции"
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/7234309/pexels-photo-7234309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Современный косплей"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Аниме-косплей"
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/7989216/pexels-photo-7989216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Косплей-конкурс"
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему косплей важен */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Почему косплей важен"
            subtitle="Культурное значение и личные преимущества косплея"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Творческое самовыражение
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Косплей — это уникальная форма художественного самовыражения,
                позволяющая проявить креативность в создании костюмов,
                реквизита, грима и сценического образа. Это сочетание множества
                видов искусства в одном проекте.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Создание сообщества
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Сообщество косплееров объединяет людей с разным опытом и
                интересами. Здесь завязываются дружбы, происходит обмен знаниями
                и совместное празднование творчества.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Личностный рост
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Многие косплееры отмечают повышение уверенности в себе, развитие
                социальных навыков и укрепление самоидентичности. Сложности
                создания костюмов развивают умение решать задачи и терпение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <SectionHeading
            title="Наша команда"
            subtitle="Страстные косплееры и создатели CosplayCulture"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Эмма Чен"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Эмма Чен
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-3">
                  Основатель и главный редактор
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Более 10 лет в косплее, эксперт по созданию брони и реквизита.
                </p>
                <div className="flex justify-center space-x-3">
                  {/* Соцсети */}
                  {/* ... */}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Маркус Джонсон"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Маркус Джонсон
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-3">
                  Технический директор
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Совмещает программирование с увлечением аниме-косплеем и
                  электроникой для реквизита.
                </p>
                <div className="flex justify-center space-x-3">
                  {/* Соцсети */}
                  {/* ... */}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Зои Патель"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Зои Патель
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-3">
                  Контент-менеджер
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Призёр конкурсов по гриму, специализируется на перевоплощениях
                  и SFX.
                </p>
                <div className="flex justify-center space-x-3">
                  {/* Соцсети */}
                  {/* ... */}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Лео Ким"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Лео Ким
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-3">
                  Менеджер сообщества
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Увлечён созданием инклюзивных косплей-сообществ и организацией
                  мероприятий.
                </p>
                <div className="flex justify-center space-x-3">
                  {/* Соцсети */}
                  {/* ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <SectionHeading
              title="Связаться с нами"
              subtitle="Есть вопросы, предложения или хотите присоединиться к нашей платформе?"
              alignment="center"
              withLine={false}
            />

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Ваш email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Введите ваш email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="О чём ваш вопрос?"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={6}
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
