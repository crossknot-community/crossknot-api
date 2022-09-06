import prisma from '@lib/prisma'
import { Sponsors, SponsorsInEvents } from '@prisma/client'

export default class SponsorsFactory {
    /**
     * Get all events
     */
    static async getSponsor(email: string): Promise<Sponsors> {
        const sponsor = await prisma.sponsors.findFirst({
            where: {
                email,
            },
            include: {
                events: true,
            },
        })

        return sponsor
    }

    /**
     * Get all event
     */
    static async getAllSponsors(): Promise<Sponsors[]> {
    // TODO add some filters here
        const sponsors = await prisma.sponsors.findMany()

        return sponsors
    }

    /**
 * create event
 */
    static async createSponsor(sponsorsData: Sponsors): Promise<Sponsors> {
        const sponsor = await prisma.sponsors.create({
            data: {
                ...sponsorsData,
            },
        })

        return sponsor
    }

    /**
 * Update name of the event
 */
    static async updateName(id: string, updatedName: string): Promise<Events> {
        const event = await prisma.events.update({
            where: {
                id,
            },
            data: {
                name: updatedName,
            },
        })

        return event
    }

    /**
 * Get speakers list
 */
    static async getEvents(sponsorEmail: string): Promise<SponsorsInEvents[]> {
        const events = await prisma.sponsorsInEvents.findMany({
            where: {
                sponsorEmail,
            },
        })

        return events
    }

    /**
 * Delete event
 */
    static async deleteSponsors(sponsorEmail: string): Promise<void> {
        await prisma.sponsors.delete({
            where: {
                email: sponsorEmail,
            },
        })
    }
}
