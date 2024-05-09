export interface ImageType {
  imageUrl: string;
  previewUrl: string;
  alt: string;
}

export interface ArticleCardType {
  imageUrl: string;
  title: string;
  description: string;
}

export interface ArticleListType {
  header: string;
  articles: ArticleCardType[];
}

export interface ArticleContent {
  title: string;
  description: string;
}

export interface LandingArticleType {
  images: ImageType[];
  primary: ArticleContent;
  secondary: ArticleContent;
}
