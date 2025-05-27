import carritoImg from "/src/assets/carrito.webp";

function CartWidget() {
  return (
    <>
      <a className="navbar-brand" href="#">
        <img src={carritoImg} style={{ width: 30, height: 30 }} />
        <span> 4 </span>
      </a>
    </>
  );
}

export default CartWidget;
