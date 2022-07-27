import { Request, Response, NextFunction } from 'express'
import logger from '@utils/logger'

/**
 * Is Authenticated
 */
export default async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info('Authenticated')
        next()
    } catch (error) {
        return res.status(500).send('Server error occured')
    }
}
