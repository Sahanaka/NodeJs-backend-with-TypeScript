import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import MovieController from "./controllers/MovieController";
import TvSeriesController from "./controllers/TvSeriesController";

const PORT = 5000;


const routingControllerOptions = {
    controllers: [MovieController, TvSeriesController]
};

const app = createExpressServer(routingControllerOptions);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));