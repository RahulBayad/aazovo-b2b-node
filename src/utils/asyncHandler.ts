import { Request, Response, NextFunction } from "express";

export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error) => {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    });
  };
