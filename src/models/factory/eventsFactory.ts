import prisma from '@lib/prisma'
import { Events, SpekersInEvents, SponsorsInEvents } from '@prisma/client'

export default class EventFactory {
    /**
     * Get event by id
     */
    static async getEvent(id: string): Promise<Events> {
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

    /**
     * Get all event
     */
    static async getAllEvent(): Promise<Events[]> {
        // TODO add some filters here
        const events = await prisma.events.findMany()

        return events
    }

    /**
     * create event
     */
    static async createEvent(eventData: Events): Promise<Events> {
        const event = await prisma.events.create({
            data: {
                ...eventData,
            },
        })

        return event
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
    static async getSpeakers(eventId: string): Promise<SpekersInEvents[]> {
        const speakers = await prisma.spekersInEvents.findMany({
            where: {
                eventId,
            },
        })

        return speakers
    }

    /**
     * Get sponsors list
     */
    static async getSponsors(eventId: string): Promise<SponsorsInEvents[]> {
        const sponsors = await prisma.sponsorsInEvents.findMany({
            where: {
                eventId,
            },
        })

        return sponsors
    }

    /**
     * Delete event
     */
    static async deleteEvent(eventId: string): Promise<void> {
        await prisma.events.delete({
            where: {
                id: eventId,
            },
        })
    }
}
