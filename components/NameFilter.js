import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NameFilter() {
  const { filter, setFilterByName } = useContext(PlanetsContext);

  const filterPlanetsByName = (value) => {
    setFilterByName({ name: value });
  };

  return (
    <label htmlFor="search-filter">
      Filtro
      <input
        type="text"
        data-testid="name-filter"
        id="search-filter"
        value={ filter }
        onChange={ (e) => filterPlanetsByName(e.target.value) }
      />
    </label>
  );
}

export default NameFilter;
