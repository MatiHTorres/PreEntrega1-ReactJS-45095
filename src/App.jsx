import NavBar from "./components/NavBar"
import Portada from "./components/Portada"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Portada/>
      <ItemListContainer greeting={"Nuestro catalogo estara disponible pronto !"} />
      <Footer/>
    </div>
  )
}

export default App;
