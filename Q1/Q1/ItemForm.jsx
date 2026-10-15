
import { useState } from "react";

function ItemForm({ onAddItem }) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.trim() !== "") {
      onAddItem(item.trim());
      setItem("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter an item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
