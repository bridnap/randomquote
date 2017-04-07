var number;
var quoteStore;
function randomizer() {
  var randomNum;
  randomNum = Math.floor(Math.random() * (10 - 1 + 1));
  return randomNum;
}

function randomQuote() {
  var num = randomizer();
  console.log(num);
  var quotes = 
      ["Rejoice always.",
       "Do not quench the spirit.",
       "Do not despise prophecies.",
       "Test all things; hold fast what is good.",
       "Abstain from every form of evil.",
       "But the end of all things is at hand; therefore be serious and watchful in your prayers.",
