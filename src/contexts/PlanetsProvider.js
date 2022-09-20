import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider(props) {
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    setLoading(true);
    try {
      const response = await fetchPlanets();
      setPlanets(response);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  const { children } = props;
  const contextValue = { loading, planets, getPlanets };
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
