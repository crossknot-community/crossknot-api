import prisma from '@lib/prisma'
import { Events } from '@prisma/client'

export default class EventFactory {
    /**
     * Get event by id
     */
    public static async getEvent(id: string): Promise<Events> {
        const event = await prisma.events.findFirst({
            where: {
                id,
            },
            include: {
                speakers: true,
                sponsors: true,
            },
        })

        return event
    }
}
