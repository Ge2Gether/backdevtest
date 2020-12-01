exports.likeProfile = async function (req,res){
    try {
        console.log('Started like procedure');
        var {id} = req.params
        var {
            from,
            to
         } = req.body

        const token = req.headers.authorization

        // console.log(token);

        if(!id || !from || !to){
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
                "likes": (1+1)
            }
        })
        return 

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
        return
    }
}