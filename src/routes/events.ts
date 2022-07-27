import express from 'express'
import controller from '@controllers/events/index'
import isAuthenticated from '@middlewares/auth'

const router = express.Router()

// get event
router.get('/:eventId', isAuthenticated, controller.getEvent)

export default router
