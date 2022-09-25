import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData'
import userEvent from '@testing-library/user-event';

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

describe('Requisito 2 e 3 - Criar filtros', () => {
  test('Testa se os botões de filtros são rendenizados', async () => {
    render(<App />)

    const NAME_FILTER_INPUT = screen.getByTestId(NAME_FILTER)
    const COLUMN_FILTER_SELECT = screen.getByTestId(COLUMN_FILTER)
    const COMPARISON_FILTER_SELECT = screen.getByTestId(COMPARISON_FILTER)
    const VALUE_FILTER_SELECT = screen.getByTestId(VALUE_FILTER)
    const BUTTON_TO_FILTER = screen.getByTestId(BUTTON_FILTER)

    expect(NAME_FILTER_INPUT).toBeInTheDocument()
    expect(COLUMN_FILTER_SELECT).toBeInTheDocument()
    expect(COMPARISON_FILTER_SELECT).toBeInTheDocument()
    expect(VALUE_FILTER_SELECT).toBeInTheDocument()
    expect(BUTTON_TO_FILTER).toBeInTheDocument()
  })

  test('Testa se é possível clicar no botão de filtrar', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => testData
    }));

    render(<App />);

    const value = screen.getByTestId(VALUE_FILTER);
    const button = screen.getByTestId(BUTTON_FILTER);

    userEvent.type(value, '7');
    expect(value).toHaveValue(7);

    userEvent.click(button);
  });

  test('Testa se é possível selecionar diferentes opções no filtro "Comparison"', () => {
    global.fetch = jest.fn (async () => ({
      json: async () => testData,
    }))

    render(<App />)

    const COMPARISON_FILTER_SELECT = screen.getByTestId(COMPARISON_FILTER)
    const BUTTON_TO_FILTER = screen.getByTestId(BUTTON_FILTER)
    
    userEvent.selectOptions(COMPARISON_FILTER_SELECT, 'maior que')
    expect(COMPARISON_FILTER_SELECT).toHaveValue('maior que')

    userEvent.selectOptions(COMPARISON_FILTER_SELECT, 'menor que')
    expect(COMPARISON_FILTER_SELECT).toHaveValue('menor que')

    userEvent.selectOptions(COMPARISON_FILTER_SELECT, 'igual a')
    expect(COMPARISON_FILTER_SELECT).toHaveValue('igual a')
  })

});
