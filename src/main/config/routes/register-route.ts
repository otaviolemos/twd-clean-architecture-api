import { Router } from 'express'
import { makeRegisterUserController } from '@/main/factories'
import { adaptRoute } from '@/main/config/adapters/'

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterUserController()))
}
