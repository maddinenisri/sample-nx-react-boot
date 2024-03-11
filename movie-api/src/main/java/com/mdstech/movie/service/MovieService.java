package com.mdstech.movie.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mdstech.movie.model.Movie;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MovieService {
    private List<Movie> movies = new ArrayList<>();
    
    public MovieService() {
        movies.add(new Movie(1, "The Shawshank Redemption"));
        movies.add(new Movie(2, "The Godfather"));
        movies.add(new Movie(3, "The Dark Knight"));
    }

    public List<Movie> getAllMovies() {
        return movies;
    }

    // Generate get method for a specific movie
    public Movie getMovie(Integer id) {
        return movies.stream().filter(movie -> movie.id().equals(id)).findFirst().orElse(null);
    }
    // Generate post method to add a movie
    public Movie addMovie(Movie movie) {
        Movie savedMovie = new Movie(movies.size()+1, movie.name());
        movies.add(savedMovie);
        log.info("Movie added: {}", savedMovie);
        return savedMovie;
    }
    
    // Generate put method to update a movie
    public Movie updateMovie(Integer id, Movie movie) {
        Movie existingMovie = movies.stream().filter(m -> m.id().equals(id)).findFirst().orElse(null);
        if (existingMovie != null) {
            existingMovie = movie;
        }
        return existingMovie;
    }
    // Generate delete method to delete a movie
    public void deleteMovie(Integer id) {
        movies.removeIf(movie -> movie.id().equals(id));
    }
}
