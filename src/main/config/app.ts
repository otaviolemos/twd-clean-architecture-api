import express from 'express'
import setupMiddleware from '@/main/config/middleware'
import setupRoutes from '@/main/config/routes'

const app = express()
setupMiddleware(app)
setupRoutes(app)

export default app
