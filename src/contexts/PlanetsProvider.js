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
  const [columnFilterAvailable, setColumnFilterAvailable] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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

  const handleComparisonFilter = (planet, column, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value) && planet[column] !== 'unknown';
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value) && planet[column] !== 'unknown';
    default: return planet;
    }
  };

  const columnsAvailables = () => {
    const filterInUse = filterByNumericValues
      .map(({ column }) => column);

    const filtersAvailable = columnFilterAvailable
      .filter((filter) => !filterInUse.includes(filter));

    setColumnFilterAvailable(filtersAvailable);
  };

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        const filteredPlanetList = planetsToFilter
          .filter((planet) => (
            handleComparisonFilter(planet, column, comparison, value)
          ));
        setPlanetsToFilter(filteredPlanetList);
      });
    }
    columnsAvailables();
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
