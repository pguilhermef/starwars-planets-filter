import React from 'react';
import './App.css';
import NumberFilter from './components/NumberFilter';
import SearchFilter from './components/SearchFilter';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchFilter />
      <NumberFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
