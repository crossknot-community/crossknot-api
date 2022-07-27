import express from 'express'
import controller from '@controllers/team/index'
import isAuthenticated from '@middlewares/auth'

const router = express.Router()

// get team
router.get('/', isAuthenticated, controller.getTeam)

export default router
