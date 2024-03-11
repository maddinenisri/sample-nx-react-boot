import { Movie } from '../types/types';

const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch('http://localhost:8080/movies');
  return response.json();
};

const addMovie = async (movie: Movie) => {
  const response = await fetch('http://localhost:8080/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  return response.json();
};

const getMovie = async (id: number): Promise<Movie> => {
    const response = await fetch(`http://localhost:8080/movies/${id}`);
    return response.json();
};
export { getMovies, addMovie, getMovie };
