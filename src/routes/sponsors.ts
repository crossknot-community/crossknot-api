import express from 'express'
import controller from '@controllers/sponsors/index'
import isAuthenticated from '@middlewares/auth'

const router = express.Router()

// get event
router.get('/:sponsorId', isAuthenticated, controller.getSponsor)

export default router
