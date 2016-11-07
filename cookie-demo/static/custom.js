$( document ).ready( function(  ) {
	if( !Cookies.get( 'visited' ) ) {
		Cookies.set( 'visited', 'true' )
		$( '#container' ).html( 'Welcome stranger!' )
	} else {
		$( '#container' ).html( 'Welcome back!' )
	}
} )