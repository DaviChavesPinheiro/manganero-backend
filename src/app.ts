import express from "express";
import cors from "cors";
import queryFormater from "./middlewares/queryFormater";
import mongoose from "mongoose";
import routes from "./routes";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
        this.express.use(queryFormater)
    }

    private database(): void {
        const connection = process.env.MONGO_DB_CONNECTION || "mongodb://localhost:27017/manga-nero"
        mongoose.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express