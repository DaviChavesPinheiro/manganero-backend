import { Request, Response } from "express";
import Manga from "../schemas/Manga";

import { Query } from "../middlewares/queryFormater";
 

class MangaController {
    public static limit = 30
    public async getAll(req: Request, res: Response): Promise<Response> {
        const query: Query = req.query
        
        const mangas = await Manga
            .find({
                $or: [
                    { title: { $regex: query.find + "*", $options: 'i' } },
                    { 'authors.': { $regex: query.find + "*", $options: 'i' } },
                ]
            })
            .select("_id title image_url score members chapters_amount")
            .sort(query.sort)
            .limit(MangaController.limit)
            .skip(query.page ? (parseInt(query.page) - 1) * MangaController.limit : 1)
        return res.json(mangas)
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        const ids = req.params.id.split(',').map(id => parseInt(id))
        const query: Query = req.query

        const mangasQuery = Manga.find({_id: {$in : ids}})
                                .sort(query.sort)
                                .limit(MangaController.limit)
                                .skip(query.page ? (parseInt(query.page) - 1) * MangaController.limit : 1)
        if(ids.length === 1){
            mangasQuery.select("-chapters.pages")
        } else {
            mangasQuery.select("-chapters")
        }
        const mangas = await mangasQuery
        return res.json(mangas)
    }

    public async getMangaWithChapter(req: Request, res: Response): Promise<Response> {
        const { mangaId, chapterId } = req.params
        const query: Query = req.query

        const manga = await Manga
            .findOne({_id: parseInt(mangaId)})
            .select({chapters: {"$slice": [parseInt(chapterId), 1]}})
        
        return res.json(manga)
    }


}

export default new MangaController()