/**
 * Escape module
 * escape special characters
 * @authors Qv (foru.fy@gmail.com)
 * @date    2015-03-05 18:10:52
 * @version 0.0.1
 */

'use strict';


! function(name, definition) {

    var hasDefine = typeof define === 'function';
    var hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) {
        // AMD or CMD module
        if (typeof define.amd === 'object') {
            define(name, definition);
        } else {
            define(definition);
        }
    } else if (hasExports) {
        // CommonJS module
        module.exports = definition();
    } else {
        // Broswer module
        this[name] = definition();
    }

}('escape', function() {

    var Escape = function() {};

    Escape.version = '0.0.1';

    Escape.prototype = {
        /**
         * escape special characters in the given string of html.
         *
         * @param {String} html
         * @return {String}
         * api private
         */
        html: function(html) {
            return String(html || (typeof html !== 'undefined' ? html.toString() : ''))
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

    };

    return Escape;
});
