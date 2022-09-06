import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class SponsorsController {
    /**
     *  Get Sponsor
     */
    static async getSponsor(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Get All SponsorsP
     */
    static async getAllSponsor(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Create Sponsor
     */
    static async createSponsor(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete Sponsor
     */
    static async deleteSponsor(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Sponsor
     */
    static async updateSponsor(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
