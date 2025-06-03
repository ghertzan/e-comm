import ItemCard from "./ItemCard";

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {items.map((producto) => (
        <ItemCard producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
