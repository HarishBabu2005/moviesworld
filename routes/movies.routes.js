import express, { Router } from "express";
import { moviecreate, moviedelete, movieDetail, movieupdate, movieview } from "../controllers/movie.controllers.js";
const router =express.Router();
router.get("/",movieview)
router.get("/:id",movieDetail)
router.post("/",moviecreate)
router.put('/:id',movieupdate)
router.delete("/:id",moviedelete)
export default router;