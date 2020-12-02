const firebase =  require('../firebase')

exports.likeProfile = async function (req,res){
    try {
        console.log('Started like procedure');
        var {id} = req.params
        var {
            from,
            to
         } = req.body

        const token = req.headers.authorization
        var info = firebase.getInfo(id)
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
                "id": 123, //info.id
                "name": "Nome perfil", //info.name
                "likes": (1+1) //info.likes
            }
        })
        return 

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
        return
    }
}