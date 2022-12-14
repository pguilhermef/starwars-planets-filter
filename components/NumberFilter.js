import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NumberFilter() {
  const {
    filterByNumericValues,
    setfilterByNumericValues,
    filterButton,
    setFilterButton,
    columnFilterAvailable,
    setColumnFilterAvailable,
  } = useContext(PlanetsContext);
  // Comente todas as funções abaixo para resolver o bug que está atormentando nossas vidas

  // Column está sendo pego pelo índice para a resolução do bug de adicionar duas tarefas com o mesmo filtro! Não mude!
  // Aqui é o estado DESSE arquivo
  const [numericFilterMetrics, setNumericFiltersMetrics] = useState({
    column: columnFilterAvailable[0],
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

  const updateColumnOptions = () => setColumnFilterAvailable(columnFilterAvailable
    .filter((column) => column !== numericFilterMetrics.column));

  const deleteAllFilters = () => {
    setfilterByNumericValues([]);
    setFilterButton(!filterButton);
  };

  const deleteFilter = (column) => {
    // Isso adiciona a coluna que antes estava sendo usada como uma das opções de filtros disponiveis
    setColumnFilterAvailable((prevState) => [...prevState, column]);
    // E isso refaz os filtros com todos os filtros anteriores, retirando apenas o que foi clicado
    setfilterByNumericValues(filterByNumericValues
      .filter((filter) => filter.column !== column));
    setFilterButton(!filterButton);
  };

  useEffect(() => setNumericFiltersMetrics({
    column: columnFilterAvailable[0],
    comparison: 'maior que',
    value: 0,
  }), [filterButton, columnFilterAvailable]);

  const handleFilter = () => {
    updateColumnOptions();
    applyFilters();
  };

  return (
    <>
    <div className='flex' >
      <select
        id="column"
        data-testid="column-filter"
        value={ filterByNumericValues.column }
        onChange={ handleNumericFilterMetrics }
        className="rounded bg-gray-300 py-2 text-center ml-2 mt-2"
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
        className="rounded bg-gray-300 py-2 text-center ml-2 mt-2"
      >
        <option className="rounded bg-gray-300">maior que</option>
        <option className="rounded bg-gray-300">menor que</option>
        <option className="rounded bg-gray-300">igual a</option>
      </select>

      <label htmlFor="value-filter">
        <input
          id="value"
          type="number"
          data-testid="value-filter"
          value={ numericFilterMetrics.value }
          onChange={ handleNumericFilterMetrics }
          className="rounded bg-gray-300 py-1.5 text-center ml-2 mt-2"
        />
      </label>

    </div>
    
    <div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
        className="ml-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm hover:bg-yellow-300  hover:text-black"
      >
        Filtrar
      </button>
      <button
        type="button"
        onClick={ deleteAllFilters }
        data-testid="button-remove-filters"
        className="ml-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm hover:bg-red-500  hover:text-white"
      >
        Remover Filtros
      </button>
    </div>

      { filterByNumericValues.length > 0 && (
        <div>
          Filtros usados:
          {filterByNumericValues
            .map(({ column, comparison, value }) => (
              <p key={ column } data-testid="filter">
                {column}
                {' '}
                {comparison}
                {' '}
                {value}
                <button
                  id={ column }
                  type="button"
                  onClick={ () => deleteFilter(column) }
                  className="ml-5 rounded-md border border-gray-300 py-2 px-3 bg-red-600 hover:bg-red-800"
                >
                  X
                </button>
              </p>
            ))}
        </div>
      )}
    </>
  );
}

export default NumberFilter;
