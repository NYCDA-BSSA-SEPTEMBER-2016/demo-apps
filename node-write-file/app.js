var fs = require('fs')

fs.writeFile( __dirname + '/content.txt', "SUPER MEGA UKULELE", function(mistake){
	if (mistake) throw mistake
})