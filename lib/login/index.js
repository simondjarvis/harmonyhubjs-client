var debug = require('debug')('harmonyjs:login')
	, auth = require('./auth')
	, loginToHub = require('./hub');

/** Function: login
 * Retrieves a UserAuthToken using a valid Harmony account and logs in to a
 * local Harmony hub. If everything runs fine, the returned promise resolves by
 * passing a logged in XMPP client which provied communications to the Hamrony
 * hub.
 *
 * Parameters:
 *     (String) email - E-mail address of a Harmony account
 *     (String) password - Password of a Harmony account
 *     (String) hubhost - Hostname/IP of the Harmony hub to login to.
 *     (int) hubport - Optional. Port of the Harmony hub to login to.
 *
 * Returns:
 *     (Q.promise) - When resolved, the promise passes a prepared XMPP client,
 *                   ready to communicate with the Harmony hub.
 */
function login(email, password, hubhost, hubport) {
	debug('perform loging');

	return auth(email, password)
	.then(function(userAuthToken) {
		return loginToHub(userAuthToken, hubhost, hubport);
	});
}

module.exports = login;