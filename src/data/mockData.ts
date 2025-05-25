import { Cosplay, Article, Event } from "../types";

// Избранные косплеи
export const featuredCosplays: Cosplay[] = [
  {
    id: 1,
    character: "Истребитель демонов — Нэдзуко",
    cosplayer: "Эмма Чен",
    imageUrl:
      "https://img.joomcdn.net/c87e2f0784759492e0a5de0c3783fa55d0cf008e_original.jpeg",
    tags: ["Аниме", "Истребитель демонов", "Избранное"],
  },
  {
    id: 2,
    character: "Киберпанк Самурай",
    cosplayer: "Алекс Ривера",
    imageUrl:
      "https://ae04.alicdn.com/kf/Sc2bcea3659ec44839bae2bae542ebaf6e.jpg_480x480.jpg",
    tags: ["Оригинал", "Киберпанк", "Броня"],
  },
  {
    id: 3,
    character: "Стимпанк Исследователь",
    cosplayer: "Джейми Вонг",
    imageUrl:
      "https://i.pinimg.com/736x/e4/47/e0/e447e03a91d6812eea32a52a22466c72.jpg",
    tags: ["Стимпанк", "Оригинал", "Аксессуары"],
  },
  {
    id: 4,
    character: "Ведьма-Колдунья",
    cosplayer: "Оливия Блэк",
    imageUrl:
      "https://images.pexels.com/photos/5417683/pexels-photo-5417683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Фэнтези", "Магия", "Оригинал"],
  },
  {
    id: 5,
    character: "Научно-фантастический Воин",
    cosplayer: "Маркус Джонсон",
    imageUrl:
      "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Научная фантастика", "Броня", "Оригинал"],
  },
  {
    id: 6,
    character: "Фея-Хранительница",
    cosplayer: "Лили Чен",
    imageUrl:
      "https://images.pexels.com/photos/5383501/pexels-photo-5383501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Фэнтези", "Крылья", "Оригинал"],
  },
];

// Все косплеи (включая избранные)
export const allCosplays: Cosplay[] = [
  ...featuredCosplays,
  {
    id: 7,
    character: "Genshin Impact — Джин",
    cosplayer: "София Ли",
    imageUrl:
      "https://images.pexels.com/photos/5792901/pexels-photo-5792901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Видеоигры", "Genshin Impact", "Детализированный"],
  },
  {
    id: 8,
    character: "Эльф-Рейнджер",
    cosplayer: "Тайлер Смит",
    imageUrl:
      "https://images.pexels.com/photos/7989736/pexels-photo-7989736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Фэнтези", "Эльф", "Броня"],
  },
  {
    id: 9,
    character: "Боец будущего",
    cosplayer: "Крис Родригес",
    imageUrl:
      "https://images.pexels.com/photos/6048271/pexels-photo-6048271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Научная фантастика", "Оригинал", "Броня"],
  },
  {
    id: 10,
    character: "Пиратский Капитан",
    cosplayer: "Зои Патель",
    imageUrl:
      "https://images.pexels.com/photos/6942521/pexels-photo-6942521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Исторический", "Пират", "Детализированный"],
  },
  {
    id: 11,
    character: "Final Fantasy — Тифа",
    cosplayer: "Морган Ю",
    imageUrl:
      "https://images.pexels.com/photos/7234323/pexels-photo-7234323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Видеоигры", "Final Fantasy", "Популярный"],
  },
  {
    id: 12,
    character: "Викинг-Воин",
    cosplayer: "Эрик Джонсон",
    imageUrl:
      "https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Исторический", "Викинг", "Броня"],
  },
  {
    id: 13,
    character: "Маг-Колдун",
    cosplayer: "Дэвид Уильямс",
    imageUrl:
      "https://images.pexels.com/photos/8107183/pexels-photo-8107183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Фэнтези", "Магия", "Оригинал"],
  },
  {
    id: 14,
    character: "Постапокалиптический Выживший",
    cosplayer: "Рэйчел Мартинес",
    imageUrl:
      "https://images.pexels.com/photos/8107184/pexels-photo-8107184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Постапокалипсис", "Оригинал", "Потертый"],
  },
  {
    id: 15,
    character: "Assassin's Creed",
    cosplayer: "Натан Чен",
    imageUrl:
      "https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Видеоигры", "Assassin's Creed", "Детализированный"],
  },
  {
    id: 16,
    character: "Эльфийская Принцесса",
    cosplayer: "Лейла Браун",
    imageUrl:
      "https://images.pexels.com/photos/6209477/pexels-photo-6209477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Фэнтези", "Эльф", "Элегантный"],
  },
];

