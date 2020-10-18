import {MongoClient, Collection} from 'mongodb';
import Movie from "../models/movie";

export default class MovieRepository
{
    movies: Movie[] = [];
    collection: Collection<Movie>;
    client: MongoClient;
    database: any;

    constructor()
    {
        this.client = new MongoClient("mongodb://localhost:27017", {useUnifiedTopology: true});
        this.init();
    }

    async init()
    {
        try
        {
            await this.client.connect();
            this.database = await this.client.db('IMDB');
            this.collection = await this.database.collection('movie');
            console.log("Connected successfully to mongodb");
        }
        catch (error)
        {console.error(error);}
    }

    async findAllMovies()
    {
        try 
        {
            const projection = { _id: 0, id: 1, name: 1, genre: 1, views: 1 };

            let cursor = await this.collection.find().project(projection);
            let movie: Movie[] = [];
            await cursor.forEach(i => movie.push(i));
            await cursor.close();
            return movie;
        } 
        catch (error) 
        {console.error(error);}
    }

    async findMovieById(id: number) 
    {
        try
        {
            const movie = await this.collection.findOne({id});

            if (movie)
                return movie;

            return `Movie with id: ${id} is not found`;
        }
        catch(error)
        {console.error(error);}
        
    }

    async addNewMovie(movie: Movie):Promise<Movie> 
    {
        try 
        {
            await this.collection.insertOne(movie);
            return movie;
        } 
        catch (error) 
        {console.error(error);}
    }

    async updateMovie(id: number)
    {
        try
        {
            const result = await this.collection.updateOne({id}, {$inc: {views: 1}});

            if (!result) return `Movie with id: ${id} is not found`;

            return result;
        }
        catch(error)
        {console.error(error);}
    }

    async deleteMovie(id: number) 
    {
        try
        {
            const result =  await this.collection.deleteOne({id});

            if (result.deletedCount != 1) return "Didn't find the movie to be deleted";

            return `Successfully deleled movie with id: ${id}`;
        }
        catch(error)
        {console.log(error);}
    }
}