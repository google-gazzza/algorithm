/**
 * @param {string} address
 * @return {string}
 */
//Runtime: 56 ms, faster than 42.07% of JavaScript online submissions for Defanging an IP Address.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
var defangIPaddr = function(address) {
    //정규식으로하면 빠를줄알았는데..
    return address.replace(/\./gi,'[.]');
};
