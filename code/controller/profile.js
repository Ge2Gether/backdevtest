exports.getProfile = async function (req,res, id=0){
    try {
        console.log('Started profile procedure');
        var {id} = req.params
        const token = req.headers.authorization

        // console.log(token);

        if(!id){
            res.sendStatus(404)
            return
        }
        if(!token || token != "bearer email@usuario.com.br2020COMMON" ){
            res.sendStatus(401)
            return
        }

        res.send({
            status:200,
            data: {
                "id": 123,
                "name": "Nome perfil",
                "likes": 1
            }
        })
        return

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
        return
    }
}