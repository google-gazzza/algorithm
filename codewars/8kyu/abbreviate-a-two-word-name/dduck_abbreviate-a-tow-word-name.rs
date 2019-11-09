// https://www.codewars.com/kata/abbreviate-a-two-word-name/

use std::string::String;

fn main() {
    fn abbrev_name(_name: &str) -> String {
        let characters: Vec<char> = _name.split(" ").map(|str| {
            str.to_string().chars().nth(0).unwrap()
        }).collect();
        return [characters[0].to_uppercase().to_string(), characters[1].to_uppercase().to_string(), ].join(".");
    }

    println!("{}", abbrev_name("Sam Harri"));
}
