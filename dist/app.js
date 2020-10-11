"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var queryFormater_1 = __importDefault(require("./middlewares/queryFormater"));
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = __importDefault(require("./routes"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.middlewares();
        this.database();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(cors_1.default());
        this.express.use(queryFormater_1.default);
    };
    App.prototype.database = function () {
        var connection = process.env.MONGO_DB_CONNECTION || "mongodb://localhost:27017/manga-nero";
        mongoose_1.default.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    };
    App.prototype.routes = function () {
        this.express.use(routes_1.default);
    };
    return App;
}());
exports.default = new App().express;
