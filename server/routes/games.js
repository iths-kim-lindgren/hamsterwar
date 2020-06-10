const { Router } = require('express');
let router = new Router();
let { db } = require('../firebase')

router.post('/', async (req, res) => {
    
    // skapar ett tomt dokument i games (skapar games om den inte finns)
    let docRef = await db.collection('games').doc()

    // sätter innehållet i dokumentet till id, timestamp och innehållet i req.body
    await docRef.set({
        id: docRef.id,
        timestamp: Date.now(),
        ...req.body
    })

    res.send({ msg: 'Game posted.'})
})

router.get('/', async (req, res) => {    

    try {
        let games = []
        let snapShots = await db.collection('games').get()

        snapShots.forEach(doc => {
            games.push(doc.data())
        })

        res.send(games)
    }
    catch (error) {
        console.error(error)
    }
})


module.exports = router;