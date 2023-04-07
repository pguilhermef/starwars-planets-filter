import React from 'react';
import './input.css';
import NumberFilter from './components/NumberFilter';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';
import Logo from './components/Logo';

function App() {
  return (
    <PlanetsProvider>
      <Logo />
      <NameFilter />
      <NumberFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
