/* eslint-disable no-magic-numbers */
import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { planets, filteredPlanets } = useContext(PlanetsContext);

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
  ];

  const tableHeaders = tableTitles.map((title, index) => (
    <th key={ index } className="px-4 py-2 text-starwars-yellow">
      { title }
    </th>
  ));

  return (
    <div>
      <div className="w-full overflow-x-auto flex lg:justify-center my-10 px-5 pb-5">
        <div className="glassmorphism pt-2 pb-5 px-5">
          <table className="text-white table-auto text-center overflow-hidden">
            <thead>
              {tableHeaders}
            </thead>
            <tbody>
              {planets && filteredPlanets
                .map((info) => (
                  <tr key={ info.name }>
                    <td className="border px-4 py-2">{info.name}</td>
                    <td className="border px-4 py-2">{info.rotation_period}</td>
                    <td className="border px-4 py-2">{info.orbital_period}</td>
                    <td className="border px-4 py-2">{info.diameter}</td>
                    <td className="border px-4 py-2">{info.climate}</td>
                    <td className="border px-4 py-2">{info.gravity}</td>
                    <td className="border px-4 py-2">{info.terrain}</td>
                    <td className="border px-4 py-2">{info.surface_water}</td>
                    <td className="border px-4 py-2">{info.population}</td>
                    <td className="border px-4 py-2">{info.films.length}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
