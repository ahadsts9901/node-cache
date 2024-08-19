import { Router } from "express";
import apiCache from "apicache"
import { apiCacheController } from "../controllers/apiCache.mjs";

const router = Router()

const cache = apiCache.middleware

router.get("/api-cache", cache('60 seconds'), apiCacheController)

export default router