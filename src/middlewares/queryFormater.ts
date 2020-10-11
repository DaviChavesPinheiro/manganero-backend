import { Request, Response, NextFunction } from "express";

export interface Query extends Express.Request {
    select?: string,
    sort?: string,
    find?: string,
    page?: string
}

export default (req: Request, res: Response, next: NextFunction) => {
    const query: Query = req.query
    req.query.select = query.select?.replace(new RegExp(',', 'g'), " ")
    req.query.page = query.page || "1"
    req.query.find = query.find || " "
    next()
}