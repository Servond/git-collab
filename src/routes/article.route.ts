import { Router } from "express";
import { CreateArticle } from "../controllers/article.controller";

const router = Router();

router.post("/", CreateArticle);
