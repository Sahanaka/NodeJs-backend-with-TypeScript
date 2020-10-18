import {MongoClient, Collection} from 'mongodb';
import TvSeries from "../models/tvSeries";

export default class TvSeriesRepository
{
    tvSeries: TvSeries[] = [];
    collection: Collection<TvSeries>;
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
            this.collection = await this.database.collection('tvSeries');
        }
        catch (error)
        {console.error(error);}
    }

    async findAllTvSeries()
    {
        try 
        {
            const projection = { _id: 0, id: 1, name: 1, genre: 1, views: 1 };

            let cursor = await this.collection.find().project(projection);
            let tvSeries: TvSeries[] = [];
            await cursor.forEach(i => tvSeries.push(i));
            await cursor.close();
            return tvSeries;
        } 
        catch (error) 
        {console.error(error);}
    }

    async findTvSeriesById(id: number) 
    {
        try
        {
            const tvSeries = await this.collection.findOne({id});

            if (tvSeries)
                return tvSeries;

            return `Tv Series with id: ${id} is not found`;
        }
        catch(error)
        {console.error(error);}
        
    }

    async addNewTvSeries(tvSeries: TvSeries):Promise<TvSeries> 
    {
        try 
        {
            await this.collection.insertOne(tvSeries);
            return tvSeries;
        } 
        catch (error) 
        {console.error(error);}
    }

    async updateTvSeries(id: number)
    {
        try
        {
            const result = await this.collection.updateOne({id}, {$inc: {views: 1}});

            if (!result) return `Tv Series with id: ${id} is not found`;

            return result;
        }
        catch(error)
        {console.error(error);}
    }

    async deleteTvSeries(id: number) 
    {
        try
        {
            const result = await this.collection.deleteOne({id});

            if (result.deletedCount != 1) return "Didn't find the tv series to be deleted";

            return result;
        }
        catch(error)
        {console.log(error);}
    }
}