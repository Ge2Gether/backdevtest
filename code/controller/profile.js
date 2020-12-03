const firebase =  require('../firebase')

exports.getProfile = async function (req,res){
    try {
        
        console.log('Started profile procedure');
        var {id} = req.params
        const token = req.headers.authorization
        var info = firebase.getInfo(id)

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
                "id": 123, //info.id
                "name": "Nome perfil", //indo.name
                "likes": 1 //info.likes
            }
        })
        return

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
        return
    }
}