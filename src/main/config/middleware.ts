import { Express } from 'express'
import { bodyParser } from '@/main/config/middleware/body-parser'

export default (app: Express): void => {
  app.use(bodyParser)
}
