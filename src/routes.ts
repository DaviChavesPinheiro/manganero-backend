import { Router } from "express";

import MangaController from "./controllers/MangaController";

const routes = Router()

routes.get('/mangas', MangaController.getAll)
routes.get('/mangas/:id', MangaController.getById)
routes.get('/mangas/:mangaId/:chapterId', MangaController.getMangaWithChapter)

export default routes