import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 }) // 60 seconds

export const nodeCacheController = async (req, res) => {

    try {

        const data =
        {
            name: "Abdul Ahad",
            age: 19,
        }

        cache.set(req?.originalUrl, data);

        res.send(data)

    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: "internal server error",
            error: error?.message
        })
    }

}