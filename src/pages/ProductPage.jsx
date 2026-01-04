import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import Filters from "../components/filters/Filters";
import ProductGrid from "../components/products/ProductGrid";
import EmptyProducts from "../components/products/EmptyProducts";
import { useDebounce } from "../hooks/useDebounce";

function ProductPage() {
  const products = useSelector(state => state.products.items);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const debouncedSearch = useDebounce(search);

  const filteredProducts = useMemo(() => {
    let list = products;

    if (debouncedSearch) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (category) {
      list = list.filter(p => p.category === category);
    }

    if (sort === "low") {
      list = [...list].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, debouncedSearch, category, sort]);

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={[...new Set(products.map(p => p.category))]}
      />

      {filteredProducts.length === 0 ? (
        <EmptyProducts />
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </>
  );
}

export default ProductPage;
