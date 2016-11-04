const Sequelize = require( 'sequelize' )
const db = new Sequelize( 'ormdemo', 'mentor', 'postgres', {
	host: 'localhost',
	dialect: 'postgres'
} )
const express = require( 'express' )
const app = express(  )

app.get( '/ping', ( req, res ) => {
	res.send( 'pong' )
} )

app.get( '/hats', ( req, res ) => {

	console.log( 'Someone wants to see hats!' )
	Hat.findAll(  ).then( hats => {
		res.send( hats )
	} )

} )

app.listen( 8000, (  ) => {
	console.log( 'Server listening' )
} )

let Hat = db.define( 'hat', {
	name: Sequelize.STRING,
	material: Sequelize.STRING,
	height: Sequelize.INTEGER,
	brim: Sequelize.BOOLEAN
} )

db.sync( {force: true} ).then( (  ) => {
	console.log( 'Database synced successfully' )

	Promise.all( [ Hat.create( {
		name: "The Primary Hat",
		material: "Stardust",
		height: 42,
		brim: true
	} ),
	Hat.create( {
		name: "The Secondary Hat",
		material: "Moondust",
		height: 84,
		brim: false
	} )
	] ).then( hats => {
		console.log( 'Two hats made!' )
		Hat.findOne( {
			where: {
				name: 'The Secondary Hat'
			}
		} ).then( hat => {
			console.log( hat.name )
		} )
	} )

} )