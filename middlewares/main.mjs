import NodeCache from "node-cache";

const cache = new NodeCache()

export const nodeCacheMiddleware = (req, res, next) => {

    const key = req?.originalUrl;
    const cachedData = cache?.get(key);

    if (cachedData) {

        res.send(cachedData);

    } else {
        next();
    }

}