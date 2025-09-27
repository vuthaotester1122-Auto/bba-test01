let numbers = [];
for (let i = 1; i <= 100; i++) {
  if (i % 17 === 0) {
    numbers.push(i);
  }
}

console.log("Các số chia hết cho 17:", numbers);

let count = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    console.log(`(${numbers[i]}, ${numbers[j]})`);
    count++;
  }
}
console.log("Tổng số cặp:", count);