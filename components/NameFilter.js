import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NameFilter() {
  const { filter, setFilterByName } = useContext(PlanetsContext);

  const filterPlanetsByName = (value) => {
    setFilterByName({ name: value });
  };

  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm justify-center items-center">
        <label htmlFor='search-filter' className='mr-2 '>
          Planeta
        </label>
        <input
          type="text"
          data-testid="name-filter"
          id="search-filter"
          value={ filter }
          onChange={ (e) => filterPlanetsByName(e.target.value) }
          placeholder="  Tatooine"
          className="rounded bg-gray-300 py-2 placeholder:italic placeholder"
        />
      </div>
    </div> 
  );
}

export default NameFilter;
