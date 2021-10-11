
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
    message=`The profit is ${Math.abs(profit)} and the percent is ${Math.abs(profitpercent)}%`;
  }
  else if(ip>curr)
  {
    let loss=(ip-curr)*qty;
    let losspercent=(loss/ip)*100;
    message=`The loss is ${Math.abs(loss)} and the percent is ${Math.abs(losspercent)}%`
  }
  else
  {
     message="No profit or loss";
  }
  outputBox.innerHTML=message;
}



submitBtn.addEventListener("click", calculate);
