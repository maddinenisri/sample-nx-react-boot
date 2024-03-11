import { Provider } from 'jotai';
import { MoviePage } from './components/movies/MoviePage';

export function App() {
  return (
    <Provider>
      <MoviePage/>
    </Provider>
  );
}

export default App;
