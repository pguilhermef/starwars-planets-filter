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
    'Created',
    'URL',
  ];

  return (
    <div className='xl:px-5 xl:py-0.5 my-5 bg-white rounded'>
      <table className='border-collapse rounded-lg border border-slate-400 my-5 text-center'>
        <thead>
          <tr>
            {tableTitles.map((titles) => (<th className='border border-slate-300 bg-white' key={ titles }>{ titles }</th>))}
          </tr>
        </thead>
        <tbody>
          {planets && filteredPlanets
            .map((info) => (
              <tr key={ info.name } className='odd:bg-white even:bg-slate-50'>
                <td className='border border-slate-300'>{info.name}</td>
                <td className='border border-slate-300'>{info.rotation_period}</td>
                <td className='border border-slate-300'>{info.orbital_period}</td>
                <td className='border border-slate-300'>{info.diameter}</td>
                <td className='border border-slate-300'>{info.climate}</td>
                <td className='border border-slate-300'>{info.gravity}</td>
                <td className='border border-slate-300'>{info.terrain}</td>
                <td className='border border-slate-300'>{info.surface_water}</td>
                <td className='border border-slate-300'>{info.population}</td>
                <td className='border border-slate-300'>{info.films.length}</td>
                <td className='border border-slate-300'>{info.created}</td>
                <td className='border border-slate-300'>{info.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default Table;
