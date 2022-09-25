import React, { useState, useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NumberFilter() {
  const {
    filterByNumericValues,
    setfilterByNumericValues,
    filterButton,
    setFilterButton,
    columnFilterAvailable,
  } = useContext(PlanetsContext);

  // Aqui é o estado DESSE arquivo
  const [numericFilterMetrics, setNumericFiltersMetrics] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  // Aqui atualiza o estado DESSE arquivo
  const handleNumericFilterMetrics = ({ target }) => {
    setNumericFiltersMetrics((prevState) => ({
      ...prevState,
      [target.id]: target.value,
    }));
  };

  // Aqui pega o estado desse arquivo e o envia para O GLOBAL
  const applyFilters = () => {
    const newFilter = numericFilterMetrics;
    setfilterByNumericValues((prevState) => ([
      ...prevState,
      newFilter,
    ]));
    setFilterButton(!filterButton);
  };

  const deleteAllFilters = () => {
    setfilterByNumericValues([]);
    setFilterButton(!filterButton);
  };

  return (
    <>
      <select
        id="column"
        data-testid="column-filter"
        value={ filterByNumericValues.column }
        onChange={ handleNumericFilterMetrics }
      >
        {columnFilterAvailable.map((column) => (
          <option key={ column }>{ column }</option>
        ))}
      </select>

      <select
        id="comparison"
        data-testid="comparison-filter"
        value={ filterByNumericValues.comparison }
        onChange={ handleNumericFilterMetrics }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <label htmlFor="value-filter">
        <input
          id="value"
          type="number"
          data-testid="value-filter"
          value={ numericFilterMetrics.value }
          onChange={ handleNumericFilterMetrics }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilters }
      >
        Filtrar
      </button>

      <button
        type="button"
        onClick={ deleteAllFilters }
        data-testid="button-remove-filters"
      >
        Remover Filtros
      </button>
    </>
  );
}

export default NumberFilter;
