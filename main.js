
var initialPrice = document.getElementById("initial-price");
var stocksQuantity = document.getElementById("stocks-quantity");
var currentPrice = document.getElementById("current-price");
var submitBtn = document.getElementById("submit-btn");
var outputBox = document.getElementById("output-box");




function calculate() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  let message="";
  if(ip<curr)
  {
    let profit=(curr-ip)*qty;
    let profitpercent=(profit/ip)*100;
    message=`The profit is ${profit} and the percent is ${profitpercent}%`;
  }
  else if(ip>curr)
  {
    let loss=(ip-curr)*qty;
    let losspercent=(loss/ip)*100;
    message=`The loss is ${loss} and the percent is ${losspercent}%`
  }
  else
  {
     message="No profit or loss";
  }
  outputBox.innerHTML=message;
}



submitBtn.addEventListener("click", calculate);