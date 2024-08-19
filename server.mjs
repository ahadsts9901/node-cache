import express, { json } from "express"

import nodeCacheRoutes from "./routes/nodeCacheRoute.mjs"
import apiCacheRoutes from "./routes/apiCacheRoute.mjs"

const app = express()

app.use(json())

app.use("/api/v1", nodeCacheRoutes)
app.use("/api/v1", apiCacheRoutes)

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`server running on port ${PORT}`))