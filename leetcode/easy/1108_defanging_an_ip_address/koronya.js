// [Easy] 1108. Defanging an IP Address
// 1108_defanging_an_ip_address

// https://leetcode.com/problems/defanging-an-ip-address
// Runtime: 68 ms, faster than 52.37% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 32.8 MB, less than 97.69% of JavaScript online submissions for Defanging an IP Address.
const defangIPaddr = address => address.split('.').join('[.]')
