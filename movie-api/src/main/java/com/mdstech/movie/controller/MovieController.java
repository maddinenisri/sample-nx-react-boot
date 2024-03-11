package com.mdstech.movie.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mdstech.movie.model.Movie;
import com.mdstech.movie.service.MovieService;

@CrossOrigin(origins = "*")
@RestController
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // Generate get method for all movies
    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }
    
    // Generate get method for a specific movie
    @GetMapping("/movies/{id}")
    public Movie getMovie(@PathVariable("id") Integer id) {
        return movieService.getMovie(id);
    }

    // Generate post method to add a movie
    @PostMapping("/movies")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    // Generate put method to update a movie
    @PutMapping("/movies/{id}")
    public Movie updateMovie(@PathVariable("id") Integer id, Movie movie) {
        return movieService.updateMovie(id, movie);
    }

    // Generate delete method to delete a movie
    @DeleteMapping("/movies/{id}")
    public void deleteMovie(@PathVariable("id") Integer id) {
        movieService.deleteMovie(id);
    }
}
