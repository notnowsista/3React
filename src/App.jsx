import React, { useState } from 'react';
import { BaseColaboradores } from './js/BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');
  const [mensajeAlerta, setMensajeAlerta] = useState(null);
  const [tipoAlerta, setTipoAlerta] = useState('success');

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre.trim() === '' ||
      nuevoColaborador.correo.trim() === '' ||
      nuevoColaborador.edad.trim() === '' ||
      nuevoColaborador.cargo.trim() === '' ||
      nuevoColaborador.telefono.trim() === ''
    ) {
      mostrarAlerta('Todos los campos son obligatorios', 'danger');
      return;
    }
    setColaboradores([...colaboradores, nuevoColaborador]);
    mostrarAlerta('Colaborador agregado correctamente', 'success');
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };
  const mostrarAlerta = (mensaje, tipo) => {
    setMensajeAlerta(mensaje);
    setTipoAlerta(tipo);
    setTimeout(() => {
      setMensajeAlerta(null);
    }, 3000);
  };

  const filtrarColaboradores = () => {
    return colaboradores.filter((colaborador) =>
      Object.values(colaborador).some((valor) =>
        valor.toString().toLowerCase().includes(busqueda.toLowerCase())
      )
    );
  };

  return (
    <div className="container mt-6 text-center ">
      <h1 className="text-center">Nuestros Colaboradores</h1>
      <div className="row mt-4">
        <div className="col-md-4 mx-auto">
          <Formulario agregarColaborador={agregarColaborador} />
          {mensajeAlerta && <Alert mensaje={mensajeAlerta} tipo={tipoAlerta} />}
        </div>
        <hr />
        <div className="col-md-6 mx-auto">
          <h2 className="text-center">Lista de colaboradores</h2>
          <Buscador setBusqueda={setBusqueda} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 mx-auto">
          <Listado colaboradores={filtrarColaboradores()} eliminarColaborador={eliminarColaborador} />
        </div>
      </div>
    </div>
  );
};

export default App;