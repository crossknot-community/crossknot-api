import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class SpeakersController {
    /**
     *  Get speaker
     */
    static async getSpeaker(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
