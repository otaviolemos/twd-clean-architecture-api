import { Router } from 'express'
import { makeRegisterAndSendEmailController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterAndSendEmailController()))
}
