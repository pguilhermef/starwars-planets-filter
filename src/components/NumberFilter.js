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
    <div className="flex justify-center">
      <div
        className="max-w-3xl flex justify-evenly items-center flex-wrap md:w-3/4 xl:w-2/4"
      >
        <div
          className="text-white
          text-3xl font-semibold shadow-lg glassmorphism-black p-2"
        >
          Filtre por atributos:
        </div>

        <div className="w-full flex flex-col items-center lg:flex-row px-5">
          <select
            id="column"
            data-testid="column-filter"
            className="w-full p-2 rounded-lg my-2 lg:mr-2 bg-slate-100"
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
            className="w-full p-2 rounded-lg my-2 lg:mx-1 bg-slate-100"
            value={ filterByNumericValues.comparison }
            onChange={ handleNumericFilterMetrics }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>

          <label htmlFor="value-filter" className="my-2 lg:ml-2 w-full">
            <input
              id="value"
              type="number"
              data-testid="value-filter"
              className="w-full p-2 rounded-lg  bg-slate-100"
              value={ numericFilterMetrics.value }
              onChange={ handleNumericFilterMetrics }
            />
          </label>
        </div>

        <div className="flex md:flex-col lg:flex-row w-full px-5">
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleFilter }
            className="bg-starwars-yellow h-10 w-full my-1 mr-5 rounded-lg xl:my-0"
          >
            Filtrar
          </button>

          <button
            type="button"
            onClick={ deleteAllFilters }
            data-testid="button-remove-filters"
            className="bg-starwars-red h-10 w-full my-1 rounded-lg xl:my-0"
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
                  >
                    X
                  </button>
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NumberFilter;
