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
class TvSeriesRepository {
    constructor() {
        this.tvSeries = [];
        this.client = new mongodb_1.MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                this.database = yield this.client.db('IMDB');
                this.collection = yield this.database.collection('tvSeries');
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    findAllTvSeries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projection = { _id: 0, id: 1, name: 1, genre: 1, views: 1 };
                let cursor = yield this.collection.find().project(projection);
                let tvSeries = [];
                yield cursor.forEach(i => tvSeries.push(i));
                yield cursor.close();
                return tvSeries;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    findTvSeriesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tvSeries = yield this.collection.findOne({ id });
                if (tvSeries)
                    return tvSeries;
                return `Tv Series with id: ${id} is not found`;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    addNewTvSeries(tvSeries) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.collection.insertOne(tvSeries);
                return tvSeries;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updateTvSeries(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.collection.updateOne({ id }, { $inc: { views: 1 } });
                if (!result)
                    return `Tv Series with id: ${id} is not found`;
                return result;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteTvSeries(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.collection.deleteOne({ id });
                if (result.deletedCount != 1)
                    return "Didn't find the tv series to be deleted";
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = TvSeriesRepository;
//# sourceMappingURL=TvSeriesRepository.js.map