import { articles } from '../data/articles';

export function UseBiography(bioKey) {
  const biography = articles[bioKey];
  
  return {
    biography,
    exists: !!biography
  };
}