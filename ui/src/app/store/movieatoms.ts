import { atom } from 'jotai';
import { Movie } from '../types/types';
import { getMovies, addMovie, getMovie } from '../api/requests';

const movieIdAtom = atom(0);
const movieAtom = atom({});
const movieResultAtom = atom<Promise<Movie | null>>(Promise.resolve(null));

const moviesAtoms = atom<Promise<Movie[]>>(getMovies);

const mutateMovieAtom = atom(null, async (_get, set, movie: Movie) => {
  const data = await addMovie(movie);
  console.log(data);
  console.log("~~~~~~~~~~~~~~~");

  set(movieResultAtom, data);
});

const selectedMovieAtom = atom(null, async (get, set) => {
  const id = get(movieIdAtom);
  // const mutateMovie = get(movieResultAtom);
  // if(mutateMovie) {
  //   return mutateMovie;
  // }
  const movie = await getMovie(id);
  // set(movieResultAtom, getMovie(id));
  return movie;
});

export { movieAtom, moviesAtoms, movieIdAtom, mutateMovieAtom, movieResultAtom, selectedMovieAtom};