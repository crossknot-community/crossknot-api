import prisma from '@lib/prisma'
import { Sponsors } from '@prisma/client'

export default class SponsorsFactory {
    /**
     * Get all events
     */
    public static async getSponsor(email: string): Promise<Sponsors> {
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
}
