const request = require( 'supertest' )
const expect  = require( 'chai' ).expect

// Import the server from app.js
let server    = require( __dirname + '/../app.js' )

// Run app in testing environment
let app = request( server )

// Test whether the server works
describe( 'Testing whether the server works', f => {
	// Check if the server is online
	describe( 'Check if GET / is online', f => {
		it( 'returns a 200 status code', done => {
			app.get( '/' )
			.end( ( err, res ) => {
				expect( res.statusCode ).to.equal( 200 )
				done(  )
			} )
		} )
	} )
} )