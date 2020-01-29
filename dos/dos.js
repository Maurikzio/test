

let tomato = 15.678;
let avocado = 123.965;
let potato = 90.2345;

//1 - max number
let mostExpensivePrice = Math.max(tomato, avocado, potato);
document.writeln('</br>')
document.writeln(`The most expensive product costs: ${mostExpensivePrice}`);

//2 - min number
let cheapestPrice = Math.min(tomato, avocado, potato);
document.writeln('</br>')
document.writeln(`The cheapest product costs: ${cheapestPrice}`);

//3 - sum of all prices
let allProductsPrices = tomato + avocado + potato;
document.writeln('</br>')
document.writeln(`The total cost is: ${allProductsPrices}`);

//4 - sum of integer part of products and rounded down
let pricesRoundedDown = Math.floor(tomato) + Math.floor(avocado) + Math.floor(potato);
document.writeln('</br>');
document.writeln(`The total cost rounded down is: ${pricesRoundedDown}`);

//5 - sum of prices rounded to hundreds
document.writeln('</br>');
let roundedToHundreds = Math.ceil(allProductsPrices / 100) * 100;
document.writeln(`Prices sum rounded to hundred ${roundedToHundreds}`)

//6 - Boolean to sum of all prices rounded down -> true-Even , false-Odd
document.writeln('</br>');
let evenOrOdd = pricesRoundedDown % 2 == 0 ? "Even" : "Odd";
document.writeln(`The sum of products' prices is: ${evenOrOdd}`)

//7 - clients change of 500uah
let clientsChange = 500 - allProductsPrices;
document.writeln('</br>');
document.writeln(`The change for 500uah will be: ${clientsChange} uah`);

//8 - average price rounded to the second decimal place.
let averagePrice = allProductsPrices/3;
document.writeln('</br>');
document.writeln(`The average price is: ${averagePrice.toFixed(2)} uah`);

//more complicated----- booooo!!! XD

//9 - Discount random 
let discount = Math.floor(Math.random() * (100 + 1));
//price with 2 decimals rounded
let priceWithDiscount = (allProductsPrices - ((allProductsPrices * discount) / 100)).toFixed(2);
//cost of goods -> half of total prices
let costOfGoods = Math.floor(allProductsPrices)/2;
// lost profit 
let lostProfit = costOfGoods - discount;

document.writeln('</br>');
document.writeln(`Initial price: ${allProductsPrices.toFixed(2)}, discount: ${discount}%, total price with discount ${priceWithDiscount} uah.`) 
document.writeln('<br>');
document.writeln(`Cost of goods is: ${costOfGoods} so, the lost profit will be: ${lostProfit}`);

document.writeln('<h3>Advanced &#128561</h3>');
let finalCheck = `
<h4> Mauricio's store </h4>

<div id='myContainer'>
<p>The expensive product costs: <code>${mostExpensivePrice}uah</code></p>
<p>The cheapest product costs: <code>${cheapestPrice}uah</code></p>
<p>The sum of all prices is: <code>${allProductsPrices}uah</code></p>
<p>Sum of integer part of all prices is: <code>${pricesRoundedDown}uah</code></p>
<p>The prices' sum rounded to hundreds is: <code>${roundedToHundreds}uah</code></p>
<p>The sum of all prices is: <code>${evenOrOdd}</code></p>
<p>Client paid <code>500uah</code>&#129297, his change without rounding will be: <code>${clientsChange}uah</code></p>
<p>The rounded to 2nd decimal average price is: <code>${averagePrice.toFixed(2)}</code></p>
<p>Our discount for you is: <code>${discount}%</code> for <code>${allProductsPrices.toFixed(2)}</code>. Total to pay: <code>${priceWithDiscount}uah</code></p>
<p>The cost of goods was: <code>${costOfGoods}uah</code> so, the lost profit will be: <code>${lostProfit}uah</code></p>
<p id="last"><strong>**************</strong><p>  
</div>  
`;
document.writeln(finalCheck)

// document.getElementById("cont").setAttribute("style", "display:flex, flexDirection: horizontal")
document.getElementsByTagName('h4')[0].style.textAlign = "center";
document.getElementById('last').style.textAlign = "center";
let container = document.getElementById('myContainer');
[...container.children].map(item => item.style.textAlign = "center");


