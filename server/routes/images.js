const { Router } = require('express');
let router = new Router();
let { auth, db, storage } = require('../firebase')

router.get('/', async (req, res) => {
 
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

// // Create a reference with an initial file path and name
// // var storage = firebase.storage();
// var pathReference = storage.ref('images/stars.jpg');

// // Create a reference from a Google Cloud Storage URI
// var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

// storageRef.child('hamster-1.jpg').getDownloadURL().then(function(url) {
//     // `url` is the download URL for 'images/stars.jpg'
  
//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = function(event) {
//       var blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();
  
//     // Or inserted into an <img> element:
//     var img = document.getElementById('myimg');
//     img.src = url;
//   }).catch(function(error) {
//     // Handle any errors
//   });


  module.exports = router;