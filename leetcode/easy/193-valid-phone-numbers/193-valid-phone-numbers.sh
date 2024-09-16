# 193-valid-phone-numbers
# leetcode/eash/193. Valid Phone Numbers
# URL: https://leetcode.com/problems/valid-phone-numbers/

input="file.txt"

while IFS= read -r line
do
  if [[ $line =~ ^[0-9]{3}-[0-9]{3}-[0-9]{4}$ ]]
  then
    echo $line
  fi

  if [[ $line =~ ^\([0-9]{3}\)\ [0-9]{3}-[0-9]{4}$ ]]
  then
    echo $line
  fi

done < $input


# Best Practices
# Three different solutions using grep, sed, and awk
#
# URL: https://leetcode.com/problems/valid-phone-numbers/discuss/55481/Three-different-solutions-using-grep-sed-and-awk

# NOTE: Using grep:
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt

# NOTE: Using sed:

sed -n -r '/^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/p' file.txt

# NOTE: Using awk:
awk '/^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/' file.txt
