// https://www.codewars.com/kata/convert-a-string-to-an-array/

fn main() {
    fn conver_a_string_to_an_array(_name: &str) -> Vec<&str> {
        return _name.split(" ").collect();
    }

    println!("{:?}", conver_a_string_to_an_array("Sam Harri"));
}
