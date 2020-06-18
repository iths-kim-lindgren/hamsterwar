const { db } = require('./../firebase')
const { Router } = require('express');

const router = new Router();

router.get('/api', async (req, res) => {
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
        res.send(hamsters[rand])
    }
    catch (err) {
        console.error(err)
    }
})

router.get('/api/:id', async (req, res) => {
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

router.post('/api/new-hamster', async (req, res) => {
    
    // skapar ett tomt dokument i newHamsters (skapar newHamsters om den inte finns)
    let docRef = await db.collection('newHamsters').doc()

    // sätter innehållet i dokumentet till id, timestamp och innehållet i req.body
    await docRef.set({
        id: docRef.id,
        timestamp: Date.now(),
        ...req.body
    })

    res.send({ msg: 'New hamster posted.'})
})


router.delete('/api/:id/kill-hamster', async (req, res) => {
    
    db.collection("hamsters").doc(`${id}`).delete().then(function() {
        console.log("Hamster deleted!");
    }).catch(function(error) {
        console.error("Error deleting hamster: ", error);
    });
})

router.post('api/:id/kill-hamster'), async (req, res) => {
    let docRef = await db.collection('deadHamsters').doc()
    
    // skicka in levande hamster hit för att kopieras
    await docRef.set({
        id: docRef.id,
        timestamp: Date.now(),
        ... req.body
    })
}

router.delete('/api/id:/revive-hamster', async (req, res) => {
    
    // skapar ett tomt dokument i newHamsters (skapar newHamsters om den inte finns)
    let docRef = await db.collection('newHamsters').doc()

    // sätter innehållet i dokumentet till id, timestamp och innehållet i req.body
    await docRef.set({
        id: docRef.id,
        timestamp: Date.now(),
        ...req.body
    })

    db.collection("deadHamsters").doc(`${id}`).delete().then(function() {
        console.log("Hamster deleted!");
    }).catch(function(error) {
        console.error("Error deleting hamster: ", error);
    });

    res.send({ msg: 'New hamster posted.'})
})



router.put('/:id/results', async (req, res) => {
    try {
        console.log("Updating results...")
        console.log(req.body)
        let hamsters = []
        console.log(req.params.id)
        let snapShots = await db.collection('hamsters').where("id", "==", parseInt(req.params.id)).get()
        snapShots.forEach(doc => {
            hamsters.push(doc.data())
        })
        if (req.body.wins == 1) {
            console.log("wins before", hamsters[0].wins)
            hamsters[0].wins++
            console.log("wins after", hamsters[0].wins)
            // res.send(`${hamsters[0].name} now has ${hamsters[0].wins} wins!`)
            // res.send(hamsters[0].wins++)
        } else if (req.body.defeats == 1) {
            console.log("defeats before", hamsters[0].defeats)
            hamsters[0].defeats++
            console.log("defeats", hamsters[0].defeats)
            // res.send(`${hamsters[0].name} now has ${hamsters[0].defeats} defeats!`)
            // res.send(hamsters[0].defeats++)
        } else {
            throw ("You must either increase wins or defeats by 1")
        }
        // res.sendStatus(hamsters[0].games++)
        db.collection('hamsters').doc(req.params.id).set(hamsters[0])
        res.sendStatus(200)
        return
    }
    catch (err) {
        console.error(err)
    }
})

module.exports = router;