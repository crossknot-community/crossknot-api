import prisma from '@lib/prisma'
import { Events } from '@prisma/client'

export default class AdminFactory {
    /**
     * Get all events
     */
    public static async getAllEvents(): Promise<Events[]> {
        const events = await prisma.events.findMany({
            include: {
                speakers: true,
                sponsors: true,
            },
        })

        return events
    }
}
