export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  iconName: string; // Used to identify which Lucide icon to render
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl?: string;
  serviceTag?: string;
  verified?: boolean;
  helpfulCount?: number;
}

export interface CitationLink {
  label: string;
  url: string;
}

export interface BusinessDetails {
  brandName: string;
  ratingAverage: number;
  ratingCount: number;
  location: string;
  servingAreas: string[];
  phone: string;
  phoneFormatted: string;
  values: {
    quote: string;
    highlights: string[];
  };
  hours: string;
  experienceYears?: number;
  mapUrl?: string;
  googleReviewsUrl?: string;
  citations?: CitationLink[];
}
