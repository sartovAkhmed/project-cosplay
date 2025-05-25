import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react";
import { allArticles } from "../data/mockData";
import SectionHeading from "../components/ui/SectionHeading";
import ArticleCard from "../components/ui/ArticleCard";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(
    allArticles.find((a) => a.id.toString() === id)
  );
  const [relatedArticles, setRelatedArticles] = useState(
    allArticles.filter((a) => a.id.toString() !== id).slice(0, 3)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentArticle = allArticles.find((a) => a.id.toString() === id);
    setArticle(currentArticle);
    if (currentArticle) {
      const related = allArticles
        .filter(
          (a) =>
            a.id !== currentArticle.id && a.category === currentArticle.category
        )
        .slice(0, 3);
      setRelatedArticles(
        related.length > 0
          ? related
          : allArticles.filter((a) => a.id !== currentArticle.id).slice(0, 3)
      );
    }
  }, [id]);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Статья не найдена
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Статья, которую вы ищете, не существует или была удалена.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к блогу
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
              Назад к блогу
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
                <span>{article.readTime} мин чтения</span>
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
              Косплей — это искусство, сочетающее креативность, мастерство и
              актерское мастерство. Для успешного косплея важны внимание к
              деталям, терпение и глубокое понимание персонажа. В этой статье мы
              рассмотрим основные шаги, которые помогут воплотить любимого героя
              в жизнь.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Понимание персонажа
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Прежде чем приступить к созданию костюма, важно изучить и понять
              выбранного персонажа. Посмотрите референсы с разных ракурсов,
              изучите черты характера, обратите внимание на уникальные детали и
              аксессуары. Чем лучше вы знаете персонажа, тем аутентичнее
              получится косплей.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Посмотрите эпизоды, почитайте комиксы или поиграйте в игры с этим
              персонажем, чтобы понять, как он двигается, говорит и
              взаимодействует с другими. Это поможет не только с точностью
              костюма, но и с актерским воплощением.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Планирование костюма
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              После тщательного изучения персонажа переходите к планированию
              костюма. Разделите образ на отдельные элементы и решите, что
              будете делать сами, а что — покупать. Учитывайте бюджет, сроки и
              свои навыки.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Составьте список материалов для каждого элемента: ткани, краски,
              фоам, парики и другие специальные детали. Четкий план сэкономит
              время и поможет избежать ошибок.
            </p>

            <div className="my-10 grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6942634/pexels-photo-6942634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Материалы для косплея"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Выкройки костюма"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Техники изготовления
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              В зависимости от персонажа, могут понадобиться разные техники. Для
              брони часто используют EVA-фоам — он гибкий, прочный и удобен в
              работе. Для одежды нужны базовые навыки шитья или умение
              переделывать готовые вещи.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Не бойтесь экспериментировать с материалами и техниками.
              Сообщество косплееров очень поддерживает новичков, а в интернете
              есть множество обучающих материалов практически по любому вопросу.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Завершающий этап
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              По мере готовности элементов регулярно примеряйте их вместе, чтобы
              проверить посадку и внешний вид. Вносите коррективы до финальной
              сборки. Не забывайте о комфорте — особенно если планируете долго
              находиться в костюме на мероприятии.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              После завершения костюма потренируйтесь позировать и двигаться в
              образе. Сделайте пробные фото, чтобы оценить результат и внести
              последние правки.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Заключение
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Косплей — это увлекательное хобби, позволяющее проявить
              креативность и любовь к персонажам. Косплеить может каждый,
              независимо от опыта, внешности или навыков. Главное — получать
              удовольствие от процесса!
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Не расстраивайтесь из-за трудностей или ошибок — это часть
              обучения. Каждый новый косплей поможет вам освоить новые техники и
              навыки. Собирайте материалы, включайте фантазию и воплощайте
              любимых героев в жизнь!
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
                  Об авторе: {article.author.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {article.author.bio ||
                    `${article.author.name} — увлечённый косплеер и автор с опытом более 5 лет. Специализируется на дизайне персонажей, создании реквизита и делится знаниями с сообществом.`}
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                  >
                    Портфолио
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
            title="Похожие статьи"
            subtitle="Изучайте больше материалов о косплей-техниках и вдохновении"
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
