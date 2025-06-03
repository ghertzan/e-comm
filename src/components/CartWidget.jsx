import carritoImg from "/src/assets/carrito.webp";

function CartWidget() {
  return (
    <>
      <div className="flex flex-row">
        <a href="#">
          <img src={carritoImg} style={{ width: 30, height: 30 }} />
        </a>
        <p> 4 </p>
      </div>
    </>
  );
}

export default CartWidget;
