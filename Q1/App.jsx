
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

function ItemList({ items, onDeleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}{" "}
          <button onClick={() => onDeleteItem(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState(["Book", "Pen"]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h1>Item Management</h1>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App;
