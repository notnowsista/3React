import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const { nombre, correo, edad, cargo, telefono } = nuevoColaborador;

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador({ ...nuevoColaborador, id: Date.now().toString() });
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          className="form-control"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="correo"
          value={correo}
          onChange={handleChange}
          className="form-control"
          placeholder="Correo"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="edad"
          value={edad}
          onChange={handleChange}
          className="form-control"
          placeholder="Edad"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="cargo"
          value={cargo}
          onChange={handleChange}
          className="form-control"
          placeholder="Cargo"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="tel"
          name="telefono"
          value={telefono}
          onChange={handleChange}
          className="form-control"
          placeholder="Teléfono"
          required
        />
      </div>
      <div className="mb-3 text-center">
        <button type="submit" className="btn btn-dark w-100"><strong>Agregar</strong></button>
      </div>
    </form>
  );
};

export default Formulario;
