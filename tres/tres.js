
let n = +prompt("Type a value for N:", "10")
while(!Number.isInteger(n)){
    n = +prompt("ERROR!, don't panic. \nThis time enter an INTEGER value for N", "10");
}

document.writeln(`<p>\n n = ${n}</p>`)
let m = +prompt("Type a value for M:", "100")
while(!Number.isInteger(m)){
    m = +prompt("ERROR!, don't panic. \nThis time enter an INTEGER value for M", "100");
}

document.writeln(`</p>m = ${m}</p>`)
let skipping = confirm('Do you wanna skip even numbers?');

document.writeln(`Are we skipping even numbers? -> ${skipping}`)
let result = 0;

if(n > m){
    alert('WARNING!\nN is bigger than M, so we swapped their values to dont generate an error :)');
    [n,m] = [m,n];
}

for(let i=n; i<=m; i++){
    if(skipping){
        if(i%2 == 0) {
            result += i;
        }
        continue;
    }else{
        result += i;
    }
}

document.writeln(`<p>The result of ${(skipping)? "even" : "the"} numbers between ${n} and ${m} is: ${result}</p>`)
console.log(`N; ${n} 
M: ${m}
skipping: ${skipping} 
result: ${result}`);