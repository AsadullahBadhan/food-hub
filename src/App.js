import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe.js';

function App() {
  console.log(process.env)

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('beef');

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
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
