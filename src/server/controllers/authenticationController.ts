import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const authenicationController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    console.log('in the create user controller')
    const { firstName, lastName, email, password, phone, role } =
      req.body;
    try {
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
          phone,
          role,
        },
      });
      return next()
    } catch (error) {
      console.log(error);
    }
  },

  findUser: (req: Request, res: Response, next: NextFunction) => {},
};

export default authenicationController;
