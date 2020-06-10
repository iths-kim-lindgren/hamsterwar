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

export async function getLivingHamsters() {
    try {
        const response = await fetch('/hamsters')
        const hamstersObj = await response.json()
        console.log(hamstersObj)

        return hamstersObj
    }
    catch(e) {
        console.log('Fetch failed because', e)
        return null
    }
}

export async function getBattlingHamsters() {
    let array = await getLivingHamsters()
    console.log(array)
    let rand1 = Math.floor(Math.random() * array.length)
    let rand2 = Math.floor(Math.random() * array.length)
    
    do {
        rand2 = Math.floor(Math.random() * array.length);
    } while(rand1 === rand2);

    console.log({hamster1: array[rand1], hamster2: array[rand2]})

    return ([array[rand1], array[rand2]])

}