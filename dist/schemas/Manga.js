"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var MangaScheme = new mongoose_1.Schema({
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
});
exports.default = mongoose_1.model("Manga", MangaScheme);
