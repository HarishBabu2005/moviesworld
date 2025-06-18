import express, { Router } from "express";
import { moviecreate, moviedelete, movieupdate, movieview } from "../controllers/movie.controllers.js";
const router =express.Router();
router.get("/",movieview)
router.post("/",moviecreate)
router.put('/:id',movieupdate)
router.delete("/:id",moviedelete)
export default router;