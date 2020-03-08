// https://www.codewars.com/kata/maximum-multiple/

fn main() {
    fn max_multiple(divisor: u32, bound: u32) -> u32 {
        return ((f64::from(bound) / f64::from(divisor)).floor() * f64::from(divisor)) as u32;
    }

    println!("{}", max_multiple(2, 7));
    println!("{}", max_multiple(3, 10));
}

// best practice in codewars

// fn max_multiple(divisor: u32, bound: u32) -> u32 {
//     bound / divisor * divisor
// }
