import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const descripcion =
    "En Ton Mobles, creemos que cada mueble cuenta una historia. Somos una mueblería artesanal dedicada a crear piezas únicas que combinan tradición, creatividad y funcionalidad. Nuestros muebles son elaborados a mano por talentosos artesanos locales, quienes trabajan con maderas nobles y materiales sostenibles, cuidando cada detalle para que cada pieza tenga carácter, belleza y durabilidad. En nuestra colección encontrarás mesas rústicas, sillas talladas, cómodas, estanterías y piezas personalizadas que se adaptan a cualquier espacio, siempre con un toque especial que refleja el amor por la naturaleza y el respeto por los procesos artesanales. Además, ofrecemos la posibilidad de crear muebles a medida, diseñados según tus necesidades y preferencias. En Ton Mobles, no solo vendemos muebles, creamos espacios con alma";

  return (
    <>
      <Navbar />
      <ItemListContainer contenido={descripcion} />
    </>
  );
}

export default App;
