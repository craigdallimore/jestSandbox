///////////////////////////////////////////////////////////////////////////////
//
// Just a simple test
//
///////////////////////////////////////////////////////////////////////////////

'use strict';

const { empty } = require('ramda');

//// TESTS ////////////////////////////////////////////////////////////////////

describe('Src', () => {

  it('should pass', () => {
	const x = empty('unicorns');
    expect(x).toBe('');
  });

});

///////////////////////////////////////////////////////////////////////////////
