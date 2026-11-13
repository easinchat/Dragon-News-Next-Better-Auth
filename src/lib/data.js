// const BASE_URL = process.env.BETTER_AUTH_URL || "http://localhost:3000";

// export async function getCategories() {
//   const res = await fetch(`${BASE_URL}/api/news/categories`);
//   const data = await res.json();
//   return data.data;
// }

// export async function getNewsByCategoryId(category_id) {
//   const res = await fetch(`${BASE_URL}/api/news/category/${category_id}`);
//   const data = await res.json();
//   return data.data;
// }

// export async function getNewsDetailsById(news_id) {
//   const res = await fetch(`${BASE_URL}/api/news/${news_id}`);
//   const data = await res.json();
//   return data.data[0];
// }

const API = "https://openapi.programming-hero.com/api/news";

// lib/data.js
export async function getCategories() {
  const res = await fetch(`${API}/categories`);
  const json = await res.json();
  return json?.data?.news_category ?? [];
}
export async function getNewsByCategoryId(category_id) {
  const res = await fetch(`${API}/category/${category_id}`);
  const json = await res.json();
  return json?.data ?? [];
}

export async function getNewsDetailsById(news_id) {
  const res = await fetch(`${API}/${news_id}`);
  const json = await res.json();
  return json.data[0];
}
