export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
  linkUrl: string;
  badge?: string;
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
  accentColor: string;
}
