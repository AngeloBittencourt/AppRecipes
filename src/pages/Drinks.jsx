import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DrinksContext from '../context/DrinksContext';

function Drinks() {
  const { drinksFilter: { filteredDrinks } } = useContext(DrinksContext);
  const history = useHistory();

  useEffect(() => {
    if (filteredDrinks.length === 1) {
      history.push(`/bebidas/${filteredDrinks[0].idDrink}`);
    }
  }, [filteredDrinks, history]);

  return (
    <>
      <h1>Bebidas</h1>
      <SearchBar />
    </>
  );
}

export default Drinks;
