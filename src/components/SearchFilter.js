import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function SearchFilter() {
  const { filter, setFilterByName } = useContext(PlanetsContext);

  const filterPlanets = (value) => {
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
        onChange={ (e) => filterPlanets(e.target.value) }
      />
    </label>
  );
}

export default SearchFilter;
