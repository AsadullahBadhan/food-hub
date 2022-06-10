import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe.js';

function App() {
  const APP_ID = 'dc964354';
  const APP_KEY = '2646d043b172e82a62e0521ec91c8155';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('beef');

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
    console.log('effected')
  }, [query]);


  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
    console.log(query)
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input type="text" value={search} onChange={updateSearch} className='search-bar' />
        <button type="submit" className='search-btn'>Search</button>
      </form>
      <div className='container'>
        {
          recipes.map(recipe => <Recipe recipe={recipe.recipe} key={recipe.recipe.label}></Recipe>)
        }
      </div>
    </div>
  );
}

export default App;
