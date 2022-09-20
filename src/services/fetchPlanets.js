const fetchPlanets = async () => {
  const URL = 'https://swapi.dev/api/planets';
  const response = await fetch(URL);
  const { results } = await response.json();

  results.forEach((element) => {
    delete element.residents;
  });

  return results;
};

export default fetchPlanets;
