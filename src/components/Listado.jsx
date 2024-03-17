import Table from "react-bootstrap/Table";
import React from "react";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <div className='container mt-3'>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.email}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarColaborador(colaborador.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default Listado;
