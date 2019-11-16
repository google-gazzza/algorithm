# https://www.codewars.com/kata/create-phone-number/

arr_to_str = lambda arr: ''.join([str(x) for x in arr])
create_phone_number = lambda n: f"({arr_to_str(n[0:3])}) {arr_to_str(n[3:6])}-{arr_to_str(n[6:])}"

print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

# const createPhoneNumber = (num) => `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`
#   .replace(/,/g, '');
#
# console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
# // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
