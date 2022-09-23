import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NumberFilter() {
  const { filterByNumericValues, setfilterByNumericValues } = useContext(PlanetsContext);

  const filterPlanetsByNumericValues = ({ target }) => {
    setfilterByNumericValues((prevState) => ({
      ...prevState,
      [target.id]: target.value,
    }));
  };

  return (
    <>
      <select
        id="column"
        data-testid="column-filter"
        value={ filterByNumericValues.column }
        onChange={ filterPlanetsByNumericValues }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        id="comparison"
        data-testid="comparison-filter"
        value={ filterByNumericValues.comparison }
        onChange={ filterPlanetsByNumericValues }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a </option>
      </select>

      <label htmlFor="value-filter">
        <input
          id="value"
          data-testid="value-filter"
          value={ filterByNumericValues.value }
          onChange={ filterPlanetsByNumericValues }
        />
      </label>

      <button type="button" data-testid="button-filter">Filtrar</button>
    </>
  );
}

export default NumberFilter;
