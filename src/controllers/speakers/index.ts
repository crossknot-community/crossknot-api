import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class SpeakersController {
    /**
     *  Get Speaker
     */
    static async getSpeaker(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Get All speakers
     */
    static async getAllSpeaker(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Create Speaker
     */
    static async createSpeaker(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete Speaker
     */
    static async deleteSpeaker(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Speaker
     */
    static async updateSpeaker(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
