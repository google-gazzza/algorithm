// string-array-duplicates
// String array duplicates
// difficulty: 6kyu
// https://www.codewars.com/kata/59f08f89a5e129c543000069

const dup = (s) => {
  return s.map((e) => {
    while (e.match(/([a-z])\1/gi)) {
      e = e.replace(/([a-z])\1/gi, '$1');
    }
    return e;
  });
};


console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]), ['codewars', 'picaniny', 'hubububo']);
console.log(dup(["abracadabra", "allottee", "assessee"]), ['abracadabra', 'alote', 'asese']);
console.log(dup(["kelless", "keenness"]), ['keles', 'kenes']);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), ['Wolomolo', 'flodoromonlighters', 'chuchchi']);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), ['adanac', 'sones', 'toles', 'pele']);
console.log(dup(["callalloo", "feelless", "heelless"]), ['calalo', 'feles', 'heles']);
console.log(dup(["putteellinen", "keenness"]), ['putelinen', 'kenes']);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), ['keles', 'voradospulen', 'achcha']);
