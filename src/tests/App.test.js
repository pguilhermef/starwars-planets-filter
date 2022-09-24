import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData'

const NAME_FILTER = 'name-filter';
const COLUMN_FILTER = 'column-filter';
const COMPARISON_FILTER = 'comparison-filter';
const VALUE_FILTER = 'value-filter';
const BUTTON_FILTER = 'button-filter';

describe('Requisito 1 - Requisição de API e preenchimento da tabela', () => {
  test('Testa se é feita uma requisição a api', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => testData,
    }))

    render(<App />)

    const API_CORRECT_FETCH = 'https://swapi.dev/api/planets';
    const TATOOINE = await screen.findByText(/tatooine/i)

    expect(TATOOINE).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalled()
    expect(global.fetch).toHaveBeenCalledWith(API_CORRECT_FETCH)
  })

  test('Testa se a tabela possui 13 colunas', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => testData,
    }))

    render(<App />)

    const TABLE_COLUMNS = screen.getAllByRole("columnheader")
    
    expect(TABLE_COLUMNS).toHaveLength(13)
  })
});
