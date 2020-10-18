"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const TvSeriesRepository_1 = __importDefault(require("../repositories/TvSeriesRepository"));
const tvSeries_1 = __importDefault(require("../models/tvSeries"));
let TvSeriesController = class TvSeriesController {
    constructor() {
        this.repo = new TvSeriesRepository_1.default();
    }
    getAllMovies() {
        return this.repo.findAllTvSeries();
    }
    getMovieById(id) {
        return this.repo.findTvSeriesById(id);
    }
    addNewMovie(tvSeries) {
        return this.repo.addNewTvSeries(tvSeries);
    }
    updateMovie(id) {
        return this.repo.updateTvSeries(id);
    }
    deleteMovie(id) {
        return this.repo.deleteTvSeries(id);
    }
};
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TvSeriesController.prototype, "getAllMovies", null);
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TvSeriesController.prototype, "getMovieById", null);
__decorate([
    routing_controllers_1.Post('/'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tvSeries_1.default]),
    __metadata("design:returntype", void 0)
], TvSeriesController.prototype, "addNewMovie", null);
__decorate([
    routing_controllers_1.Put('/:id'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TvSeriesController.prototype, "updateMovie", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TvSeriesController.prototype, "deleteMovie", null);
TvSeriesController = __decorate([
    routing_controllers_1.JsonController('/api/tvseries'),
    __metadata("design:paramtypes", [])
], TvSeriesController);
exports.default = TvSeriesController;
//# sourceMappingURL=TvSeriesController.js.map