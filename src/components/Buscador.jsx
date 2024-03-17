import React from 'react';

const Buscador = ({ setBusqueda }) => {
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
        <div className="mb-6 mx-auto col-md-6">
        <input
            type="text"
            className="form-control"
            style={{ textAlign: 'center' }}
            placeholder="Buscar colaborador"
            onChange={handleChange}
        />
        </div>
  );
};

export default Buscador;
