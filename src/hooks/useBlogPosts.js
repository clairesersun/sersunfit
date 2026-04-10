import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../content/blogPosts';

/**
 * Module-level cache so every component shares the same result
 * and we only hit Supabase once per session (refreshes daily).
 */
let cachedPosts = null;
let cachedAt = 0;
let fetchPromise = null;

const ONE_DAY = 24 * 60 * 60 * 1000;

const loadPosts = () => {
  if (cachedPosts !== null && Date.now() - cachedAt < ONE_DAY) {
    return Promise.resolve(cachedPosts);
  }
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetchBlogPosts().then((posts) => {
    cachedPosts = posts;
    cachedAt = Date.now();
    fetchPromise = null;
    return posts;
  });

  return fetchPromise;
};

/**
 * Shared hook — returns { posts, loading, hasPosts }.
 * Uses a module-level cache so Supabase is only queried once.
 */
export default function useBlogPosts() {
  const [posts, setPosts] = useState(cachedPosts || []);
  const [loading, setLoading] = useState(cachedPosts === null);

  useEffect(() => {
    const isFresh = cachedPosts !== null && Date.now() - cachedAt < ONE_DAY;
    if (isFresh) {
      setPosts(cachedPosts);
      setLoading(false);
      return;
    }

    loadPosts().then((result) => {
      setPosts(result);
      setLoading(false);
    });
  }, []);

  return { posts, loading, hasPosts: posts.length > 0 };
}
