/**
 * Check which styling transform attribute is available
 *
 * Returns a string of the applicable transform css value. Useful for when you have to check/set transform
 * values without some library handling the browser support for you.
 *
 */

function transformSupport() {

    var arr = [
        'msTransform',
        'OTransform',
        'MozTransform',
        'WebkitTransform',
        'transform',
    ]

    for(var i = arr.length; i--;) {
        if (document.createElement('div').style[arr[i - 1]] !== undefined) {
            return arr[i - 1]
        }
    }
    return false
}
