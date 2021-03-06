'use strict';

/**
 * Dummy authentication module that just uses player TSIDs as tokens.
 * Only to be used for development/testing, obviously.
 *
 * @module
 */

// public interface
module.exports = {
	authenticate: authenticate,
	getToken: getToken,
	getTokenLifespan: getTokenLifespan,
};


function authenticate(token) {
	return token;
}


function getToken(player) {
	return player.tsid;
}


function getTokenLifespan() {
	return 0;
}
