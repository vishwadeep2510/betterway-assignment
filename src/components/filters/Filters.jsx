function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories
}) {
  return (
    <div className="filters">
      <input
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">None</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button onClick={() => {
        setSearch("");
        setCategory("");
        setSort("");
      }}>
        Clear
      </button>
    </div>
  );
}

export default Filters;
