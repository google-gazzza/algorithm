// https://www.codewars.com/kata/shortest-word/

fn main() {
    fn find_short(_names: &str) -> usize {
        let mut temp: Vec<&str> = _names.split(" ").collect();
        temp.sort_by(|a, b| Ord::cmp(&a.len(), &b.len()));
        return temp[0].len();
    }

    println!("{:?}", find_short("bitcoin take over the world maybe who knows perhaps"));
    // 3
}
