/**
 * empty for phpjs
 * extended function from the original here: http://phpjs.org/functions/empty
 *
 * example 1: empty("anything")
 * returns 1: false
 * example 2: empty("")
 * returns 2: true
 */
function empty(mixed_var) {
	return !!(mixed_var === "" || mixed_var === 0 || mixed_var === "0" || mixed_var === null || mixed_var === false || mixed_var === undefined || isNaN(parseFloat(mixed_var)));
}
