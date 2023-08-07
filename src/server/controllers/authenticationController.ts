import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import twilio from 'twilio';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

const authenicationController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    console.log('in the create user controller')
    const { firstName, lastName, email, password, phone, role } =
      req.body;
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          phone,
          role,
        },
      });
      res.locals.userid = user.id;
      return next()
    } catch (error) {
      console.log(error);
      const errObj = {
        log: 'Error occurred in createUser controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
    }
  },

  findUser: async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email
          }
      })
      console.log('found user', user)
      if(user){
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) console.log(err)
          else if (!isMatch) console.log('Password does not match')
          else {
            console.log('found user');
            res.locals.userData = user;
            return next();
          }
        })
      } else {
        const errObj = {
          log: 'Error occurred in findUser controller: User not found',
          status: 400,
          message: { err: 'No account found with this email address.' },
        };
        return next(errObj);
      }
    }
    catch (error) {
      console.log(error);
      const errObj = {
        log: 'Error occurred in findUser controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
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
    catch(error) {
      console.log(error)
      const errObj = {
        log: 'Error occurred in updateSchedule controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
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
    } catch(error) {
      console.log('Error: ', error)
      const errObj = {
        log: 'Error occurred in findTeachers controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
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
    } catch (error) {
      console.log('Error getting times: ', error)
      const errObj = {
        log: 'Error occurred in getTimes controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
    }
  },

  getBookings: async (req: Request, res:Response, next:NextFunction) => {
    const { date }  = req.body;
    try {
      const response = await prisma.booking.findMany({
        where: {
          date
        }
      })
      console.log('these are bookings', response)
      res.locals.bookings = response;
      return next()
    } catch (error) {
      console.log('Error: ', error)
      const errObj = {
        log: 'Error occurred in getBookings controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
    }
  },

  bookLesson: async (req: Request, res:Response, next:NextFunction) => {
    console.log('in the bookLesson middleware');
    const {studentId, teacherId, startDateTime, endDateTime, date } = req.body;

    try {
      const response = await prisma.booking.create({
        data: {
          startDateTime,
          endDateTime,
          date,
          student: {
            connect: { id: studentId },
          },
          teacher: {
            connect: { id: teacherId },
        },
      },
      include: {
        teacher: true,
        student: true
      }
    })

      res.locals.newBooking = response;

      return next();
    } catch(error) {
      console.log('Error: ', error)
      const errObj = {
        log: 'Error occurred in bookLesson controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
    }

  },

  sendTextMessage: async (req: Request, res:Response, next: NextFunction) => {
    //need teacher's phone number, date and time of booking, student's name
    const {firstName, lastName } = res.locals.newBooking.student;
    const {startDateTime, date} = res.locals.newBooking;
    const {bookedTime} = req.body

    try {
      const response = await client.messages.create({
        to: res.locals.newBooking.teacher.phone,
        from: process.env.PHONE,
        body: `BOOKING CONFIRMATION - One lesson with ${firstName} ${lastName} on ${date.toLocaleDateString('en-US')} at ${bookedTime}`
      })
      console.log(response.sid)
      return next();
    } catch(error){
      console.error('Failed to send SMS: ', error)
      const errObj = {
        log: 'Error occurred in sendTextMessage controller',
        status: 400,
        message: { err: error },
      };
      return next(errObj);
    }
  }
  
};

export default authenicationController;
