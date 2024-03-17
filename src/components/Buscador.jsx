import React from 'react';

const Buscador = ({ setBusqueda }) => {
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      style={{ textAlign: 'center' }}
      placeholder="Buscar colaborador"
      onChange={handleChange}
    />
  );
};

export default Buscador;
