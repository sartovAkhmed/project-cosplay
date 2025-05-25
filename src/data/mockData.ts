import { Cosplay, Article, Event } from '../types';

// Featured Cosplays
export const featuredCosplays: Cosplay[] = [
  {
    id: 1,
    character: "Demon Slayer - Nezuko",
    cosplayer: "Emma Chen",
    imageUrl: "https://images.pexels.com/photos/9580167/pexels-photo-9580167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Anime", "Demon Slayer", "Featured"]
  },
  {
    id: 2,
    character: "Cyberpunk Samurai",
    cosplayer: "Alex Rivera",
    imageUrl: "https://images.pexels.com/photos/7234335/pexels-photo-7234335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Original", "Cyberpunk", "Armor"]
  },
  {
    id: 3,
    character: "Steampunk Explorer",
    cosplayer: "Jamie Wong",
    imageUrl: "https://images.pexels.com/photos/9741760/pexels-photo-9741760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Steampunk", "Original", "Accessories"]
  },
  {
    id: 4,
    character: "Witch Sorceress",
    cosplayer: "Olivia Black",
    imageUrl: "https://images.pexels.com/photos/5417683/pexels-photo-5417683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Fantasy", "Magic", "Original"]
  },
  {
    id: 5,
    character: "Sci-Fi Warrior",
    cosplayer: "Marcus Johnson",
    imageUrl: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Sci-Fi", "Armor", "Original"]
  },
  {
    id: 6,
    character: "Fairy Guardian",
    cosplayer: "Lily Chen",
    imageUrl: "https://images.pexels.com/photos/5383501/pexels-photo-5383501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Fantasy", "Wings", "Original"]
  }
];

// All Cosplays (including featured)
export const allCosplays: Cosplay[] = [
  ...featuredCosplays,
  {
    id: 7,
    character: "Genshin Impact - Jean",
    cosplayer: "Sophia Lee",
    imageUrl: "https://images.pexels.com/photos/5792901/pexels-photo-5792901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Video Games", "Genshin Impact", "Detailed"]
  },
  {
    id: 8,
    character: "Elf Ranger",
    cosplayer: "Tyler Smith",
    imageUrl: "https://images.pexels.com/photos/7989736/pexels-photo-7989736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Fantasy", "Elf", "Armor"]
  },
  {
    id: 9,
    character: "Futuristic Soldier",
    cosplayer: "Chris Rodriguez",
    imageUrl: "https://images.pexels.com/photos/6048271/pexels-photo-6048271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Sci-Fi", "Original", "Armor"]
  },
  {
    id: 10,
    character: "Pirate Captain",
    cosplayer: "Zoe Patel",
    imageUrl: "https://images.pexels.com/photos/6942521/pexels-photo-6942521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Historical", "Pirate", "Detailed"]
  },
  {
    id: 11,
    character: "Final Fantasy - Tifa",
    cosplayer: "Morgan Yu",
    imageUrl: "https://images.pexels.com/photos/7234323/pexels-photo-7234323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Video Games", "Final Fantasy", "Popular"]
  },
  {
    id: 12,
    character: "Viking Warrior",
    cosplayer: "Erik Johnson",
    imageUrl: "https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Historical", "Viking", "Armor"]
  },
  {
    id: 13,
    character: "Magic Sorcerer",
    cosplayer: "David Williams",
    imageUrl: "https://images.pexels.com/photos/8107183/pexels-photo-8107183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Fantasy", "Magic", "Original"]
  },
  {
    id: 14,
    character: "Post-Apocalyptic Survivor",
    cosplayer: "Rachel Martinez",
    imageUrl: "https://images.pexels.com/photos/8107184/pexels-photo-8107184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Post-Apocalyptic", "Original", "Weathered"]
  },
  {
    id: 15,
    character: "Assassin's Creed",
    cosplayer: "Nathan Chen",
    imageUrl: "https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Video Games", "Assassin's Creed", "Detailed"]
  },
  {
    id: 16,
    character: "Elven Princess",
    cosplayer: "Leila Brown",
    imageUrl: "https://images.pexels.com/photos/6209477/pexels-photo-6209477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Fantasy", "Elf", "Elegant"]
  }
];

