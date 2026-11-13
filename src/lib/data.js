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

const BASE_URL = process.env.BETTER_AUTH_URL || "http://localhost:3000";

async function safeFetch(path) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, { cache: "no-store" });
  const text = await res.text();

  if (!res.ok || text.trim().startsWith("<")) {
    console.error(
      "FETCH FAILED:",
      url,
      "STATUS:",
      res.status,
      "BODY:",
      text.slice(0, 300),
    );
    throw new Error(`Bad response from ${url} (status ${res.status})`);
  }
  return JSON.parse(text);
}

export async function getCategories() {
  const data = await safeFetch("/api/news/categories");
  return data.data;
}

export async function getNewsByCategoryId(category_id) {
  const data = await safeFetch(`/api/news/category/${category_id}`);
  return data.data;
}

export async function getNewsDetailsById(news_id) {
  const data = await safeFetch(`/api/news/${news_id}`);
  return data.data[0];
}
