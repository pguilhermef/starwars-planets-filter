import React from 'react';

function NumberFilter() {
  return (
    <>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a </option>
      </select>

      <label htmlFor="value-filter">
        <input id="value-filter" data-testid="value-filter" />
      </label>

      <button type="button" data-testid="button-filter">Filtrar</button>
    </>
  );
}

export default NumberFilter;
