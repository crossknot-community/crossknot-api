import { Request, Response } from 'express'
import messages from '@constants/messages'
import logger from '@utils/logger'
import EventFactory from '@factory/eventsFactory'

export default class EventsController {
    /**
     *  Get event
     */
    static async getEvent(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Create event
     */
    static async createEvent(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Get All events response
     */
    static async getAllEvent(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update event
     */
    static async updateEvent(req: Request, res:Response) {
        try {
            const { id } = req.params

            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * add speakers
     */
    static async addSpeaker(req: Request, res: Response) {
        try {
            const { id } = req.params

            logger.info('processing')
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * remove speakers
     */
    static async removeSpeaker(req: Request, res: Response) {
        try {
            const { id } = req.params

            logger.info('processing')
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * add sponsor
     */
    static async addSponsor(req: Request, res: Response) {
        try {
            const { id } = req.params

            logger.info('processing')
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
         * remove speakers
     */
    static async removeSponsor(req: Request, res: Response) {
        try {
            const { id } = req.params

            logger.info('processing')
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete event
     */
    static async deleteEvent(req: Request, res:Response) {
        try {
            const { id } = req.params
            await EventFactory.deleteEvent(id)

            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
