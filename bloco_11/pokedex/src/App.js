import Pokemon from './Pokemon';
import pokemons from './data'

function App() {
  return (
    <div className='title'>
      <h2>My Pokédex</h2>
      <div className='Container'>
        {pokemons
        .sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        .map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    </div>
  );
}

export default App;
