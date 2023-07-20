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
      res.locals.userid = user.id;
      return next()
    } catch (error) {
      console.log(error);
    }
  },

  findUser: async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email_password: {
            email,
            password
          }
        }
      })
      console.log('found user', user)
      return next()
    }
    catch (error) {
      console.log(error);
    }
  },

  updateSchedule: async (req: Request, res: Response, next: NextFunction) => {
    console.log('in the updateSchedule controller')
    const schedule = req.body;
    console.log('schedule', schedule)
    const availabilities = schedule.map((slot: { dayOfWeek: string; startTime: Date; endTime: Date; teacherId: string; availabilityStatus: string; }) => ({
      dayOfWeek: slot.dayOfWeek,
      startTime: new Date(slot.startTime),
      endTime: new Date(slot.endTime),
      teacherId: slot.teacherId,
      availabilityStatus: slot.availabilityStatus
    }))

    try {
      const result = await prisma.availability.createMany({data: availabilities});
      res.locals.availabilities = result;
      return next()
    }
    catch(err) {
      console.log(err)
    }

  }
};

export default authenicationController;
