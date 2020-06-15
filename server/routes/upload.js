const { Router } = require('express');
let router = new Router();
let { db } = require('../firebase')

router.post('/', async (req, res) => {
    
    // skapar ett tomt dokument i games (skapar games om den inte finns)
    let docRef = await db.collection('hamsters').doc()

    // sätter innehållet i dokumentet till id, timestamp och innehållet i req.body
    await docRef.set({
        id: docRef.id,
        timestamp: Date.now(),
        ...req.body
        //  {"name": string,
        // "age": number,
        // img: imgSrc??? }
     
    })

    res.send({ msg: 'Game posted.'})
})

module.exports = router;