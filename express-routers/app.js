const express = require( 'express' )
const app	  = express()

console.log('Starting app')

app.use( '/resources', express.static('static') )

app.get('/ping', (req, res)=>{
	console.log('Someone opened the main page')
	res.send( 'pong' )
})

app.get('/home', (req, res) => {
	res.sendFile( __dirname + '/static/index.html' )
})

app.listen(8000, ()=>{
	console.log('Express listening')
})