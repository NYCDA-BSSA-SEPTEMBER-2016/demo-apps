const express = require( 'express' )
const app	  = express(  )

let pingRouter = require( __dirname + '/routes/ping' )
let duckyRouter = require( __dirname + '/routes/duck' )

app.use( '/router', pingRouter )

app.use( '/animals', duckyRouter )

app.listen( 8000, (  ) => {
	console.log( 'Server running YAY' )
 } )