"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const MovieController_1 = __importDefault(require("./controllers/MovieController"));
const TvSeriesController_1 = __importDefault(require("./controllers/TvSeriesController"));
const PORT = 5000;
const routingControllerOptions = {
    controllers: [MovieController_1.default, TvSeriesController_1.default]
};
const app = routing_controllers_1.createExpressServer(routingControllerOptions);
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
//# sourceMappingURL=app.js.map