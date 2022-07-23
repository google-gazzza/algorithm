// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

descendingOrder(0) === 0;
descendingOrder(1) === 1;
descendingOrder(111) === 111;
descendingOrder(15) === 51;
descendingOrder(1021) === 2110;
descendingOrder(123456789) === 987654321;
