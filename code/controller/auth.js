exports.authorize = async function (req,res){
    try {
        console.log('Started auth procedure');
        var {
            email,
            pwd
        } = req.body

        console.log(email,pwd, "\n");

        if(!email || !pwd){
            res.sendStatus(401)
            return
        }

        if(email == 'email@usuario.com.br' && pwd == '123456@'){
            id = '2020'
            role = 'COMMON'
            token = email + id + role
            
            console.log('\n',token);

            res.send({
                'status':200,
                'token': token
            })
            return
        }

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
        return
    }
}
