import { Request, Response } from "express";

export const getStatus = (req: Request, res: Response) => {
  res.json({ status: "dope-shi server is live!" });
};
