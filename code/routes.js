const express = require('express')
const router = express.Router()
const auth = require('./controller/auth')
const profile = require('./controller/profile')
const like = require('./controller/like')

console.log('Server up')

router.get('/health', function(req,res){
    res.status(200).send({status:'UP'})
})

router.post('/auth' , auth.authorize)
router.get('/profiles/:id' , profile.getProfile)
router.post('/like/:id' , like.likeProfile)

module.exports = router