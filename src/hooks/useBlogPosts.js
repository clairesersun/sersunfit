import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../content/blogPosts';

/**
 * Module-level cache so every component shares the same result
 * and we only hit Supabase once per page load.
 */
let cachedPosts = null;
let fetchPromise = null;

const loadPosts = () => {
  if (cachedPosts !== null) return Promise.resolve(cachedPosts);
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetchBlogPosts().then((posts) => {
    cachedPosts = posts;
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
    if (cachedPosts !== null) {
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
