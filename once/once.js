//PROMISES
/*
//Eexecutor resolve the promise
const myPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
       resolve('done') 
    }, 2000);
});
// console.log(myPromise);
// setTimeout(() => {
//     console.log(myPromise);
// }, 5000);

//Executor rejects the promise
const myPromise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject(new Error('Whoops!'));
    }, 2000);   21
})

//reaction when promise is RESOLVED
const myPromise3 = new Promise(function(resolve, reject) {
    const date = Date.now();
    setTimeout(() => {
        resolve(date);
    }, 2000);
});

myPromise3
    .then(
        result => console.log(result),
        error => console.log(error)
    )

//reaction when a promise is REJECTED
const myPromise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject(new Error('whooops'));
    }, 2000);
});

myPromise4
    .then(
        function(result){ console.log(result)},
        function(error){ console.log(error);}
    )

//if we are interested just in succesful completions
const myPromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Well done!');
    }, 2000);
});
myPromise5.then(console.log);



//finally to then
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('well doneeeee!');
    }, 2000);
})
.finally(() => console.log('the promise is ready'))
.then((result) => console.log(result));

//promise becomes resolved inmediately upon creation
const myPromise6 = new Promise(resolve => resolve('excellent'));
myPromise6.then(console.log);


//LOAD SCRIPT
//using callbacks
function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.onload = function(){
        callback(null, script);
    };
    script.onerror = function(){
        callback(new Error(`Script load error for ${src}`));
    };

    document.head.append(script);
}

//using a PROMISE
function loadScript2 (src){
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = function(){
            resolve(script);
        };
        script.onerror = function(){
            reject(new Error(`script load error for ${src}`))
        }

        document.head.append(script);
    });
}

const thePromise = loadScript2("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
thePromise.then(
    script => alert(`${script.src} is loaded`),
    error => alert(`Error: ${error.message}`)
);
*/

//TASKS
//1
{
    let promise = new Promise(function(resolve, reject) {
        resolve(1);

        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
    // promise.then(alert);
}
//2
function delay(ms){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
// delay(3000).then(() => alert('runs after 3 seconds'));


async function getRandomChinese(length){
    let chineseChars = "";
    while(chineseChars.length < length){
        const myPromise = new Promise(function (resolve){
            setTimeout(() => {
                const sign = String(Date.now()).slice(-length);
                resolve(String.fromCharCode(sign))
            }, 50);
        });
        await myPromise.then(value => chineseChars+=value);
    }
    return chineseChars;
}

async function showChineseChar(){
    result.textContent = await getRandomChinese(4);
}
showChineseChar();










function start(counter){
    if(counter < 3){
        setTimeout(function(){
            counter++;
            console.log(counter);  
            start(counter);
        }, 1000);
    }
}
// start(0);