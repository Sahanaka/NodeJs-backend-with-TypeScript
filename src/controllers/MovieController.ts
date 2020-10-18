import { JsonController, Get, Param, Delete, Post, Body, Put } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import MovieRepository from "../repositories/MovieRepository";
import Movie from "../models/movie";

@JsonController('/api/movies')
export default class MovieController
{
    repo: MovieRepository;

    constructor()
    {
        this.repo = new MovieRepository();
    }

    @Get('/')
    getAllMovies()
    {
        return this.repo.findAllMovies();
    }

    @Get('/:id')
    getMovieById(@Param("id") id: number)
    {
        return this.repo.findMovieById(id);
    }

    @Post('/')
    addNewMovie(@Body() movie: Movie)
    {
        return this.repo.addNewMovie(movie);
    }

    @Put('/:id')
    updateMovie(@Param("id") id: number)
    {
        return this.repo.updateMovie(id);
    }

    @Delete('/:id')
    @ResponseSchema(Movie)
    deleteMovie(@Param("id") id: number)
    {
        return this.repo.deleteMovie(id);
    }
}