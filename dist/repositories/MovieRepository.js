"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MovieRepository {
    constructor() {
        this.movies = [];
        this.client = new mongodb_1.MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                this.database = yield this.client.db('IMDB');
                this.collection = yield this.database.collection('movie');
                console.log("Connected successfully to mongodb");
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    findAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projection = { _id: 0, id: 1, name: 1, genre: 1, views: 1 };
                let cursor = yield this.collection.find().project(projection);
                let movie = [];
                yield cursor.forEach(i => movie.push(i));
                yield cursor.close();
                return movie;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    findMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield this.collection.findOne({ id });
                if (movie)
                    return movie;
                return `Movie with id: ${id} is not found`;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    addNewMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.collection.insertOne(movie);
                return movie;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updateMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.collection.updateOne({ id }, { $inc: { views: 1 } });
                if (!result)
                    return `Movie with id: ${id} is not found`;
                return result;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.collection.deleteOne({ id });
                if (result.deletedCount != 1)
                    return "Didn't find the movie to be deleted";
                return `Successfully deleled movie with id: ${id}`;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = MovieRepository;
//# sourceMappingURL=MovieRepository.js.map