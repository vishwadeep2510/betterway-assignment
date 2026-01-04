export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();
  return data.products;
}
