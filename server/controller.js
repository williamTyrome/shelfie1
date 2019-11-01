module.exports(req, res) = {
    getAllUseres(req,res) {
        const db = req.app.get('db')
        db.get_all_users()
        .then(result => {
            res.status(200).send(results)
        })
        .catch(err => {
            console.log(err)
        })
    },
}