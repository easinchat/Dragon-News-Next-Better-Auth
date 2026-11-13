const BASE_URL = process.env.BETTER_AUTH_URL || "http://localhost:3000";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/news/categories`);
  const data = await res.json();
  return data.data;
}

export async function getNewsByCategoryId(category_id) {
  const res = await fetch(`${BASE_URL}/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

export async function getNewsDetailsById(news_id) {
  const res = await fetch(`${BASE_URL}/news/${news_id}`);
  const data = await res.json();
  return data.data[0];
}
