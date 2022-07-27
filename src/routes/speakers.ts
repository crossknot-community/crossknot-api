import express from 'express'
import controller from '@controllers/speakers/index'
import isAuthenticated from '@middlewares/auth'

const router = express.Router()

// get event
router.get('/:speakerId', isAuthenticated, controller.getSpeaker)

export default router
