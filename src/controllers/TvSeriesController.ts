import { JsonController, Get, Param, Delete, Post, Body, Put } from 'routing-controllers';
import TvSeriesRepository from "../repositories/TvSeriesRepository";
import TvSeries from "../models/tvSeries";

@JsonController('/api/tvseries')
export default class TvSeriesController
{
    repo: TvSeriesRepository;

    constructor()
    {
        this.repo = new TvSeriesRepository();
    }

    @Get('/')
    getAllMovies()
    {
        return this.repo.findAllTvSeries();
    }

    @Get('/:id')
    getMovieById(@Param("id") id: number)
    {
        return this.repo.findTvSeriesById(id);
    }

    @Post('/')
    addNewMovie(@Body() tvSeries: TvSeries)
    {
        return this.repo.addNewTvSeries(tvSeries);
    }

    @Put('/:id')
    updateMovie(@Param("id") id: number)
    {
        return this.repo.updateTvSeries(id);
    }

    @Delete('/:id')
    deleteMovie(@Param("id") id: number)
    {
        return this.repo.deleteTvSeries(id);
    }
}