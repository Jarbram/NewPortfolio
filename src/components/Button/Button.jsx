import React from 'react';
import './Button.css';

// Actualizar el componente Button para incluir las propiedades `selected` y `visible`
const Button = ({ label, url, onClick, selected, visible }) => {
  const classes = `button ${selected ? 'selected' : ''}`;

  // Establecer la propiedad `display` en función de la propiedad `visible`
  const style = { display: visible ? 'block' : 'none'};

  return (
    <div className='button-container'>
    <a
    href={url} onClick={onClick} className={classes} style={style} id='button'> 
      {label}
    </a>
    </div>
  );
};

export default Button;