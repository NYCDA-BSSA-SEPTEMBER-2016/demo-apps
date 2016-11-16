const express = require( 'express' )
const router  = express.Router(  )

router.route( '/ducky' )
	.all( ( req, res ) => {
	// Creating a random number
	let randomness = Math.random(  )
	// Loggin the random number
	console.log( 'The initial random is ' + randomness )
	// Power function, kind of
	let powerme = ( base, exp ) => {
		console.log( 'Running a power function yay' )
		let result = base
		let useless = result
		for (var i = exp - 1; i >= 0; i--) {
			result = result * base
		}
		return result
	}
	// Utterly pointless for loop
	for (var i = 20; i >= 0; i--) {
		// Very complex algorithm
		randomness ++
		// Reverse of the complex algorithm
		randomness --
		// Times 20, because 20
		randomness *= 20
		// Arrays are nice, random arrays are better
		let randomarray = [ 1, 3, 77, 99, 20, 40 ]
		// Arrays can be looped over, so I loop. For reasons.
		for (var i = randomarray.length - 1; i >= 0; i--) {
			// Adding random array numbers
			randomness += randomarray[i]
			// There is 20 again, coincidence? I think not.
			randomness / 20
		}
	}
	// Send back the randomness
	res.send( 'Randomness is: ' + randomness )
 } )

module.exports = router