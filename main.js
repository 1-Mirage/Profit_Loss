
var initialPrice = document.getElementById("initial-price");
var stocksQuantity = document.getElementById("stocks-quantity");
var currentPrice = document.getElementById("current-price");
var submitBtn = document.getElementById("submit-btn");
var outputBox = document.getElementById("output-box");



function reloadpage()
{
  location.reload();
}
function calculate() {
  if(initialPrice.value===""||stocksQuantity.value===""||currentPrice.value==="")
  {
    reloadpage();
    alert("Please fill out all Fields");
    return;
  }
  else
  {

  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  let message="";
  if(ip<curr)
  {
    let profit=(curr-ip)*qty;
    let profitpercent=(profit/ip)*100.0;
    message=`The profit is ${Math.abs(profit)} and the percent is ${Math.abs(profitpercent.toFixed(2))}%`;
    outputBox.style.color='green'
  }
  else if(ip>curr)
  {
    let loss=(ip-curr)*qty;
    let losspercent=(loss/ip)*100.0;
    
    message=`The loss is ${Math.abs(loss)} and the percent is ${Math.abs(losspercent.toFixed(2))}%`;
    outputBox.style.color='red'
  }
  else
  {
     message="No profit or loss";
  }
  outputBox.innerHTML=message;
}
}



submitBtn.addEventListener("click", calculate);
