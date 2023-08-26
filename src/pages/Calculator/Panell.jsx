import React from 'react';
import { StyledPanell } from './PanellStyled';

function QuantitySelector({ value, onChange }) {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={value} onChange={(e) => onChange(parseInt(e.target.value))} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

function Panell({ numPages, numLanguages, handleNumPagesChange, handleNumLanguagesChange }) {
  return (
    <StyledPanell>
      <h2>Configuració de la Pàgina Web</h2>
      <div>
        <label>
          Nombre de pàgines:
          <QuantitySelector value={numPages} onChange={handleNumPagesChange} />
        </label>
      </div>
      <div>
        <label>
          Nombre d'idiomes:
          <QuantitySelector value={numLanguages} onChange={handleNumLanguagesChange} />
        </label>
      </div>
    </StyledPanell>
  );
}

export default Panell;

