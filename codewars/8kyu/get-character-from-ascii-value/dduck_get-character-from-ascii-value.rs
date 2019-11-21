// https://www.codewars.com/kata/get-character-from-ascii-value/


fn main() {
    fn get_char(c: i32) -> char {
        return c as u8 as char;
    }

    println!("{}", get_char(65));
}

