import { Request, Response } from "express";

const CreateArticle = async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;
  } catch (err) {
    const error = err as Error;
    res.status(500).send({
      message: error.message,
    });
  }
};

export { CreateArticle };
