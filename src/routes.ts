import {Router} from 'express'

import { ValidationEmailController } from './controllers/validation-email-controller'

const emailValidatorController = new ValidationEmailController()

const router = Router()


router.post('/', emailValidatorController.handle)

export default router