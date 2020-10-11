import { Schema, model, Document } from "mongoose";

interface MangaInterface extends Document{
    _id: number,
    title?: string,
    description?: string,
    image_url?: string,
    chapters?: [{title: string, pages?: string[]}],
    chapters_amount?: number,
    members?: number,
    volumes?: number,
    status?: string,
    published?: string,
    publishing?: boolean,
    genres?: [],
    authors?: [],
    recommendations?: [],
    characters?: [],
    score?: number
}

const MangaScheme = new Schema({
    _id: Number,
    title: String,
    description: String,
    image_url: String,
    chapters: [],
    chapters_amount: Number,
    members: Number,
    volumes: Number,
    status: String,
    published: String,
    publishing: Boolean,
    genres: [],
    authors: [],
    recommendations: [],
    characters: [],
    score: Number
}, {
    timestamps: true
})

export default model<MangaInterface>("Manga", MangaScheme)