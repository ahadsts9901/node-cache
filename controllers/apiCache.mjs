export const apiCacheController = async (req, res) => {

    try {

        const data =
        {
            name: "Abdul Ahad",
            age: 19,
        }

        res.send(data)

    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: "internal server error",
            error: error?.message
        })
    }

}