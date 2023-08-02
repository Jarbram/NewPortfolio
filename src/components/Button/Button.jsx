import React from 'react';
import './Button.css';

// Actualizar el componente Button para incluir las propiedades `selected` y `visible`
const Button = ({ label, url, onClick, }) => {

  return (
    <div className='buttons'>
    <a
    href={url} onClick={onClick}  id='button'> 
      {label}
    </a>
    </div>
  );
};

export default Button;