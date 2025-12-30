import { articles } from '../data/articles';

export function UseArticle(articleKey) {
  const article = articles[articleKey];
  
  return {
    article,
    exists: !!article
  };
}