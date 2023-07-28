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
      res.locals.userData = user
      return next()
    }
    catch (error) {
      console.log(error);
    }
  },

  updateSchedule: async (req: Request, res: Response, next: NextFunction) => {
    console.log('in the updateSchedule controller')
    const schedule = req.body;
  
    const availabilities = schedule.map((slot: { dayOfWeek: string; startTime: Date | string | number; endTime: Date | string | number; teacherId: string; availabilityStatus: string; }) => {
      if(slot.startTime === "" || slot.endTime === "") {
        slot.startTime = 1000;
        slot.endTime = 1000;
        slot.availabilityStatus = 'UNAVAILABLE'
      }

      return {
      dayOfWeek: slot.dayOfWeek,
      startTime: new Date(slot.startTime),
      endTime: new Date(slot.endTime),
      teacherId: slot.teacherId,
      availabilityStatus: slot.availabilityStatus
      }})

      console.log(availabilities)
    

    try {
      const result = await prisma.availability.createMany({data: availabilities});
      res.locals.availabilities = result;
      return next()
    }
    catch(err) {
      console.log(err)
    }

  },

  findTeachers: async (req: Request, res: Response, next: NextFunction) => {
    console.log('in the findTeachers function');
    try {
      const response = await prisma.user.findMany({
        where: {
          role: 'TEACHER'
        }
      });
      console.log('response', response)
      res.locals.teachers = response
      return next()
    } catch(e) {
      console.log('Error: ', e)
    }
  },

  getTimes: async (req: Request, res: Response, next: NextFunction) => {
    console.log('in the getTimes controller');
    const {teacherId, dayOfWeek} = req.body
    console.log(teacherId)
    console.log(dayOfWeek)
    
    try{
      const response = await prisma.availability.findMany({
        where: {
          teacherId: teacherId,
          dayOfWeek: dayOfWeek,
          availabilityStatus: 'AVAILABLE'
        }
      });
      console.log(response);
      res.locals.times = response
      return next();
    } catch (e) {
      console.log('Error getting times: ', e)
    }
  },

  bookLesson: async (req: Request, res:Response, next:NextFunction) => {
    console.log('in the bookLesson middleware');
    const {studentId, teacherId, startDateTime, endDateTime } = req.body;

    try {
      const response = await prisma.booking.create({
        data: {
          startDateTime,
          endDateTime,
          student: {
            connect: { id: studentId },
          },
          teacher: {
            connect: { id: teacherId },
        },
      }
    })
      return next();
    } catch(error) {
      console.log('Error: ', error)
    }

  }
};

export default authenicationController;
