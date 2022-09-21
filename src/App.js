import React from 'react';
import './App.css';
import SearchFilter from './components/SearchFilter';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
