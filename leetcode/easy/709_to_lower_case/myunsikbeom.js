//Runtime: 48 ms, faster than 86.51% of JavaScript online submissions for To Lower Case.
//Memory Usage: 33.8 MB, less than 35.90% of JavaScript online submissions for To Lower Case.

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.split("").map((s) => {
        return s.charCodeAt() >= 65 && s.charCodeAt() <= 90 ? String.fromCharCode(s.charCodeAt()+32) : s;
    }).join("");
};
