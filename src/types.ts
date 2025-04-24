export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  category: string;
  postedAt: string;
  deadline: string;
  logo?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  website: string;
  jobCount: number;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  speaker: string;
  speakerTitle: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registeredCount: number;
  image?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'student' | 'employer' | 'admin';
  avatar?: string;
  resumeUrl?: string;
}