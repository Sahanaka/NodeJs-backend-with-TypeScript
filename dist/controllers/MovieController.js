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
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const MovieRepository_1 = __importDefault(require("../repositories/MovieRepository"));
const movie_1 = __importDefault(require("../models/movie"));
let MovieController = class MovieController {
    constructor() {
        this.repo = new MovieRepository_1.default();
    }
    getAllMovies() {
        return this.repo.findAllMovies();
    }
    getMovieById(id) {
        return this.repo.findMovieById(id);
    }
    addNewMovie(movie) {
        return this.repo.addNewMovie(movie);
    }
    updateMovie(id) {
        return this.repo.updateMovie(id);
    }
    deleteMovie(id) {
        return this.repo.deleteMovie(id);
    }
};
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getAllMovies", null);
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getMovieById", null);
__decorate([
    routing_controllers_1.Post('/'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_1.default]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "addNewMovie", null);
__decorate([
    routing_controllers_1.Put('/:id'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "updateMovie", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    routing_controllers_openapi_1.ResponseSchema(movie_1.default),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "deleteMovie", null);
MovieController = __decorate([
    routing_controllers_1.JsonController('/api/movies'),
    __metadata("design:paramtypes", [])
], MovieController);
exports.default = MovieController;
//# sourceMappingURL=MovieController.js.map