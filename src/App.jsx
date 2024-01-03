import { useState, useEffect } from "react";
import Estilos from "./components/Estilos";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Obtener lo que haya en localStorage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = localStorage.getItem('pacientes');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes} // Asignar Props
          setPacientes={setPacientes} // Asignar Props
          paciente={paciente}
          setPaciente={setPaciente} // Asignar Props
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
