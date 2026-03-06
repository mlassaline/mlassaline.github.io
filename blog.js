/**
 * Loads the posts index and returns posts sorted newest first.
 * Each post in posts.json should have: slug, title, date, summary
 */
async function loadPosts() {
  try {
    const res = await fetch('posts/posts.json');
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch {
    return [];
  }
}
