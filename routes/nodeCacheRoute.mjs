import { Router } from "express";
import { nodeCacheMiddleware } from "../middlewares/main.mjs"
import { nodeCacheController } from "../controllers/nodeCache.mjs"

const router = Router()


router.get("/node-cache", nodeCacheMiddleware, nodeCacheController)

export default router