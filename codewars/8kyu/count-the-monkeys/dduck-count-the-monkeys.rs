// https://www.codewars.com/kata/count-the-monkeys/

fn main() {
    fn monkey_count(n: i32) -> Vec<i32> {
        return (1..n + 1).collect();
    }

    println!("{:?}", monkey_count(32));
}

// best practice in codewars
//fn monkey_count(n: i32) -> Vec<i32> {
//    (1..=n).collect()
//}

