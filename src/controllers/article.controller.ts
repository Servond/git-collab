import { Request, Response, NextFunction } from "express";
import { findUserService } from "../services/article.service";

const getarticle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, body } = req.body;

    const users = await findUserService();
    res;
  } catch (err) {
    const error = err as Error;
    next(err);
  }
};

const CreateArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, body } = req.body;

    const users = await findUserService();
    res;
  } catch (err) {
    const error = err as Error;
    next(err);
  }
};

export { CreateArticle };
