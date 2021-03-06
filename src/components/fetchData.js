const fetch = require('node-fetch')

export async function getStats() {
    let baseUrl = 'charts/api';
    try {

        console.log("fetchURL:", baseUrl + '/top')
        const response1 = await fetch(baseUrl + '/top');
        const statsObj1 = await response1.json();

        const response2 = await fetch(baseUrl + '/bottom');
        const statsObj2 = await response2.json();

        return {
            top: statsObj1,
            bottom: statsObj2
        }
    } catch (e) {
        console.log('Fetch failed because', e);
        return null;
    }
}

export async function postBattle(battleObject) {
    try {
        await fetch('/games',
            { method: 'POST', headers: null, body: battleObject })
    }

    catch (e) {
        console.error('Fetch failed because', e)
        return null
    }
}

export async function killHamster(hamster) {
    try {
        await fetch(`/hamsters/api/${hamster.id}/kill-hamster`,
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hamster: hamster
            })
        })

        console.log("frontend", hamster)
        await fetch(`/hamsters/api/${hamster.id}/kill-hamster`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hamster: hamster
            })
        })

    console.log("postHamster har körts")

    }
    catch (e) {
        console.error(e)
    }
}


export async function postHamster(name, age) {
        try {

            await fetch('/hamsters/api/new-hamster',
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: name,
                        age: age
                    })
                })
            console.log("postHamster har körts")
        }
        catch (e) {
            console.error(e)
        }
    }

    export async function getLivingHamsters() {
        try {
            const response = await fetch('/hamsters/api')
            const hamstersObj = await response.json()
            return hamstersObj
        }
        catch (e) {
            console.log('Fetch failed because', e)
            return null
        }
    }

    export async function putBattleStats(hamsterID, outcome) {
        try {
            if (outcome === "win") {
                await fetch(`/hamsters/${hamsterID}/results`,
                    {
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            hamsterID: hamsterID,
                            wins: 1
                        })
                    })

            } else if (outcome === "defeat") {
                await fetch(`/hamsters/${hamsterID}/results`,
                    {
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            hamsterID: hamsterID,
                            defeats: 1
                        })
                    })

            }
        }
        catch (e) {
            console.error('Fetch failed because', e)
            return null
        }
    }

    export async function getHamsterImages(index) {
        try {
            const response = await fetch(`/images/${index}`)
            const imageObj = await response.json()
            // console.log(imageObj)

            return imageObj
        }
        catch (e) {
            console.log('Fetch failed because', e)
            return null
        }
    }

    export async function getBattles() {
        try {
            const response = await fetch(`/games`)
            const data = await response.json()
            console.log(data)
            console.log(data.length)

            return data.length
        }
        catch (e) {
            console.log('Fetch failed because', e)
            return null
        }
    }

    export async function getChampions(hamster1, hamster2) {

        if (hamster1 && hamster2) {
            console.log("jahaja")
            return [hamster1, hamster2]
        }

        let array = await getLivingHamsters()
        let rand1 = Math.floor(Math.random() * array.length)
        let rand2 = Math.floor(Math.random() * array.length)

        do {
            rand2 = Math.floor(Math.random() * array.length);
        } while (rand1 === rand2);

        array[rand1].imgURL = await getHamsterImages(array[rand1].imgName)
        array[rand2].imgURL = await getHamsterImages(array[rand2].imgName)

        console.log({ hamster1: array[rand1], hamster2: array[rand2] })

        return ([array[rand1], array[rand2]])

    }