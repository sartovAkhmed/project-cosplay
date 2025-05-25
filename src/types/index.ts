// Cosplay type
export interface Cosplay {
  id: number;
  character: string;
  cosplayer: string;
  imageUrl: string;
  tags: string[];
}

// Article type
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category?: string;
  date: string;
  readTime: number;
  author: {
    name: string;
    avatarUrl: string;
    bio?: string;
  };
}

// Event type
export interface Event {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
  region: string;
  type: string;
  url: string;
}