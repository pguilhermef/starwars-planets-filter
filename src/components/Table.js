import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { planets } = useContext(PlanetsContext);

  const tableTitles = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((titles) => (<th key={ titles }>{ titles }</th>))}
        </tr>
      </thead>
      <tbody>
        {planets && planets.map((info) => (
          <tr key={ info.name }>
            <td>{info.name}</td>
            <td>{info.rotation_period}</td>
            <td>{info.orbital_period}</td>
            <td>{info.diameter}</td>
            <td>{info.climate}</td>
            <td>{info.gravity}</td>
            <td>{info.terrain}</td>
            <td>{info.surface_water}</td>
            <td>{info.population}</td>
            <td>{info.films.map((film) => <p key={ film }>{ film }</p>)}</td>
            <td>{info.created}</td>
            <td>{info.edited}</td>
            <td>{info.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
