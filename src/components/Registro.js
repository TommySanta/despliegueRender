import React, { useState } from 'react';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [registroCompleto, setRegistroCompleto] = useState(false);

  const handleSubmit = () => {
    // Guardar datos en localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('telefono', telefono);
    // Actualizar estado para mostrar mensaje de registro completado
    setRegistroCompleto(true);
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono:
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
      {registroCompleto && <p>Registro completado. ¡Gracias por registrarte!</p>}
    </div>
  );
};

export default Registro;