import { Grid, Table } from '@trussworks/react-uswds';
import {  useAtomValue } from 'jotai';
import { Suspense } from 'react';
import { AddMovie } from './AddMovie';
import { movieResultAtom, moviesAtoms } from '../../store/movieatoms';

export function MovieDataComponent() {
  let movies = useAtomValue(moviesAtoms);
  const selectedMovie = useAtomValue(movieResultAtom);
  if(selectedMovie) {
    movies = [...movies, selectedMovie];
  }
  console.log(movies);
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export function MoviePage() {
  return (
    <Grid>
      <h1>Movies</h1>
      <AddMovie />
      <Suspense fallback={<div>Loading...</div>}>
        <MovieDataComponent />
      </Suspense>
    </Grid>
  );
}
