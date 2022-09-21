import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider(props) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });

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
  const contextValue = { planets, setPlanets, filterByName, setFilterByName };

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
