import express from 'express'
import setupMiddleware from '@/main/config/middleware'

const app = express()
setupMiddleware(app)

export default app
