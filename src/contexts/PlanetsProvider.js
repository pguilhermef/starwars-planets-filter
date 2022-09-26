import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider(props) {
  const [planets, setPlanets] = useState([]);
  const [planetsToFilter, setPlanetsToFilter] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [filterButton, setFilterButton] = useState(false);
  const columnsAvailableInitialState = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [
    columnFilterAvailable,
    setColumnFilterAvailable,
  ] = useState(columnsAvailableInitialState);

  // Chama a api e atribui seu resultado a planets e planetsToFilter
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetchPlanets();
        setPlanets(response);
        setPlanetsToFilter(response);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPlanets();
  }, []);

  // Assim que um filtro for usado ou excluido, deve ser feita a verificação dos filtros disponíveis para uso
  // const columnsAvailables = () => {
  //   const filterInUse = filterByNumericValues
  //     .map(({ column }) => column);

  //   const filtersAvailable = columnFilterAvailable
  //     .filter((filter) => !filterInUse.includes(filter));

  //   setColumnFilterAvailable(filtersAvailable);
  // };

  // Quando o .filter no useEffect abaixo for ativado, retorna planetas que derem True
  const handleComparisonFilter = (planet, column, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default: return planet;
    }
  };

  useEffect(() => {
    let filterPlanets = planets;
    console.log(planetsToFilter);
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        const filteredPlanetList = filterPlanets
          .filter((planet) => (
            handleComparisonFilter(planet, column, comparison, value)
          ));
        filterPlanets = filteredPlanetList;
      });
    }
    // columnsAvailables();
    // Problema da mentoria está aqui!
    // Ao excluir o filtro, ele nao apaga
    console.log('fui atualizado');
    setPlanetsToFilter(filterPlanets);
  }, [filterButton]); // eslint-disable-line

  const filteredPlanets = planetsToFilter
    .filter((planet) => planet.name.toUpperCase()
      .includes(filterByName.name.toUpperCase()));

  const { children } = props;
  const contextValue = {
    planets,
    setPlanets,
    filteredPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setfilterByNumericValues,
    filterButton,
    setFilterButton,
    columnFilterAvailable,
    setColumnFilterAvailable,
    columnsAvailableInitialState,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
