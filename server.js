
const express = require('express');
const request = require('request');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv').config();
const Discogs = require('disconnect').Client;
var discogsClient = new Discogs({userToken: process.env.DISCOGS_ACCESS_TOKEN});
// 

// app.get('/authorize', function(req, res){
//    var oAuth = discogsClient.oauth();
//   oAuth.getRequestToken(
//       'DISCOGS_CONSUMER_KEY', 
//       'DISCOGS_CONSUMER_SECRET', 
//       'http://your-script-url/callback', 
//       function(err, requestData){
//           // Persist "requestData" here so that the callback handler can 
//           // access it later after returning from the authorize url
//           res.redirect(requestData.authorizeUrl);       }
//   );
//  });

// var db = new Discogs(accessData).database();
// db.getRelease(176126, function(err, data){
//     var url = data.images[0].resource_url;
//     db.getImage(url, function(err, data, rateLimit){
//         // Data contains the raw binary image data
//         require('fs').writeFile('/tmp/image.jpg', data, 'binary', function(err){
//             console.log('Image saved!');
//         });
//     });
// });

// app.get('/api/artists/:artist', (req, res) => {
//     let our_collection = discogsClient.user().collection();
//     our_collection.getReleases('CrateDiggingPHL', 0, {page: 1, per_page: 10}, function(err, data){
//       console.log(data);
//       res.json(data.releases);
//     });

// });


app.get('/api/all', (req, res) => {

  let our_collection = discogsClient.user().collection();
  our_collection.getReleases('CrateDiggingPHL', 0, {page: 1, per_page: 5}, function(err, data){
    console.log(data);
    res.json(data);
  });

});


// const db = new Discogs().database();

// db.getRelease(176126, function(err,data){
//     console.log(data);
// })
//===========================================================
//'https://api.discogs.com/database/search?q=""&key=TdbxdWKhTsvDMeyGwMjo&secret=rGyJApBaiThMaMLmgcQUuMsGBMNgHSBe'
//Huge object 

  /*
  let artist = req.params.artist.replace(' ', '+'); 
  axios.get('https://api.discogs.com/database/search?q="'+artist+')
    .then(response => {

      console.log(response.data.results[1].uri);
      console.log(response.data.results);
      res.json(response.data.results);
      // console.log(response.data.);
    })
    .catch(error => {
      console.log(error);
    }

    );
    */
// axios.get('https://www.discogs.com/user/CrateDiggingPHL/collection/covers?sort_by=artists_sort&sort_order=desc')
// .then(response => {
//   console.log(response.data.results);
// });  
//=================================================================
//This works in console//

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);

//   })
//   .catch(error => {
//     console.log(error);
//   });


//========================================================================
//This is from react express starter example

// // app.get('/api/customers', (req, res) => {
// //   const customers = [
// //     { id: 1, firstName: 'John', lastName: 'Schmitt' },
// //     { id: 2, firstName: 'Joni', lastName: 'Bologna' },
// //     { id: 3, firstName: 'J', lastName: 'J-Bee' }
// //   ];

// app.get('/api/movie', (req, res) => {
//   // let movie = [ {Title: " ", Year:" ", Runtime: " "}];
//   //   // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
//   //   // Grab the movieName which will always be the third node argument.
//   let movieName = "big";

//   //   // Then run a request to the OMDB API with the movie specified
//   var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//   //   // This line is just to help us debug against the actual URL.
//   console.log(queryUrl);
//   request(queryUrl, function (error, response, body) {
//     //     // If the request is successful
//     if (!error && response.statusCode === 200) {

//       //       // Parse the body of the site and recover just the imdbRating
//       //       // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//       console.log("Title: " + JSON.parse(body).Title); }



const port = 5000;
app.listen(port, () => console.log`Server listening on port ${port}`);

