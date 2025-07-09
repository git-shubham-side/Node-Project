const quotes = [
  { text: "Believe in yourself.", author: "Pawan" },
  { text: "Push your limits.", author: "Ayush" },
  { text: "Stay positive, work hard.", author: "Bhagyashri" },
  { text: "Never stop learning.", author: "Shivlila" },
  { text: "Success is no accident.", author: "Shubham" },
];
let idx = Math.floor(Math.random() * 5) + 1;
let quote = quotes[idx];
let qt = quote.text;
let auth = quote.author;
console.log(qt, auth);
