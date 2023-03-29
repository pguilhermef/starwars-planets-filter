import React from 'react';
import './input.css';
import NumberFilter from './components/NumberFilter';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <NameFilter />
      <NumberFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
