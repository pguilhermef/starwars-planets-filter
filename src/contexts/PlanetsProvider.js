import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider(props) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [filterNumericButton, setfilterNumericButton] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetchPlanets();
        setPlanets(response);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPlanets();
  }, []);

  const { children } = props;
  const contextValue = {
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setfilterByNumericValues,
    filterNumericButton,
    setfilterNumericButton,
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
