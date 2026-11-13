export async function getCategories() {
  const res = await fetch("http://localhost:3000/api/news/categories");
  const data = await res.json();
  return data.data;
}

export async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `http://localhost:3000/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}

export async function getNewsDetailsById(news_id) {
  const res = await fetch(`http://localhost:3000/api/news/${news_id}`);
  const data = await res.json();
  return data.data[0];
}
