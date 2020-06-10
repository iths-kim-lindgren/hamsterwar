const { Router } = require('express');
let router = new Router();
let { db } = require('../firebase')

router.get('/api/top', async (req, res) => {
 
    try {
        let games = await db.collection('hamsters').orderBy('wins', "desc").limit(5).get();
        let toplist = [];
        
        games.forEach(game => {
        toplist.push(game.data())
        });
        
        res.send({ toplist: toplist })
    }
    catch(err){
        console.error(err)
    }
    
   })


router.get('/api/bottom', async (req, res) => {
 
    try {
        let games = await db.collection('hamsters').orderBy('defeats', "desc").limit(5).get();
        let toplist = [];
        
        games.forEach(game => {
        toplist.push(game.data())
        });
        
        res.send({ toplist: toplist })
    }
    catch(err){
        console.error(err)
    }
    
   })

module.exports = router;