// Featured Articles
export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "The Beginner's Guide to Cosplay: Where to Start",
    excerpt: "Thinking about getting into cosplay but don't know where to begin? This comprehensive guide covers everything you need to know to start your cosplay journey.",
    imageUrl: "https://images.pexels.com/photos/9582298/pexels-photo-9582298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beginner Guides",
    date: "June 15, 2025",
    readTime: 8,
    author: {
      name: "Emma Chen",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emma is a professional cosplayer with over 10 years of experience. She specializes in armor crafting and prop design."
    }
  },
  {
    id: 2,
    title: "EVA Foam 101: Creating Armor for Cosplay",
    excerpt: "Learn the basics of working with EVA foam to create lightweight, durable armor pieces for your cosplay projects. From pattern-making to painting techniques.",
    imageUrl: "https://images.pexels.com/photos/7234306/pexels-photo-7234306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Crafting Tutorials",
    date: "June 10, 2025",
    readTime: 12,
    author: {
      name: "Marcus Johnson",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 3,
    title: "Character Makeup Transformations",
    excerpt: "Master the art of character makeup with these step-by-step tutorials, product recommendations, and professional techniques for stunning transformations.",
    imageUrl: "https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Makeup Tutorials",
    date: "June 5, 2025",
    readTime: 10,
    author: {
      name: "Zoe Patel",
      avatarUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

// All Articles
export const allArticles: Article[] = [
  ...featuredArticles,
  {
    id: 4,
    title: "Cosplay Photography: Tips for Perfect Shots",
    excerpt: "Learn how to capture stunning photos of your cosplay with these expert photography tips, including lighting, poses, and post-processing techniques.",
    imageUrl: "https://images.pexels.com/photos/5417677/pexels-photo-5417677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Photography",
    date: "May 28, 2025",
    readTime: 7,
    author: {
      name: "Leo Kim",
      avatarUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 5,
    title: "Wig Styling for Cosplay: From Basic to Advanced",
    excerpt: "Everything you need to know about selecting, styling, and maintaining wigs for cosplay, with techniques for creating elaborate hairstyles.",
    imageUrl: "https://images.pexels.com/photos/7989211/pexels-photo-7989211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Crafting Tutorials",
    date: "May 20, 2025",
    readTime: 15,
    author: {
      name: "Sophia Lee",
      avatarUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 6,
    title: "Cosplay on a Budget: Creating Amazing Costumes for Less",
    excerpt: "Discover how to create impressive cosplays without breaking the bank, with budget-friendly material alternatives and money-saving techniques.",
    imageUrl: "https://images.pexels.com/photos/6942634/pexels-photo-6942634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beginner Guides",
    date: "May 15, 2025",
    readTime: 6,
    author: {
      name: "Tyler Smith",
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 7,
    title: "Creating Lightweight Prop Weapons",
    excerpt: "Learn how to create convention-safe, lightweight prop weapons using foam, thermoplastics, and 3D printing techniques for your cosplay.",
    imageUrl: "https://images.pexels.com/photos/5417682/pexels-photo-5417682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Crafting Tutorials",
    date: "May 10, 2025",
    readTime: 9,
    author: {
      name: "Chris Rodriguez",
      avatarUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 8,
    title: "The History and Evolution of Cosplay",
    excerpt: "Explore the fascinating history of cosplay from its origins to the present day, and how it has evolved into a global cultural phenomenon.",
    imageUrl: "https://images.pexels.com/photos/8107203/pexels-photo-8107203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Cultural Insights",
    date: "May 5, 2025",
    readTime: 11,
    author: {
      name: "Emma Chen",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 9,
    title: "Cosplay Etiquette: Navigating Conventions and Photoshoots",
    excerpt: "Essential guidelines for respectful behavior at conventions, interacting with other cosplayers, and participating in photoshoots.",
    imageUrl: "https://images.pexels.com/photos/9582299/pexels-photo-9582299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Community",
    date: "April 28, 2025",
    readTime: 5,
    author: {
      name: "Leo Kim",
      avatarUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 10,
    title: "Advanced Sewing Techniques for Cosplay",
    excerpt: "Take your costume-making skills to the next level with these advanced sewing techniques specifically tailored for complex cosplay garments.",
    imageUrl: "https://images.pexels.com/photos/4620769/pexels-photo-4620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Crafting Tutorials",
    date: "April 20, 2025",
    readTime: 14,
    author: {
      name: "Olivia Black",
      avatarUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

// Upcoming Events
export const upcomingEvents: Event[] = [
  {
    id: 1,
    name: "CosmicCon 2025",
    description: "The largest cosplay and pop culture convention on the East Coast, featuring competitions, panels, workshops, and celebrity guests.",
    imageUrl: "https://images.pexels.com/photos/9582299/pexels-photo-9582299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-08-15",
    time: "10:00 AM - 8:00 PM",
    location: "Boston Convention Center, Boston",
    region: "North America",
    type: "Convention",
    url: "#"
  },
  {
    id: 2,
    name: "Anime Expo Tokyo",
    description: "Japan's premier anime and cosplay event, showcasing the latest anime releases, featuring cosplay competitions and cultural exhibits.",
    imageUrl: "https://images.pexels.com/photos/7234334/pexels-photo-7234334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-07-20",
    time: "9:00 AM - 6:00 PM",
    location: "Tokyo Big Sight, Tokyo",
    region: "Asia",
    type: "Expo",
    url: "#"
  },
  {
    id: 3,
    name: "European Cosplay Championship",
    description: "Europe's most prestigious cosplay competition, bringing together national champions from across the continent to compete for the title.",
    imageUrl: "https://images.pexels.com/photos/7989682/pexels-photo-7989682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-09-10",
    time: "6:00 PM - 10:00 PM",
    location: "Koelnmesse, Cologne",
    region: "Europe",
    type: "Competition",
    url: "#"
  }
];

// All Events
export const allEvents: Event[] = [
  ...upcomingEvents,
  {
    id: 4,
    name: "Armor Crafting Workshop",
    description: "Learn how to create lightweight, durable armor pieces using EVA foam, led by professional cosplay artists.",
    imageUrl: "https://images.pexels.com/photos/6942634/pexels-photo-6942634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-25",
    time: "1:00 PM - 5:00 PM",
    location: "Makerspace Central, Chicago",
    region: "North America",
    type: "Workshop",
    url: "#"
  },
  {
    id: 5,
    name: "Fantasy Cosplay Meetup",
    description: "Casual gathering for fantasy-themed cosplayers to network, take photos, and share techniques in a beautiful park setting.",
    imageUrl: "https://images.pexels.com/photos/6209477/pexels-photo-6209477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-15",
    time: "11:00 AM - 3:00 PM",
    location: "Botanical Gardens, Melbourne",
    region: "Australia/Oceania",
    type: "Meetup",
    url: "#"
  },
  {
    id: 6,
    name: "Comic Con International",
    description: "World-famous pop culture convention featuring cosplay contests, celebrity guests, exclusive panels, and exhibitor hall.",
    imageUrl: "https://images.pexels.com/photos/7989211/pexels-photo-7989211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-07-25",
    time: "9:00 AM - 7:00 PM",
    location: "San Diego Convention Center, San Diego",
    region: "North America",
    type: "Convention",
    url: "#"
  },
  {
    id: 7,
    name: "Cosplay Photography Workshop",
    description: "Professional photographers share techniques for capturing stunning cosplay photos, including lighting, posing, and editing.",
    imageUrl: "https://images.pexels.com/photos/5417677/pexels-photo-5417677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-05-30",
    time: "2:00 PM - 6:00 PM",
    location: "Photography Studio, London",
    region: "Europe",
    type: "Workshop",
    url: "#"
  },
  {
    id: 8,
    name: "Video Game Cosplay Contest",
    description: "Competition exclusively for video game character cosplays, with categories for craftsmanship, accuracy, and performance.",
    imageUrl: "https://images.pexels.com/photos/7234333/pexels-photo-7234333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-12-10",
    time: "6:00 PM - 9:00 PM",
    location: "GameHub Arena, Seoul",
    region: "Asia",
    type: "Competition",
    url: "#"
  },
  {
    id: 9,
    name: "Steampunk Cosplay Festival",
    description: "Immersive festival celebrating steampunk cosplay, featuring themed activities, tea dueling, and Victorian-inspired entertainment.",
    imageUrl: "https://images.pexels.com/photos/9741760/pexels-photo-9741760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-11-15",
    time: "12:00 PM - 8:00 PM",
    location: "Historic Factory District, Berlin",
    region: "Europe",
    type: "Festival",
    url: "#"
  },
  {
    id: 10,
    name: "Latin American Cosplay Summit",
    description: "Bringing together cosplayers from across Latin America for competitions, cultural exchange, and industry panels.",
    imageUrl: "https://images.pexels.com/photos/7989661/pexels-photo-7989661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-10-05",
    time: "10:00 AM - 6:00 PM",
    location: "Exhibition Center, Mexico City",
    region: "Latin America",
    type: "Convention",
    url: "#"
  }
];