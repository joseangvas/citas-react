import Estilos from "./components/Estilos";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {


  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Formulario />
      <ListadoPacientes />
      <Estilos />

    </div>
  )
}

export default App