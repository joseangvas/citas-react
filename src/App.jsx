import {useState} from 'react';
import Estilos from "./components/Estilos";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}  // Asignar Props
          setPacientes = {setPacientes}  // Asignar Props
          paciente = {paciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
        />

      </div>

    </div>
  )
}

export default App