
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

export default ItemList;
