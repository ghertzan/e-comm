function ItemCard({ producto }) {
  return (
    <div
      key={producto.id}
      className="border flex flex-col justify-around gap-3 p-1"
    >
      <img
        src="./src/assets/foto.avif"
        alt={producto.nombre}
        className="rounded"
      />
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <p>{producto.categoria}</p>
      <button className="bg-blue-400 cursor-pointer rounded">Ver</button>
    </div>
  );
}

export default ItemCard;
