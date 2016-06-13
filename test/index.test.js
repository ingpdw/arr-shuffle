var shuffle = require( '..' ),
    assert = require( 'assert' );

describe('shuffle', function() {

  it('should work', function() {
    var array = [1, 2, 3, 4, 5];

    var result = shuffle( array );

    assert( result.length, array.length );
    assert( typeof result, 'array' );
  });

  it('should work', function() {
    var array = [1, 2, 3, 4, {'key': 1}, 'string'];
    var result = shuffle( array );

    assert( result.length, array.length );
    assert( typeof result, 'array' );
    assert.notEqual( result.indexOf( 3 ), -1 );
    assert.notEqual( result.indexOf( 'string' ), -1 );
  });
});
