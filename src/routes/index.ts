import express from 'express'
import teamRoutes from '@routes/team'
import eventsRoutes from '@routes/events'
import sponsorsRoutes from '@routes/sponsors'
import speakersRoutes from '@routes/speakers'

const router = express.Router()

router.use('/team', teamRoutes)
router.use('/sponsors', sponsorsRoutes)
router.use('/events', eventsRoutes)
router.use('/speakers', speakersRoutes)

export default router
