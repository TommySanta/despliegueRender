import React from 'react';

const Info = () => {
  return (
    <div className="container mt-5">
      <h2>Información del Curso</h2>
      <p>Código del Curso: XYZ123</p>
      <p>Nombre del Curso: Curso de React</p>
      <p>Créditos: 3</p>
      <a href="#" download>
        Descargar PDF del Curso
      </a>
    </div>
  );
};

export default Info;