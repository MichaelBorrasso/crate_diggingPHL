# crate_diggingPHL

Vinyl subscription app, pulling from DiscogsAPI.
using disconnect npm package

https://www.npmjs.com/package/disconnect
disconnect is a Node.js client library that connects with the Discogs.com API v2.0.
npm i disconnect

Covers all API endpoints
Supports pagination, rate limiting, etc.
All database, marketplace and user functions implement a standard function(err, data, rateLimit) format for the callback or return a native JS Promise when no callback is provided
Easy access to protected endpoints with Discogs Auth
Includes OAuth 1.0a tools. Just plug in your consumer key and secret and do the OAuth dance
API functions grouped in their own namespace for easy access and isolation
Todo


