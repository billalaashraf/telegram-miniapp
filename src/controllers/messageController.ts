import { Request, Response } from 'express';
import responseEngine from '../services/response_engine';

export default class MessageController {
  public static receiveMessage(req: Request, res: Response): void {
    console.log(req.body);
    responseEngine(req.body);
    res.send("")
  }

}