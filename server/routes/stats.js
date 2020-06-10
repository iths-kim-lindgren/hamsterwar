const { Router } = require('express');
let router = new Router();
let { db } = require('../firebase')

router.get('api/total', async (req, res) => {
    
    try {

         let games = await db.collection('games').get();
         
         res.send({ totalGames: games._size })
    }
    catch(err){
        console.error(err)
    }
 
})

router.get('api/middleage', async (req, res) => {

    try {
        let hamsters = await db.collection('hamsters').get();
        let hamsterList = [];
        
        hamsters.forEach(hamster => {
        hamsterList.push(hamster.data().age)
        });
        hamsterList = (hamsterList.reduce((a, b) => a + b) / hamsterList.length)
        res.send({ "Middle age": hamsterList })
    }
    catch(err){
        console.error(err)
    }
   })

router.get('api/:favFood', async (req, res) => {

    try {
        let hamsters = await db.collection('hamsters').where("favFood", "==", req.params.favFood).get();
        let hamsterList = [];
        
        hamsters.forEach(hamster => {
        hamsterList.push(hamster.data())
        });
        
        res.send({ hamsterList: hamsterList })
    }
    catch(err){
        console.error(err)
    }
   })


module.exports = router;