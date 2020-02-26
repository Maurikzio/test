//1
function getMaxDigit(number){
    return Math.max(...number.toString().split(''));
}
// console.log(getMaxDigit(1234));

//2
function pow(base, exp){
    let result = 1;
    for(let i=0; i<exp; i++){
        result *= base;
    }
    return result;
}
// console.log(pow(2,3));

//3
function firstLetterUppercased(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
// console.log(firstLetterUppercased('ala'));

//4
function getTaxesPayment(amount){
    return amount - (amount * 0.195);
}
// console.log(getTaxesPayment(1000));

//5
function getRandomNumber(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));


//6
function countLetter(letter, word){
    return word.toLowerCase().split("").filter(value => value === letter).length;
}
// console.log(countLetter("а", "Асталависта"));

//7
function convertCurrency(amount){
    //the currency can be at the beginning or at the end, so with this we can remove that possibility
    const justNumbers = Number(amount.replace(/\D/g,""));
    const currency = amount.replace(/[0-9]/g, '');
    let result = '';
    
    switch(currency.toLowerCase()){
        case 'uah':
            result = `${justNumbers / 25} $`;
            break;
        case '$':
            result = `${justNumbers * 25} UAH`;
            break;
        default:
            result = `WARNING!! currency: '${currency}' is not accepted!`
    }
    return result;
}
// console.log('--7--');
// console.log(convertCurrency("2500UAH"));
// console.log(convertCurrency("2500uah"));
// console.log(convertCurrency("$100"));
// console.log(convertCurrency("100iui"));


//8 random password
function getRandomPassword(len = 8){
    //getRandomNumber is passed as the mapping function of Array.from()
    return Number(Array.from(new Array(len), () => getRandomNumber(0,9)).join(''));
}
// console.log(getRandomPassword(4));
// console.log(getRandomPassword());

//9
function deleteLetters(letter, sentence){
    return (sentence.includes(letter)) 
            ? sentence.split('').filter(value => value !== letter).join('')
            : `${letter} was not found`
}
// console.log(deleteLetters('a', "blablabla"));
// console.log(deleteLetters('s', "blablabla"));

//10
function isPalyndrom(word){
    //short way, regex->(/[,.\s\W]/g,'') for take nonalphanumeric characters out
    const cleanedWord = word.replace(/[,.\s]/g,'');
    return [...cleanedWord].reverse().join('').toLowerCase() === cleanedWord.toLowerCase();

}
// console.log(isPalyndrom("мадам"));
// console.log(isPalyndrom("Аргентина манит негра"));
// console.log(isPalyndrom("Red rum, sir, is murder"));



//11
function deleteDuplicateLetters(word){
    const lowerCased = word.toLowerCase();
    return lowerCased.split('').filter(value => lowerCased.indexOf(value) === lowerCased.lastIndexOf(value)).join('');
}
// console.log(deleteDuplicateLetters("Бисквит был очень нежный"));
// console.log(deleteDuplicateLetters('holAsa aj'));
// console.log(deleteDuplicateLetters("abc da"));
// console.log(deleteDuplicateLetters('abc da fa'));


const myList = document.getElementById('hw');//ul


function maxdigit(n){
    console.log(`hello ${n}`);
}
function apow(){
    console.log('aaaaaapow');
}

const myFunctions = [[apow, 'base', 'exponent'] ];

// for(let item of myFunctions){
//     const [fn, ...args] = item;
//     console.log(fn);
//     console.log(args);
// }

function addInputs(into, amount=1, placehorders){
    for(let i=0; i<amount; i++){
        let input = document.createElement('input');
        input.setAttribute('placeholder',placehorders[i]);
        into.appendChild(input);
    }
}

function addButton(into, name){
    const button = document.createElement('button');
    button.textContent = name;
    into.appendChild(button);
}

function createItems(into, data){
    for(let element of data){
        const [fn, ...args] = element;
        const listItem = document.createElement('li');
        into.appendChild(listItem);
        addInputs(listItem, args.length, args);
        addButton(listItem, fn.name);
    }
}

createItems(myList, myFunctions);

// for(let element of [...myList.children]){
//     let inputs = [];
//     let action = '';
//     for(let item of [...element.children]){
//         // if(item.nodeName === 'INPUT') {
//         //     inputs.concat(item.value);
//         // }else if(item.innerHTML === 'BUTTON'){
//         //     action = item.innerHTML;
//         // }
//         // console.log(item.nodeName);
//         console.log(item.textContent);

//     }
//     // console.log(action);
// }

/*
button1.addEventListener('click', function(){
    input.value = input.value || 2;
    input2.value = input2.value || 3;
    label1.textContent = (Number(input.value) && Number(input2.value)) 
        ? pow(input.value, input2.value) 
        : 'error';
});
*/
