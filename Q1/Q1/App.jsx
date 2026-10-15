
import { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

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
