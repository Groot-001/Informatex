export type PageId = 'home' | 'services' | 'gallery' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: {
    overview: string;
    keyFeatures: string[];
    deliverables: string[];
    technologies: string[];
  };
  iconName: string;
  category: 'Development' | 'Marketing' | 'Content' | 'Analytics' | 'Design';
  featured?: boolean;
}

export interface GalleryEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  category: 'Project Launch' | 'Team Summit' | 'Innovation Lab' | 'Client Workshop' | 'Industry Conference';
  coverImage: string;
  photos: {
    id: string;
    url: string;
    caption?: string;
    width: number;
    height: number;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { x: number; y: number }; // Percentage for interactive map pin
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
  bio?: string;
  socials?: { linkedin?: string; twitter?: string };
}

export interface QuickContact {
  id: string;
  name: string;
  role: string;
  desk: string;
  avatar: string;
  email: string;
  phone: string;
  availability: string;
  responseTime: string;
  specialties: string[];
}