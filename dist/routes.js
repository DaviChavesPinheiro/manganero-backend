"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MangaController_1 = __importDefault(require("./controllers/MangaController"));
var routes = express_1.Router();
routes.get('/mangas', MangaController_1.default.getAll);
routes.get('/mangas/:id', MangaController_1.default.getById);
routes.get('/mangas/:mangaId/:chapterId', MangaController_1.default.getMangaWithChapter);
exports.default = routes;
