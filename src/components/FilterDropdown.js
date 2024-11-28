function FilterDropdown({ onChange }) {
  return (
    <div className="p-4">
      <select
        className="border rounded-md p-2 bg-white shadow-sm"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="order">Siparişe Göre</option>
        <option value="product">Ürüne Göre</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
