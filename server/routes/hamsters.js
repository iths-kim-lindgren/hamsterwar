const { db } = require('./../firebase')
const { Router } = require('express');

const router = new Router();

router.get('/', async (req, res) => {
    try {
        let hamsters = []
        let snapShots = await db.collection('hamsters').get()

        snapShots.forEach(doc => {
            hamsters.push(doc.data())
        })

        res.send(hamsters)
    }
    catch (error) {
        console.error(error)
    }

})

router.get('/api/random', async (req, res) => {
    
    try {
        let hamsters = []
        let snapShots = await db.collection('hamsters').get()
        snapShots.forEach(doc => {
            hamsters.push(doc.data())
        })
        let rand = Math.floor(Math.random() * hamsters.length)
        console.log(hamsters[rand])
        res.send(hamsters[rand])
    }
    catch (err) {
        console.error(err)
    }
})

router.get('api/:id', async (req, res) => {
    try {
        let hamsters = []
        let snapShots = await db.collection('hamsters').where("id", "==", parseInt(req.params.id)).get()
        snapShots.forEach(doc => {
            hamsters.push(doc.data())
        })
        console.log(hamsters)
        res.send(hamsters[0])
    }
    catch (err) {
        console.error(err)
    }
})

router.put('api/:id/results', async (req, res) => {
    try {
        let hamsters = []
        let snapShots = await db.collection('hamsters').where("id", "==", parseInt(req.params.id)).get()
        snapShots.forEach(doc => {
            hamsters.push(doc.data())
        })
        if (req.body.wins == 1) {
            hamsters[0].wins++
            res.send(`${hamsters[0].name} now has ${hamsters[0].wins} wins!`)
        } else if (req.body.defeats == 1) {
            hamsters[0].defeats++
            res.send(`${hamsters[0].name} now has ${hamsters[0].defeats} defeats!`)
        } else {
            throw ("You must either increase wins or defeats by 1")
        }
        hamsters[0].games++
        db.collection('hamsters').doc(req.params.id).set(hamsters[0])
    }
    catch (err) {
        console.error(err)
    }
})

module.exports = router;