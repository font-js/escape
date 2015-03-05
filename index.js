/**
 * Escape module
 * escape special characters
 * @authors Qv (foru.fy@gmail.com)
 * @date    2015-03-05 18:10:52
 * @version 0.0.1
 */

'use strict';

function Escape() {}
Escape.prototype = {

	version : '0.0.1',

	/**
	 * escape special characters in the given string of html.
	 *
	 * @param {String} html
	 * @return {String}
	 * api private
	 */

	html: function(html) {
		return String(html)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}


}