// Избранные статьи
export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "Гид для новичков по косплею: с чего начать",
    excerpt:
      "Думаете заняться косплеем, но не знаете, с чего начать? В этом полном руководстве вы найдете всё, что нужно для начала своего пути.",
    imageUrl:
      "https://images.pexels.com/photos/9582298/pexels-photo-9582298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Гиды для новичков",
    date: "15 июня 2025",
    readTime: 8,
    author: {
      name: "Эмма Чен",
      avatarUrl:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Эмма — профессиональный косплеер с опытом более 10 лет. Специализируется на создании брони и реквизита.",
    },
  },
  {
    id: 2,
    title: "EVA-пена 101: создание брони для косплея",
    excerpt:
      "Узнайте основы работы с EVA-пеной для создания легких и прочных элементов брони. От создания выкроек до техник покраски.",
    imageUrl:
      "https://images.pexels.com/photos/7234306/pexels-photo-7234306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Мастер-классы",
    date: "10 июня 2025",
    readTime: 12,
    author: {
      name: "Маркус Джонсон",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 3,
    title: "Преображения с помощью макияжа персонажей",
    excerpt:
      "Освойте искусство макияжа для косплея с пошаговыми уроками, рекомендациями по продуктам и профессиональными техниками.",
    imageUrl:
      "https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Макияж",
    date: "5 июня 2025",
    readTime: 10,
    author: {
      name: "Зои Патель",
      avatarUrl:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
];

// Все статьи
export const allArticles: Article[] = [
  ...featuredArticles,
  {
    id: 4,
    title: "Фотосъемка косплея: советы для идеальных кадров",
    excerpt:
      "Узнайте, как делать потрясающие фотографии косплея: советы по свету, позированию и обработке.",
    imageUrl:
      "https://images.pexels.com/photos/5417677/pexels-photo-5417677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Фотография",
    date: "28 мая 2025",
    readTime: 7,
    author: {
      name: "Лео Ким",
      avatarUrl:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 5,
    title: "Стайлинг париков для косплея: от простого к сложному",
    excerpt:
      "Всё о выборе, укладке и уходе за париками для косплея, включая техники создания сложных причесок.",
    imageUrl:
      "https://images.pexels.com/photos/7989211/pexels-photo-7989211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Мастер-классы",
    date: "20 мая 2025",
    readTime: 15,
    author: {
      name: "София Ли",
      avatarUrl:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 6,
    title: "Косплей с ограниченным бюджетом: как сделать крутой костюм дешевле",
    excerpt:
      "Узнайте, как создавать впечатляющие косплеи без больших затрат: бюджетные материалы и лайфхаки.",
    imageUrl:
      "https://images.pexels.com/photos/6942634/pexels-photo-6942634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Гиды для новичков",
    date: "15 мая 2025",
    readTime: 6,
    author: {
      name: "Тайлер Смит",
      avatarUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 7,
    title: "Создание легких реквизитных оружий",
    excerpt:
      "Узнайте, как делать безопасное и легкое оружие для косплея из пены, термопластика и с помощью 3D-печати.",
    imageUrl:
      "https://images.pexels.com/photos/5417682/pexels-photo-5417682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Мастер-классы",
    date: "10 мая 2025",
    readTime: 9,
    author: {
      name: "Крис Родригес",
      avatarUrl:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 8,
    title: "История и эволюция косплея",
    excerpt:
      "Познакомьтесь с историей косплея: от истоков до современности и его превращения в мировое явление.",
    imageUrl:
      "https://images.pexels.com/photos/8107203/pexels-photo-8107203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Культура",
    date: "5 мая 2025",
    readTime: 11,
    author: {
      name: "Эмма Чен",
      avatarUrl:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 9,
    title: "Этикет косплея: как вести себя на фестивалях и фотосессиях",
    excerpt:
      "Основные правила уважительного поведения на фестивалях, при общении с другими косплеерами и на фотосессиях.",
    imageUrl:
      "https://images.pexels.com/photos/9582299/pexels-photo-9582299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Сообщество",
    date: "28 апреля 2025",
    readTime: 5,
    author: {
      name: "Лео Ким",
      avatarUrl:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    id: 10,
    title: "Продвинутые техники шитья для косплея",
    excerpt:
      "Улучшите свои навыки пошива с помощью продвинутых техник для создания сложных костюмов.",
    imageUrl:
      "https://images.pexels.com/photos/4620769/pexels-photo-4620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Мастер-классы",
    date: "20 апреля 2025",
    readTime: 14,
    author: {
      name: "Оливия Блэк",
      avatarUrl:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
];

// Предстоящие события
export const upcomingEvents: Event[] = [
  {
    id: 1,
    name: "КосмикКон 2025",
    description:
      "Крупнейший фестиваль косплея и поп-культуры на восточном побережье США: конкурсы, панели, мастер-классы и знаменитости.",
    imageUrl:
      "https://images.pexels.com/photos/9582299/pexels-photo-9582299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-08-15",
    time: "10:00 - 20:00",
    location: "Boston Convention Center, Бостон",
    region: "Северная Америка",
    type: "Конвенция",
    url: "#",
  },
  {
    id: 2,
    name: "Аниме Экспо Токио",
    description:
      "Главное аниме- и косплей-мероприятие Японии: новинки аниме, конкурсы косплея и культурные выставки.",
    imageUrl:
      "https://images.pexels.com/photos/7234334/pexels-photo-7234334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-07-20",
    time: "9:00 - 18:00",
    location: "Tokyo Big Sight, Токио",
    region: "Азия",
    type: "Экспо",
    url: "#",
  },
  {
    id: 3,
    name: "Чемпионат Европы по косплею",
    description:
      "Самый престижный конкурс косплея Европы: национальные чемпионы соревнуются за главный титул.",
    imageUrl:
      "https://images.pexels.com/photos/7989682/pexels-photo-7989682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-09-10",
    time: "18:00 - 22:00",
    location: "Koelnmesse, Кёльн",
    region: "Европа",
    type: "Конкурс",
    url: "#",
  },
];

// Все события
export const allEvents: Event[] = [
  ...upcomingEvents,
  {
    id: 4,
    name: "Мастер-класс по созданию брони",
    description:
      "Научитесь делать легкую и прочную броню из EVA-пены под руководством профессиональных косплееров.",
    imageUrl:
      "https://images.pexels.com/photos/6942634/pexels-photo-6942634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-25",
    time: "13:00 - 17:00",
    location: "Makerspace Central, Чикаго",
    region: "Северная Америка",
    type: "Мастер-класс",
    url: "#",
  },
  {
    id: 5,
    name: "Фэнтези-косплей встреча",
    description:
      "Неформальная встреча для косплееров в стиле фэнтези: общение, фотосессии и обмен опытом в парке.",
    imageUrl:
      "https://images.pexels.com/photos/6209477/pexels-photo-6209477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-15",
    time: "11:00 - 15:00",
    location: "Ботанический сад, Мельбурн",
    region: "Австралия/Океания",
    type: "Встреча",
    url: "#",
  },
  {
    id: 6,
    name: "Comic Con International",
    description:
      "Всемирно известная конвенция поп-культуры: конкурсы косплея, знаменитости, панели и выставки.",
    imageUrl:
      "https://images.pexels.com/photos/7989211/pexels-photo-7989211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-07-25",
    time: "9:00 - 19:00",
    location: "San Diego Convention Center, Сан-Диего",
    region: "Северная Америка",
    type: "Конвенция",
    url: "#",
  },
  {
    id: 7,
    name: "Мастер-класс по фотосъемке косплея",
    description:
      "Профессиональные фотографы делятся секретами съемки косплея: свет, позы, обработка.",
    imageUrl:
      "https://images.pexels.com/photos/5417677/pexels-photo-5417677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-05-30",
    time: "14:00 - 18:00",
    location: "Фотостудия, Лондон",
    region: "Европа",
    type: "Мастер-класс",
    url: "#",
  },
  {
    id: 8,
    name: "Конкурс косплея по видеоиграм",
    description:
      "Конкурс только для косплея по видеоиграм: номинации за мастерство, точность и выступление.",
    imageUrl:
      "https://images.pexels.com/photos/7234333/pexels-photo-7234333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-12-10",
    time: "18:00 - 21:00",
    location: "GameHub Arena, Сеул",
    region: "Азия",
    type: "Конкурс",
    url: "#",
  },
  {
    id: 9,
    name: "Стимпанк-фестиваль косплея",
    description:
      "Погружение в атмосферу стимпанка: тематические активности, дуэли на чае и викторианские развлечения.",
    imageUrl:
      "https://images.pexels.com/photos/9741760/pexels-photo-9741760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-11-15",
    time: "12:00 - 20:00",
    location: "Исторический район фабрик, Берлин",
    region: "Европа",
    type: "Фестиваль",
    url: "#",
  },
  {
    id: 10,
    name: "Латиноамериканский саммит косплея",
    description:
      "Косплееры со всей Латинской Америки: конкурсы, культурный обмен и индустриальные панели.",
    imageUrl:
      "https://images.pexels.com/photos/7989661/pexels-photo-7989661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-10-05",
    time: "10:00 - 18:00",
    location: "Выставочный центр, Мехико",
    region: "Латинская Америка",
    type: "Конвенция",
    url: "#",
  },
];
