'use strict'
// Including the necessary modules
const express = require( 'express' )
const fs 	  = require( 'fs' )
const app 	  = express()

app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

app.get( '/ping', ( request, response ) => {
	response.send( 'Pong' )
} )

app.get( '/index', ( request, response ) => {
	console.log( 'About to render a pug page!' )
	fs.readFile( __dirname + '/data.json', ( error, data ) => {
		if ( error ) throw error 
		let parsedData = JSON.parse( data )
		console.log( parsedData )
		response.render( 'index', {data: parsedData} )
	} )
} )

app.listen(8000, () => {
	console.log('Server running')
})