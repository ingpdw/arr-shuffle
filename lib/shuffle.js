/*
 * shuffle - lib/shuffle.js
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = function( array ) {
  var currIdx = array.length, tmp, randomIdx;
  while( 0 !== currIdx ) {
    randomIdx = Math.floor( Math.random() * currIdx );
    currIdx -= 1;

    tmp = array[ currIdx ];
    array[ currIdx ] = array[ randomIdx ];
    array[ randomIdx ] = tmp;
  }

  return array;
};
