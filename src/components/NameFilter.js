import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NameFilter() {
  const { filter, setFilterByName } = useContext(PlanetsContext);

  const filterPlanetsByName = (value) => {
    setFilterByName({ name: value });
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-3xl md:w-3/4 xl:w-2/4">
        <label
          htmlFor="search-filter"
          className="flex flex-col justify-center
        items-center p-5 md:flex-between w-full"
        >
          <div
            className="text-white text-3xl font-semibold
          shadow-lg my-2 md:mr-2 glassmorphism-black p-2"
          >
            Filtre pelo nome:
          </div>
          <input
            type="text"
            data-testid="name-filter"
            id="search-filter"
            className="p-2 rounded-lg bg-slate-100 w-full"
            value={ filter }
            onChange={ (e) => filterPlanetsByName(e.target.value) }
          />
        </label>
      </div>
    </div>
  );
}

export default NameFilter;
